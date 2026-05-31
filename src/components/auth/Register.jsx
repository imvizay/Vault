// Register.jsx

import React from 'react'

// ICONS
import {User,Mail,Lock,ArrowRight,ArrowLeft} from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'

// NAVIGATE ROUTE
import { useNavigate } from 'react-router-dom'

// REACT FORM AND ZOD
import{ useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

// Tanstack query
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../../config/api/endpoints/auth_api'

// Firebase register function
import { registerWithFirebase } from '../../config/firebase/firebase_auth';
import { doc, setDoc } from "firebase/firestore"
import { db } from '../../config/firebase/firebase'

// Social Auth
import { GoogleAuthProvider,FacebookAuthProvider } from 'firebase/auth';
import { socialAuth } from '../../config/firebase/firebase_auth'
import { facebookProvider, googleProvider } from '../../config/firebase/firebase';

// useUser 
import { useUser } from '../../contexts/UserContext'

// utils
import { deriveMasterKey } from '../../utilis/deriveMasterKey'


  // FRONTEND FORM VALIDATION USING ZOD
  const schema = z.object({

    fullname:z
            .string()
            .min(4,'Min 04 charaacter')
            .max(16,"Max 16 character")
            .regex(
              /^(?!\d+$)[a-zA-Z0-9_]+$/,
              "Username cannot contain only numbers"
            ),

    email:z
          .string()
          .email("Invalid Email"),

    password:z
            .string()
            .min(4,'minimum 6 character')
            .max(8,'maximum 08 character password'),

    confirm_password:z
            .string()
            .min(4,'minimum 6 character')
            .max(8,'maximum 08 character password'),

  }).refine((data) => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    })



