import React, {
  useEffect,
  useState
} from 'react'

import { useOutletContext } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { useUser } from '../../contexts/UserContext'

import { fetchImages } from '../../config/firebase/upload'

function Gallery() {

  const {user,masterKey,isRestoring} = useUser()
  const [selectedImage, setSelectedImage] = useState(null)
  const [galleryImages, setGalleryImages] = useState([])

  const {deleteImage} = useOutletContext()

  const {data: imagesData,isLoading,error } = useQuery({
    queryKey: ['images', user],
    queryFn: fetchImages,
    enabled: !!user
  })

  useEffect(() => {
  console.log("MASTER KEY STATE:", masterKey)
}, [masterKey])

  useEffect(() => {

    document.body.style.overflow = selectedImage ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }

  }, [selectedImage])

  useEffect(() => {

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }

  }, [])

  useEffect(() => {

    if (!imagesData ||!masterKey) return

    const decryptImages = async () => {

      const decryptedImages = await Promise.all(

        imagesData.map(async (image) => {

            try {
              const response = await fetch(image.image_url)

              const encryptedBuffer = await response.arrayBuffer()

              const iv = Uint8Array.from(atob(image.iv),c => c.charCodeAt(0))

              const decryptedBuffer = await crypto.subtle.decrypt(
                  {
                    name: 'AES-GCM',
                    iv
                  },
                  masterKey,
                  encryptedBuffer
                )

              const blob = new Blob(
                  [decryptedBuffer],
                  {
                    type:image.mime_type
                  }
                )
              const previewUrl = URL.createObjectURL(blob)

              return {
                ...image,
                previewUrl
              }
            } catch (err) {
              console.error("DECRYPTION FAILED",image.id,err)
              return null
            }
            }
          )
        )
      setGalleryImages(decryptedImages.filter(Boolean))
    }

    decryptImages()

    return () => {

      galleryImages.forEach( image => {
          if(image.previewUrl) {
            URL.revokeObjectURL(
              image.previewUrl
            )
          }
        }
      )

    }

  }, [imagesData,masterKey])

  if(isRestoring){
   return <div>Restoring Vault...</div>
  }

  if (!masterKey) {
    return (<div>Vault Locked.Login again.</div>)
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Failed to load images</h2>
  }

  return(
    <>

    {/* IMAGES */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">

      {galleryImages?.map(image => (
      
        <div
          key={image.id}
          onClick={() => setSelectedImage(image)}
          className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[24px] border border-white/5 bg-[#16161d] hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-500"
        >
        
          <img
            src={image.previewUrl}
            alt={image.original_name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
      
          <div className="absolute bottom-0 left-0 right-0 p-3">
      
            <p className="truncate text-xs font-medium text-white">
              {image.original_name}
            </p>
      
            <p className="mt-1 text-[11px] text-white/50">
              {(image.size / 1024).toFixed(1)} KB
            </p>
      
          </div>
      
        </div>

      ))}

    </div>
    

    {/* PREVIEW SELECT IMAGE */}
    {
      
      
      selectedImage && (
        
        <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl">
        
          {/* CONTROLS */}
      
          <div className="absolute top-4 right-4 z-20 flex gap-3">
      
            <button
              onClick={() => setSelectedImage(null)}
              className="w-12 h-12 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-xl"
            >
              ✕
            </button>
      
            <button
              onClick={() => {
                deleteImage(selectedImage.id)
                setSelectedImage(null)
              }}
              className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/20 text-red-400 backdrop-blur-xl"
            >
              🗑
            </button>
            
          </div>
            
          {/* IMAGE */}
            
          <div className="flex items-center justify-center h-full w-full p-3 sm:p-6">
            
            <img
              src={selectedImage.previewUrl}
              alt={selectedImage.original_name}
              className="
              max-h-[92vh]
              max-w-[95vw]
              object-contain
              rounded-[24px]
              shadow-[0_0_80px_rgba(139,92,246,0.25)]
              "
            />
          </div>
                  
        </div>

      )
    }
    
    </>
  )

}

export default Gallery