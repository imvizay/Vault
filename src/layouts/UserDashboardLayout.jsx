import React,{useEffect, useRef, useState} from 'react'
import { Outlet } from 'react-router-dom'

// ICONS
import {
  Search,
  Shield,
  Upload,
  LayoutGrid,
  List,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react'

// MASTERKEY
import { useUser } from '@contexts/UserContext'
import { useMutation } from '@tanstack/react-query'
import { removeImage, uploadImageAPI } from '../config/firebase/upload'

import { useNavigate } from 'react-router-dom'

function UserDashboardLayout() {

  const [uploadOverlay,setUploadOverlay] = useState(false)
  const [notification,setNotification] = useState(null)
  const [logout,setLogout] = useState(false)
  const inputRef = useRef()
  const navigate = useNavigate()
  
  const {user,masterKey,logoutUser} = useUser()

  const isModalOpen = logout || uploadOverlay

  useEffect(()=>{
    if(masterKey){
      console.log("MK Active.")
    }
  },[masterKey])

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])


  useEffect(() => {
    if(!notification) return
    console.log("notification running")
    const t = setTimeout(() => {
        setNotification(null)
    }, 3000)
  
    return () => clearTimeout(t)
  }, [notification])


  const fileMutation  = useMutation({
    mutationFn:(payload)=>uploadImageAPI(payload)
  })

  const removeImageMutation = useMutation({
    mutationFn: (img_id) => removeImage(img_id)
  }) 

  const handleOpenFilePicker = () => {
    inputRef.current.click()
  }

  const handleFileChange = async (e) => {

    if(!masterKey){
      alert("Master key lost login again.")
      return 
    }

    const files = Array.from(e.target.files)

    if(!files.length) return 
    
    try{  
    
      // ENCRYPTED FILE ARRAY
      const encryptedFiles = await Promise.all(
      
        files.map(async file => {

          // FILE ---> BINARY
          const buffer = await file.arrayBuffer()

          // RANDOM IV FOR EVERY FILE
          const iv = crypto.getRandomValues(
            new Uint8Array(12)
          )

          // ENCRYPT FILE
          const encryptedData = await crypto.subtle.encrypt(
            {
              name:'AES-GCM',
              iv
            },
            masterKey,
            buffer
          )
      
          // CHECK STATUS
          // console.log(`FILE:${file}`)
          // console.log(`IV:${iv}`)
          // console.log(`ENCRYPTEDDATA:${encryptedData}`)

          // CONVERT BINARY INTO BLOB
          const encryptedBlob = new Blob(
            [encryptedData],
            {
              type:'application/octet-stream'  
            }
          ) 

          // CONVERT IV ---> BASE64
          const ivBase64 = btoa(      
            String.fromCharCode(...iv)
          )

          return {
                
            encryptedBlob,  
            metadata:{
              iv:ivBase64,  
              originalName:file.name,     
              originalType:file.type,     
              size:file.size,     
            }    
        }
      
        })
      )

      
      // PAYLOD FOR BACKEND DB.
      const formData = new FormData()

      // files array
      encryptedFiles.forEach(fileData => {
        formData.append('files',fileData.encryptedBlob , `${crypto.randomUUID()}.enc`)
      })

      // one metadata array for all files
      const metadata = encryptedFiles.map(file => file.metadata)

      
      formData.append('metadata',JSON.stringify(metadata))

      // BACKEND API CALL 
      fileMutation.mutate(formData)

    }

    catch(error){
      console.log("ENCRYPTION ERROR : ",error)
    }

    finally{
      setUploadOverlay(false)
      setNotification({
       message: `${files.length} file selected`,
       files
      })
    }
  }


  // HANDLE REMOVE IMAGE
  const deleteImage = (img_id) => {
    if(!img_id) return
    removeImageMutation.mutate(img_id)
  } 

  

  return (

    <div className="min-h-screen bg-[#111114] text-white overflow-x-hidden">

      {/* TOPBAR */}
      <header className="relative z-100 h-[70px] px-4 sm:px-6 lg:px-10 border-b border-white/5 bg-[#111114]/80 backdrop-blur-xl flex items-center justify-between">

        {/* LEFT */}
        <div className='flex items-center gap-16'>

          {/* LOGO */}
          <div className='flex items-center gap-3'>

            <div className=' w-10 h-10 rounded-2xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shadow-lg shadow-violet-500/20 '>

              <Shield size={18} className='text-white' />

            </div>

            <h1 className="hidden sm:block text-[22px] font-black tracking-tight">
              Gallery Vault
            </h1>

          </div>

        </div>

        {/* USER */}
       <button
        onClick={() => setLogout(prev => !prev)}
        className="flex items-center gap-2 sm:gap-4 px-2 sm:px-3 py-1 rounded-2xl
        bg-white/[0.03] border border-white/5 hover:bg-white/[0.06]
        transition-all duration-300"
      >
        
        <img
          src="https://i.pravatar.cc/100"
          alt="user"
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full object-cover"
        />
      
        <span className="hidden sm:block font-semibold text-sm">
          {user}
        </span>
        
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            user && logout ? "rotate-180" : ""
          }`}
        />
      
      </button>

    {
      logout && (
      
        <>
          {/* BACKDROP */}
      
          <div
            onClick={() => setLogout(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          />

          {/* MENU */}
      
          <div className=" fixed sm:fixed h-screen md:h-auto z-50 top-0 left-0 right-0 sm:bottom-auto sm:left-auto sm:right-6 sm:top-[60px] sm:w-[320px] sm:rounded-t-[32px] sm:rounded-[28px] border border-white/10 bg-[#18181f]/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/50
          "
          >
          
            {/* USER INFO */}
      
            <div className="flex items-center gap-4 pb-5 border-b border-white/10">
      
              <img
                src="https://i.pravatar.cc/100"
                alt=""
                className="w-14 h-14 rounded-full"
              />

              <div>
      
                <h3 className="font-semibold">
                  {user}
                </h3>
      
                <p className="text-sm text-zinc-500">
                  Secure Vault User
                </p>
      
              </div>
      
            </div>
      
            {/* MENU ITEMS */}
      
            <div className="flex flex-col justify-center items-center h-full mt-4 space-y-2">
        
              {user ? <button onClick={()=>{
                logoutUser()
                navigate('/')

              }} className=" w-full h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all font-medium
              "
              >
                Logout
              </button> : 

              <button onClick={()=>navigate('/login')} className=' w-full h-12 rounded-2xl bg-transparent border border-white text-white-400 hover:bg-green-950 transition-all font-medium'>
              Login  
              </button>}

              <button onClick={()=>setLogout(p=>!p)}
                className=" w-full h-12 rounded-2xl bg-transparent border border-white text-white-400 hover:bg-black transition-all font-medium
              ">Cancel</button>
      
            </div>
      
          </div>
      
        </>

      )
    }

      </header>

      {/* BODY */}
      <section className="px-4 sm:px-6 lg:px-12 py-4">

        {/* HEADER */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 p-6 sm:p-8">

              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center gap-3">

                  <Shield className="text-violet-400" size={26} />

                  <span className="text-violet-300 text-sm font-medium">
                    End-to-End Encrypted
                  </span>

                </div>

                <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
                  Your Memories
                </h2>

                <p className="mt-3 text-zinc-400">
                  Protected by client-side encryption.
                </p>

                <button
                  onClick={()=>setUploadOverlay(true)}
                  className="mt-6 h-12 px-6 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-all flex items-center gap-3 font-medium"
                >
                  <Upload size={18}/>
                  Upload Photos
                </button>

              </div>

              </div>

           </div>

        {/* FILTERS */}
        <div className=' flex items-center justify-between mt-4 '>

          {/* TABS */}
          <div className='flex items-center gap-2'>

            {
              ['All']
              .map((el, idx) => (

                <button key={idx} className={`text-[12px] h-[30px] px-6 rounded-2xl font-semibold transition-all duration-300
                  ${
                    idx === 0
                    ?
                    'bg-violet-500 border border-white/5 text-white'
                    :
                    'bg-white/[0.03] text-white border-violet-500/20'
                  }
                  `}
                >

                  {el}

                </button>

              ))
            }

          </div>

  

        </div>

        {/* OUTLET */}
        <main className="mt-6 rounded-[36px] border border-white/10 bg-[#16161d] p-3 sm:p-5">

          <Outlet context={{deleteImage}}/>

        </main>

      </section>

     {uploadOverlay && (

      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl'>
          
        <div className='w-[500px] rounded-[32px] border border-white/10 bg-[#18181f] p-8 shadow-2xl shadow-black/40'>
          
          <div className='flex items-center justify-between'>
          
            <div>
          
              <h2 className='text-[28px] font-bold text-white'>
                Secure Upload
              </h2>
          
              <p className='mt-2 text-sm text-zinc-400'>
                Your files will be encrypted before upload.
              </p>
          
            </div>
          
            <button
            onClick={() => setUploadOverlay(prev => !prev)}
            className='text-zinc-500 hover:text-white transition-all duration-300'
            >
            
              ✕
          
            </button>
          
          </div>
          
          <div  onClick={handleOpenFilePicker} className='mt-8 rounded-[28px] border-2 border-dashed border-white/10 bg-white/[0.02] p-12 text-center hover:border-violet-500/40 transition-all duration-300'>
          
            <Upload className='mx-auto text-violet-500' size={42} />
          
            <p className='mt-5 text-lg font-semibold text-white'>
              Drop your memories here
            </p>
          
            <p className='mt-2 text-sm text-zinc-500'>
              PNG, JPG, JPEG, HEIF
            </p>
          
            <input ref={inputRef} onChange={handleFileChange} type='file' multiple accept='.png,.jpg,.jpeg,.heif' 
             className='hidden' />
      
          </div>
          
        </div>
          
      </div>
      
      )}

      {/* NOTIFICATION */}

      {
        notification && (

        <div className='fixed top-5 left-1/2 z-[100] -translate-x-1/2 rounded-2xl border border-violet-500/20 bg-[#18181f] px-6 py-4 shadow-xl shadow-black/30 backdrop-blur-xl'>

          <p className='text-sm font-medium text-white'>

            {notification.message}

          </p>

        </div>

      )}

    </div>
  )
}

export default UserDashboardLayout