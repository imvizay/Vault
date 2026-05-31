
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
  const {setMasterKey,loginUser} = useUser()

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

      console.log("FIREBASE LOGGED IN USER OBJ : ",user)
      loginUser(user.email)

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

    <section className="relative min-h-screen w-full overflow-hidden bg-[#05010f] flex items-center justify-center px-4 py-8">

    <div className="absolute top-[-10%] left-[-10%] h-[320px] w-[320px] rounded-full bg-violet-600/20 blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] h-[320px] w-[320px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_40%)]" />

    <div className="relative z-10 w-full max-w-[520px] rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_60px_rgba(139,92,246,0.12)] p-5 sm:p-8 md:p-10">

      <div className="flex items-center justify-between mb-8">

        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-violet-200/50 hover:text-white transition-all duration-300 text-[12px] uppercase tracking-[0.15em]">
          <ArrowLeft size={15} />
          Back
        </button>

        <button onClick={() => navigate('/register')} className="rounded-full border border-violet-300/25 px-5 py-2.5 text-[11px] tracking-[0.12em] text-violet-200 hover:bg-white hover:text-black transition-all duration-300">
          REGISTER
        </button>

      </div>

      <div className="text-center mb-8">

        <h1 className="font-[SyneExtraBold] text-[25px] sm:text-[40px] tracking-[-0.08em] bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
          GalleryVault
        </h1>

        <p className="mt-2 text-violet-100/35 text-sm tracking-wide">
          Securely store your memories
        </p>

      </div>

      <form onSubmit={handleSubmit(onAccessvault)} className="space-y-4">

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] transition-all duration-300 hover:border-violet-400/30 focus-within:border-violet-400/40 focus-within:shadow-[0_0_30px_rgba(139,92,246,0.15)]">

          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Mail size={18} className="text-violet-200/40" />
          </div>

          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent py-4 pl-12 pr-4 text-sm text-white placeholder:text-violet-100/25 outline-none"
          />

        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] transition-all duration-300 hover:border-violet-400/30 focus-within:border-violet-400/40 focus-within:shadow-[0_0_30px_rgba(139,92,246,0.15)]">

          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Lock size={18} className="text-violet-200/40" />
          </div>

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full bg-transparent py-4 pl-12 pr-12 text-sm text-white placeholder:text-violet-100/25 outline-none"
          />

          <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2">
            <Eye size={18} className="text-violet-200/35" />
          </button>

        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-1">


          <button type="button" className="text-[12px] text-violet-300/60 hover:text-white transition-colors">
            Forgot password?
          </button>

        </div>

        <button type="submit" className="group relative mt-6 w-full overflow-hidden rounded-2xl py-4 font-medium uppercase tracking-[0.18em] text-[11px] text-white border border-violet-400/20 bg-gradient-to-r from-violet-500/20  transition-all duration-500">

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r" />

          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-300">
            Access Vault
            <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
          </span>

        </button>

      </form>

    </div>

  </section>

  )
} 