export default function Register() {

  const navigate = useNavigate()
  const { loginUser } = useUser()
  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors,
      isSubmitting
    }
  } = useForm({
    resolver:zodResolver(schema)
  })




  // REGISTER USER
  const userMutation  = useMutation({
    mutationFn: (token) => registerUser(token)
  })

  const onVaultCreate = async (data) => {

  console.group("VAULT REGISTRATION")

  try {

    console.time("TOTAL_REGISTRATION")

    // STEP 1
    console.log("[1] Generating Salt")

    const saltBytes = crypto.getRandomValues(
      new Uint8Array(16)
    )

    const salt = btoa(
      String.fromCharCode(...saltBytes)
    )

    console.log("[1] Salt Generated")


    // STEP 2
    console.log("[2] Creating Firebase Account")

    console.time("FIREBASE_ACCOUNT")

    const firebaseUser = await registerWithFirebase(
      data.email,
      data.password
    )

    console.timeEnd("FIREBASE_ACCOUNT")

    console.log(
      "[2] Firebase Account Created",
      firebaseUser.uid
    )


    // STEP 3
    console.log("[3] Saving Salt")

    console.time("SAVE_SALT")

    await setDoc(
      doc(
        db,
        "users",
        firebaseUser.uid
      ),
      {
        salt,
        createdAt: Date.now()
      }
    )

    console.timeEnd("SAVE_SALT")

    console.log("[3] Salt Saved")


    // STEP 4
    console.log("[4] Getting Token")

    console.time("TOKEN")

    const token = await firebaseUser.getIdToken()

    console.timeEnd("TOKEN")

    console.log("[4] Token Received")


    // STEP 5
    console.log("[5] Register Backend")

    userMutation.mutate(token)

    console.log("[5] Backend Registration Started")


    // STEP 6
    console.log("[6] Login User")

    loginUser(firebaseUser)

    console.log("[6] User Logged In")

    console.timeEnd("TOTAL_REGISTRATION")

  }
  catch(error){

    console.error(
      "REGISTRATION FAILED",
      error
    )

    console.error(
      "ERROR CODE:",
      error?.code
    )

    console.error(
      "ERROR MESSAGE:",
      error?.message
    )

  }
  finally{
    console.groupEnd()
  }
}

  // handle Social Auth
  const handleSocialAuthVerification = async (provider) => {

     try{
        const result = await socialAuth(provider) 
        console.log("FIREBASE AUTH RESULT:",result)
        const token = await result.user.getIdToken()
        console.log("TOKEN:",token)

        userMutation.mutate(token)
        loginUser(result.user)

        navigate('/login')
     }

     catch(eror){
        console.log("ERR_NAME:",error.name);
        console.log("ERR_ERROR:",console.error);
        loginUser(null)
     }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05010f] flex items-center justify-center px-4 py-8">

      <div className="relative z-10 w-full max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_80px_rgba(139,92,246,0.12)] overflow-hidden">

      <div className="p-5 sm:p-8 lg:p-12">

        {/* TOP BAR */}

        <div className="flex items-center justify-between mb-8">

          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-violet-200/50 hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.15em]">
            <ArrowLeft size={15} />
            Back
          </button>

          <button onClick={() => navigate('/login')} className="px-5 py-2.5 rounded-full border border-violet-300/25 text-violet-200 text-xs tracking-[0.12em] hover:bg-white hover:text-black transition-all duration-300">
            LOGIN
          </button>

        </div>

        {/* HEADER */}

        <div className="text-center mb-10">

          <h1 className="font-[SyneExtraBold] text-[20px] sm:text-[56px] tracking-[-0.08em] bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
            GalleryVault
          </h1>

          <p className="md:mt-3 text-violet-100/40 text-[10px] text-sm sm:text-base">
            Create your secure digital vault and protect your memories forever
          </p>

          <div className=" hidden mt-5 md:flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-xs text-violet-100/35">

            <span className="px-3 py-1 rounded-full border border-white/10">
               End-to-End Secure
            </span>

            <span className="px-3 py-1 rounded-full border border-white/10">
              Cloud Synced
            </span>

            <span className="px-3 py-1 rounded-full border border-white/10">
              Private Gallery
            </span>

          </div>

        </div>

        <form onSubmit={handleSubmit(onVaultCreate)} className="space-y-1">

          {/* NAME + EMAIL */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-4">

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] overflow-hidden focus-within:border-violet-400/40">

              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <User size={18} className="text-violet-200/40" />
              </div>

              <input
                {...register("fullname")}
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent py-4 pl-12 pr-4 text-white placeholder:text-violet-100/25 outline-none"
              />

            </div>

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] overflow-hidden focus-within:border-violet-400/40">

              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Mail size={18} className="text-violet-200/40" />
              </div>

              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent py-4 pl-12 pr-4 text-white placeholder:text-violet-100/25 outline-none"
              />

            </div>

          </div>

          {/* PASSWORDS */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-4">

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] overflow-hidden focus-within:border-violet-400/40">

              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Lock size={18} className="text-violet-200/40" />
              </div>

              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full bg-transparent py-4 pl-12 pr-4 text-white placeholder:text-violet-100/25 outline-none"
              />

            </div>

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] overflow-hidden focus-within:border-violet-400/40">

              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Lock size={18} className="text-violet-200/40" />
              </div>

              <input
                {...register("confirm_password")}
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent py-4 pl-12 pr-4 text-white placeholder:text-violet-100/25 outline-none"
              />

            </div>

          </div>

          {/* ERRORS */}

          <div className="space-y-1">

            {errors.fullname && (
              <p className="text-red-400 text-xs">
                {errors.fullname.message}
              </p>
            )}

            {errors.email && (
              <p className="text-red-400 text-xs">
                {errors.email.message}
              </p>
            )}

            {errors.password && (
              <p className="text-red-400 text-xs">
                {errors.password.message}
              </p>
            )}

          </div>
          
          {/* SUBMIT */}
          
          <button
            type="submit"
            className="group relative overflow-hidden w-full rounded-2xl py-4 border border-violet-400/20 bg-gradient-to-r from-violet-500/20 text-white font-medium tracking-[0.16em] uppercase text-xs transition-all duration-500 "
          >
          
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r" />
          
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-300">
          
              {isSubmitting ? "Creating Vault..." : "Create Vault"}
          
              <ArrowRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />

            </span>
          
          </button>
          
        </form>
          
      </div>
          
    </div>

    </section>

  )

}