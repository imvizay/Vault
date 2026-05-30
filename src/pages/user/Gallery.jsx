import React, {
  useEffect,
  useState
} from 'react'

import { useOutletContext } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { useUser } from '../../contexts/UserContext'

import { fetchImages } from '../../config/firebase/upload'

function Gallery() {

  const {user,masterKey} = useUser()
  const [selectedImage, setSelectedImage] = useState(null)
  const [galleryImages, setGalleryImages] = useState([])

  const {deleteImage} = useOutletContext()

  const {data: imagesData,isLoading,error } = useQuery({
    queryKey: ['images', user?.uid],
    queryFn: fetchImages,
    enabled: !!user
  })

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
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1 sm:gap-2 p-2">
     {galleryImages?.map(image => (

    <div
      key={image.id}
      onClick={() => setSelectedImage(image)}
      className="mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-[28px] bg-[#0a0a0a] border border-white/10 hover:border-violet-500/30 transition-all duration-500"
    >
      
      <img
      src={image.previewUrl}
      alt={image.original_name}
      className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all">
      
        <p className="text-white text-sm font-medium truncate">
          {image.original_name}
        </p>
      
        <p className="text-white/60 text-xs">
          {(image.size / 1024).toFixed(1)} KB
        </p>
      
      </div>
      
    </div>
    ))}

    </div>

    {
      selectedImage && (
      
        <div className="fixed inset-0 z-[800] flex items-center justify-center">
        
          <div
            onClick={() => setSelectedImage(null)}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          />

          <div className="absolute top-4 right-4 z-20 flex gap-3">
      
            <button
              onClick={() => setSelectedImage(null)}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all"
            >
              ✕
            </button>
      
            <button
              onClick={() => {
                deleteImage(selectedImage.id)
                setSelectedImage(null)
              }}
              className="h-12 px-5 rounded-2xl bg-red-500/15 border border-red-500/20 text-red-400 hover:bg-red-500/25 transition-all"
            >
              Delete
            </button>
            
          </div>
            
          <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-10">
            
            <img
              src={selectedImage.previewUrl}
              alt={selectedImage.original_name}
              className="max-w-full max-h-[85vh] object-contain rounded-[32px] border border-white/10 shadow-[0_0_120px_rgba(139,92,246,.25)]"
            />

          </div>
            
          <div className="absolute bottom-4 left-4 z-20 rounded-[24px] bg-white/[0.04] border border-white/10 backdrop-blur-xl px-5 py-4">
            
            <h3 className="text-white font-semibold">
              {selectedImage.original_name}
            </h3>
            
            <p className="mt-1 text-xs text-white/50">
              {(selectedImage.size / 1024).toFixed(1)} KB
            </p>
            
          </div>
            
        </div>

      )
    }
    </>
  )

}

export default Gallery