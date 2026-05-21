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


// validation of form fields using z resolver
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
  });




export default function Register() {

  const navigate = useNavigate()
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


  const onVaultCreate = (data) => {
    console.log(data)

  }

  return (

    <section className='w-full min-h-screen bg-[#05010f] flex items-center justify-center p-3 sm:p-5 lg:p-6 relative overflow-hidden'>

      {/* BACKGROUND */}

      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]' />

      <div className='absolute top-[10%] left-[8%] w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-violet-500/10 blur-[120px]' />

      <div className='absolute bottom-[5%] right-[8%] w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full bg-cyan-500/10 blur-[120px]' />

      {/* MAIN CARD */}

      <div className='relative z-10 w-full max-w-[1700px] lg:h-[92vh] grid lg:grid-cols-[0.95fr_1.05fr] rounded-[2rem] lg:rounded-[2.8rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_120px_rgba(0,0,0,0.55)]'>

        {/* LEFT PANEL */}

        <div className='relative hidden lg:flex flex-col justify-between border-r border-white/10 p-10 xl:p-14 overflow-hidden'>

          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_40%)]' />

          {/* CONTENT */}

          <div className='relative z-10'>

            {/* LOGO */}

            <div className='text-[20px] font-[SyneExtraBold] tracking-[-0.05em] bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent mb-14'>
              GalleryVault
            </div>

            {/* LABEL */}

            <div className='uppercase tracking-[0.34em] text-[11px] text-violet-200/35 mb-8'>
              Secure Identity
            </div>

            {/* HEADING */}

            <h1 className='max-w-[560px] font-[SyneExtraBold] leading-[0.84] tracking-[-0.07em] text-[clamp(3rem,4vw,5rem)] mb-8'>

              <span className='block text-white'>
                Create your
              </span>

              <span className='block bg-gradient-to-r from-violet-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent'>
                private vault.
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className='max-w-[460px] text-[15px] xl:text-[14px] leading-4 text-violet-100/40'>
              Build your encrypted personal vault and securely preserve your digital memories forever.
            </p>

          </div>

          {/* SECURITY CARD */}

          <div className='relative z-10 rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-2.5'>

            <div className='relative z-10 flex items-center gap-5'>

              <div className='w-14 h-14 rounded-[1.2rem] bg-violet-500/10 border border-violet-400/20 flex items-center justify-center'>
                <Lock size={24} className='text-violet-300' />
              </div>

              <div>

                <div className='text-[10px] tracking-[0.25em] uppercase text-violet-200/35 mb-2'>
                  Zero Knowledge
                </div>

                <div className='text-[14px] font-medium text-white'>
                  End-to-End Encryption
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className='relative flex flex-col px-5 py-4 sm:px-8 sm:py-8 lg:px-14 lg:py-10 overflow-y-auto overflow-x-hidden'>

          {/* TOP BAR */}

          <div className='flex items-center justify-between gap-4 mb-4'>

            <button onClick={ () => navigate('/')} className='flex items-center gap-2 text-violet-200/45 hover:text-white transition-all duration-300 text-[12px] sm:text-[13px] tracking-[0.08em] uppercase'>
              <ArrowLeft size={15} />
              Back
            </button>

            <button className='px-5 sm:px-7 py-2.5 sm:py-3 rounded-[10px] border border-violet-200/40 text-white text-[13px] sm:text-[15px] hover:bg-white/5 transition-all duration-300 whitespace-nowrap'>
              LOGIN
            </button>

          </div>

          {/* MOBILE LOGO */}

          <div className='lg:hidden text-center mb-4'>

            <div className='text-[26px] sm:text-[48px] font-[SyneExtraBold] tracking-[-0.06em] bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent'>
              GalleryVault
            </div>

          </div>

          {/* HEADER */}

          <div className='mb-8'>

            <div className='uppercase tracking-[0.30em] text-[9px] sm:text-[10px] text-violet-200/35 mb-4'>
              Begin Your Journey
            </div>

            <h2 className='max-w-[650px] text-[clamp(2rem,8vw,2rem)] font-[SyneExtraBold] leading-[0.88] tracking-[-0.07em] text-white mb-4'>

              Create your
              <br />
              secure vault.

            </h2>

            <p className='text-[14px] sm:text-[15px] lg:text-[14px] leading-6 sm:leading-8 text-violet-100/40'>
              Start preserving your private memories with encrypted cloud protection.
            </p>

          </div>

          {/* SOCIAL BUTTONS */}

          <div className='flex gap-2 md:flex-col lg:grid lg:grid-cols-3 md:gap-4 mb-6 md:mb-8'>

            <button className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-4 lg:py-5 px-5 flex items-center justify-center gap-2 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]'>

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 to-cyan-500/10' />

              <FontAwesomeIcon icon={faGoogle} className='
               relative z-10 text-white/70 text-[18px]'/>

              <span className='relative z-10 text-[8px] md:text-[12px] tracking-[0.14em] uppercase text-white/70'>
                Google
              </span>

            </button>

            <button className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-4 lg:py-5 px-5 flex items-center justify-center gap-3 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]'>

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 to-pink-500/10' />

              <FontAwesomeIcon icon={faGithub} className='relative z-10 text-white/70 text-[18px]' />

              <span className='relative z-10 text-[8px] md:text-[12px] tracking-[0.14em] uppercase text-white/70'>
                Github
              </span>

            </button>

            <button className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-4 lg:py-5 px-5 flex items-center justify-center gap-3 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]'>

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 to-blue-500/10' />

              <FontAwesomeIcon icon={faFacebook} className='relative z-10 text-white/70 text-[18px]' />

              <span className='relative z-10 text-[8px] md:text-[12px] tracking-[0.14em] uppercase text-white/70'>
                Facebook
              </span>

            </button>

          </div>

          {/* DIVIDER */}

          <div className='flex items-center gap-4 mb-8'>

            <div className='flex-1 h-px bg-white/10' />

            <span className='text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-violet-200/25 whitespace-nowrap'>
              Continue with Email
            </span>

            <div className='flex-1 h-px bg-white/10' />

          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit(onVaultCreate)} className='space-y-4'>

            {/* FULLNAME */}

            <div className='relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden'>

              <div className='absolute left-5 top-1/2 -translate-y-1/2'>
                <User size={18} className='text-violet-200/35' />
              </div>

              <input {...register('fullname')}
               
              type='text' placeholder='Full Name' className='w-full bg-transparent outline-none border-none py-3 lg:py-5 pl-14 pr-5 text-[14px] sm:text-[15px] text-white placeholder:text-violet-200/25' />

              <p>{errors.fullname?.message}</p>

            </div>

            {/* EMAIL */}

            <div className='relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden'>

              <div className='absolute left-5 top-1/2 -translate-y-1/2'>
                <Mail size={18} className='text-violet-200/35' />
              </div>

              <input {...register('email')}
              
              type='email' placeholder='Email Address' className='w-full bg-transparent outline-none border-none py-3 lg:py-5 pl-14 pr-5 text-[14px] sm:text-[15px] text-white placeholder:text-violet-200/25' />

               <p>{errors.email?.message}</p>
            </div>

            {/* PASSWORDS */}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'>

              <div className='relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden'>

                <div className='absolute left-5 top-1/2 -translate-y-1/2'>
                  <Lock size={18} className='text-violet-200/35' />
                </div>

                <input 
                {...register('password')}
                type='password' placeholder='Password' className='w-full bg-transparent outline-none border-none py-3 lg:py-5 pl-14 pr-5 text-[14px] sm:text-[15px] text-white placeholder:text-violet-200/25' />
                 <p>{errors.password?.message}</p>
              </div>

              <div className='relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden'>

                <div className='absolute left-5 top-1/2 -translate-y-1/2'>
                  <Lock size={18} className='text-violet-200/35' />
                </div>

                <input {...register('confirm_password')} type='password' placeholder='Confirm Password' className='w-full bg-transparent outline-none border-none py-3 lg:py-5 pl-14 pr-5 text-[14px] sm:text-[15px] text-white placeholder:text-violet-200/25' />

              </div>

            </div>

            {/* TERMS */}

            <div className='pt-1'>

              <label className='flex items-start gap-3 cursor-pointer'>

                <input type='checkbox' className='accent-violet-500 w-4 h-4 mt-1 shrink-0' />

                <span className='text-[12px] sm:text-[13px] leading-6 text-violet-100/40'>
                  I agree to the terms and privacy policy
                </span>

              </label>

            </div>

            {/* SUBMIT */}

            <button type='submit' className='group relative overflow-hidden w-full rounded-2xl py-4 lg:py-5 mt-5 border border-white/20 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-cyan-500/10 backdrop-blur-xl text-white font-medium tracking-[0.16em] uppercase text-[11px] sm:text-[12px] transition-all duration-500 hover:border-white/40 hover:bg-white/[0.06]'>

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 to-cyan-500/10' />

              <span className='relative z-10 flex items-center justify-center gap-3'>

                { isSubmitting ? "Creating Vault": "Create Vault"}

                <ArrowRight size={15} className='transition-transform duration-500 group-hover:translate-x-1' />
              </span>

            </button>

          </form>

        </div>

      </div>

    </section>

  )

}