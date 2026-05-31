
import React from 'react'

// ICONS
import { Eye, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons';

// NAVIGATE
import { useNavigate } from 'react-router-dom';

// REACT FORM AND ZOD
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// FIREBASE LOGIN
import { signInWithEmailAndPassword } from 'firebase/auth';
import { googleProvider,facebookProvider,githubProvider } from '../../config/firebase/firebase.js';

import {doc,getDoc} from 'firebase/firestore'
import {db} from '../../config/firebase/firebase.js'

// UTILS
import { deriveMasterKey } from '../../utilis/deriveMasterKey.js';
import { loginInWithFirebase } from '../../config/firebase/firebase_auth.js';

import { useUser } from '../../contexts/UserContext.jsx';


export default function Login() {
  const navigate = useNavigate()
  const {setMasterKey} = useUser()

  const {register,  
    handleSubmit,
    clearErrors,
    formState:{
      isSubmitting,
      errors
    }
  } = useForm()



  const onAccessvault = async (data) => {
    try{
      console.group("LOGIN FUNCTION STARTED")
      
     
      const {user,salt} = await loginInWithFirebase(data.email,data.password)
      console.log('[1] User authenticated')

      const masterKey = await deriveMasterKey(data.password,salt)
       console.log('[2] Master Key Generated')

      setMasterKey(masterKey)
      
      // console.log("MASTER KEY:",masterKey)
      // console.log("USER:",user)
      navigate('/user/dashboard')


      console.groupEnd()

    }
    catch(error){
      console.log("ERROR LOGIN:",error)
      alert("FAIL")
    }
  }


  return (

    <section className='w-full min-h-screen overflow-hidden bg-[#05010f] flex items-center justify-center p-3 sm:p-5 lg:p-6 relative'>

      

        {/* RIGHT PANEL */}

        <div className="relative flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-8 overflow-y-auto' overflow-x-hidden">

          {/* TOP BAR */}

          <div className='flex justify-between items-center gap-4 mb-4 md:mb-7'>

            <button onClick={() => navigate('/')} className='flex items-center gap-2 text-violet-200/45 hover:text-white transition-all duration-300 text-[12px] sm:text-[13px] tracking-[0.08em] uppercase w-fit'>
              <ArrowLeft size={15} />
              Back
            </button>

            <button onClick={()=>navigate('/register')} className='text-[12px] sm:text-[13px] border border-violet-300/40 rounded-2xl py-2.5 px-4 sm:px-5 text-violet-300 hover:text-black hover:bg-white/60 transition-colors whitespace-nowrap'>
              REGISTER
            </button>

          </div>

          {/* MOBILE LOGO */}

          <div className='lg:hidden text-center mb-4 md:mb-8'>

            <div className='text-[26px] md:text-[38px] sm:text-[48px] font-[SyneExtraBold] tracking-[-0.06em] bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent'>
              GalleryVault
            </div>

          </div>

          {/* HEADER */}

          <div className='mb-6'>

            <div className='uppercase tracking-[0.32em] text-[9px] sm:text-[10px] text-violet-200/35 mb-2 md:mb-3'>
              Welcome Back
            </div>

            <h2 className='max-w-[520px] text-[clamp(2.2rem,8vw,2rem)] font-[SyneExtraBold] leading-[0.88] tracking-[-0.07em] text-white mb-3'>

              Sign into
              <br className='sm:hidden' />
              {' '}your vault.

            </h2>

            <p className='text-[13px] sm:text-[14px] leading-7 text-violet-100/40'>
              Access your encrypted memories securely.
            </p>

          </div>

          {/* SOCIAL BUTTONS */}

          <div className='flex flex-col lg:flex-row gap-2 md:gap-4 mb-8'>

            <button className='group relative overflow-hidden flex-1 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-4 px-4 flex items-center justify-center gap-3 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]'>

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 to-cyan-500/10' />

              <FontAwesomeIcon icon={faGoogle} className='relative z-10 text-white/70' />

              <span className='relative z-10 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-white/70'>
                Google
              </span>

            </button>

            <button className='group relative overflow-hidden flex-1 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-4 px-4 flex items-center justify-center gap-3 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]'>

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 to-pink-500/10' />

              <FontAwesomeIcon icon={faGithub} className='relative z-10 text-white/70' />

              <span className='relative z-10 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-white/70'>
                Github
              </span>

            </button>

            <button className='group relative overflow-hidden flex-1 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-4 px-4 flex items-center justify-center gap-3 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]'>

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 to-blue-500/10' />

              <FontAwesomeIcon icon={faFacebook} className='relative z-10 text-white/70' />

              <span className='relative z-10 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-white/70'>
                Facebook
              </span>

            </button>

          </div>

          {/* DIVIDER */}

          <div className='flex items-center gap-3 mb-6'>

            <div className='flex-1 h-px bg-white/10' />

            <span className='text-[8px] sm:text-[9px] tracking-[0.24em] uppercase text-violet-200/25 whitespace-nowrap'>
              Continue with Email
            </span>

            <div className='flex-1 h-px bg-white/10' />

          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit(onAccessvault)} className='space-y-2 md:space-y-4'>

            {/* EMAIL */}

            <div className='relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden'>

              <div className='absolute left-4 top-1/2 -translate-y-1/2'>
                <Mail size={16} className='text-violet-200/35' />
              </div>

              <input {...register('email')}
              
              type='email' placeholder='Email Address' className='w-full bg-transparent outline-none border-none py-4 pl-12 pr-4 text-[13px] sm:text-[14px] text-white placeholder:text-violet-200/25' />

            </div>

            {/* PASSWORD */}

            <div className='relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden'>

              <div className='absolute left-4 top-1/2 -translate-y-1/2'>
                <Lock size={16} className='text-violet-200/35' />
              </div>

              <input {...register('password')} type='password' placeholder='Password' className='w-full bg-transparent outline-none border-none py-4 pl-12 pr-12 text-[13px] sm:text-[14px] text-white placeholder:text-violet-200/25' />

              <button type='button' className='absolute right-4 top-1/2 -translate-y-1/2'>
                <Eye size={16} className='text-violet-200/30' />
              </button>

            </div>

            {/* OPTIONS */}

            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1'>

              <label className='flex items-center gap-2 cursor-pointer'>

                <input type='checkbox' className='accent-violet-500 w-3.5 h-3.5' />

                <span className='text-[11px] sm:text-[12px] text-violet-100/40'>
                  Keep me signed in
                </span>

              </label>

              <button type='button' className='text-[11px] sm:text-[12px] text-left sm:text-right text-violet-300/55 hover:text-white transition-colors'>
                Forgot password?
              </button>

            </div>

            {/* SUBMIT */}

            <button type='submit' className='group relative overflow-hidden w-full rounded-xl py-4 mt-5 bg-transparent border border-white/20 text-white font-medium tracking-[0.14em] uppercase text-[10px] sm:text-[11px] transition-all duration-500 hover:scale-[1.01] hover:text-black'>

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/60' />

              <span className='relative z-10 flex items-center justify-center gap-2'>
                Access Vault
                <ArrowRight size={14} className='transition-transform duration-500 group-hover:translate-x-1' />
              </span>

            </button>

          </form>

        </div>

     

    </section>

  )

}