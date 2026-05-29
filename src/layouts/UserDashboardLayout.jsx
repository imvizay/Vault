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

function UserDashboardLayout() {

  const [uploadOverlay,setUploadOverlay] = useState(false)
  const [notification,setNotification] = useState(null)
  const inputRef = useRef()
  const {masterKey} = useUser()

  useEffect(() => {

    if(!notification) return
    console.log("notification running")
    const t = setTimeout(() => {
    
        setNotification(null)
    
    }, 3000)
  
    return () => clearTimeout(t)

  }, [notification])



  const handleOpenFilePicker = () => {
    inputRef.current.click()
  }

  const handleFileChange = async (e) => {

    if(!masterKey){
      alert("Master key expired as the user refreshed the browser.Please login again to generate fresh masterKey again.")
      return 
    }

    const files = Array.from(e.target.files)

    if(!files.length) return 
    
    try{  
      
      // encrypted files
      
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
          console.log(`FILE:${file}`)
          console.log(`IV:${iv}`)
          console.log(`ENCRYPTEDDATA:${encryptedData}`)

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
            originalName:file.name,     
            originalType:file.type,     
            size:file.size,     
            iv:ivBase64,      
            encryptedBlob,      
        }
      
        })
      )

      // BACKEND API CALL 
      const formData = new FormData()

      encryptedFiles.forEach(element => {
        console.log("FILE EL",element)
      });



      setNotification({
       message: `${files.length} file selected`,
       files
      })
    }

    catch(error){
      console.log("ENCRYPTION ERROR : ",error)
    }
  }

  

  return (

    <div className='min-h-screen bg-[#111114] text-white'>

      {/* TOPBAR */}
      <header className=' h-[70px] border-b border-white/5 bg-[#111114]/80 backdrop-blur-xl px-10 flex items-center justify-between '>

        {/* LEFT */}
        <div className='flex items-center gap-16'>

          {/* LOGO */}
          <div className='flex items-center gap-3'>

            <div className=' w-10 h-10 rounded-2xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shadow-lg shadow-violet-500/20 '>

              <Shield size={18} className='text-white' />

            </div>

            <h1 className=' text-[22px] font-black tracking-tight '>
              Gallery Vault
            </h1>

          </div>

        </div>

        {/* USER */}
        <button className=' flex items-center gap-4 px-3 py-0.5 rounded-2xl transition-all duration-300 bg-white/[0.03] 
        border border-white/5 hover:bg-white/[0.06]'>

          <img src='https://i.pravatar.cc/100' alt='user' className=' w-12 h-12 rounded-full object-cover ' />

          <span className='font-semibold text-[14px]'>
            Vijay Meena
          </span>

          <ChevronDown size={18} />

        </button>

      </header>

      {/* BODY */}
      <section className='px-12 py-3'>

        {/* HEADER */}
        <div className='flex items-start justify-between'>

          {/* LEFT */}
          <div>

            <div className='flex items-center gap-3'>

              <h2 className=' text-[22px] font-black tracking-tight leading-none '>

                Your Memories

              </h2>

              <Shield size={26} className='text-violet-600 mt-2' />

            </div>

            <p className=' text-[#6b7280] text-[12px] font-medium '>

              Encrypted and secured just for you.

            </p>

          </div>

          {/* RIGHT */}
          <div className='flex items-center gap-5'>

            <button onClick={()=>setUploadOverlay(prev => !prev)} className='text-[12px] group relative overflow-hidden h-[40px] px-6 rounded-[20px] border border-violet-400/20 bg-gradient-to-br bg-violet-600 text-white font-medium flex items-center gap-3 '>

              <Upload size={18} className='relative z-10' />

              <span className='relative z-10'>
                Upload Photos
              </span>

            </button>

            {/* VIEW MODES */}
            {/* <div className='flex items-center gap-3'>

              <button className=' w-[56px] h-[56px] rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center '>

                <LayoutGrid size={20} />

              </button>

              <button className=' w-[56px] h-[56px] rounded-2xl bg-[#f2f2f7] text-[#6b7280] flex items-center justify-center hover:bg-[#ececf2] transition-all duration-300 '>

                <List size={20} />

              </button>

            </div> */}

          </div>

        </div>

        {/* FILTERS */}
        <div className=' flex items-center justify-between mt-4 '>

          {/* TABS */}
          <div className='flex items-center gap-2'>

            {
              ['All', 'Images', 'Videos', 'Favorites']
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

          {/* SORT */}
          {/* <button className=' h-[56px] px-6 rounded-2xl bg-white border border-[#ececf2] flex items-center gap-4 font-medium text-[#4b5563] hover:border-violet-300 transition-all duration-300 '>

            Date Added

            <ChevronDown size={18} />

          </button> */}

        </div>

        {/* OUTLET */}
        <main className='mt-10 rounded-[32px] bg-white/[0.02] border border-white/5 p-6'>

          <Outlet />

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