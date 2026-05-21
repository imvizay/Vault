
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

export default function Login() {
  const navigate = useNavigate()

  const {register,
    handleSubmit,
    clearErrors,
    formState:{
      isSubmitting,
      errors
    }
  } = useForm()



  const onAccessvault = (data) => {
    console.log(data)
  }


  return (

    <section className='w-full min-h-screen overflow-hidden bg-[#05010f] flex items-center justify-center p-3 sm:p-5 lg:p-6 relative'>

      {/* BACKGROUND */}

      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]' />

      <div className='absolute top-[10%] left-[8%] w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-violet-500/10 blur-[120px]' />

      <div className='absolute bottom-[5%] right-[8%] w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full bg-cyan-500/10 blur-[120px]' />

      {/* CARD */}

      <div className='relative z-10 w-full max-w-[1380px] lg:h-[90vh] grid lg:grid-cols-[1fr_1.08fr] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_120px_rgba(0,0,0,0.55)]'>

        {/* LEFT PANEL */}

        <div className='relative hidden lg:flex flex-col justify-between border-r border-white/10 p-8 xl:p-10 overflow-hidden'>

          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_40%)]' />

          <div className='relative z-10'>

            {/* LOGO */}

            <div className='text-[18px] font-[SyneExtraBold] tracking-[-0.05em] bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent mb-10'>
              GalleryVault
            </div>

            {/* LABEL */}

            <div className='uppercase tracking-[0.32em] text-[10px] text-violet-200/35 mb-6'>
              Private by Design
            </div>

            {/* HEADING */}

            <h1 className='max-w-[540px] font-[SyneExtraBold] leading-[0.84] tracking-[-0.07em] text-[clamp(2.8rem,4vw,4.5rem)] mb-8'>

              <span className='block text-white'>
                Protect what
              </span>

              <span className='block bg-gradient-to-r from-violet-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent'>
                matters most.
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className='max-w-[420px] text-[15px] leading-8 text-violet-100/40'>
              Private encrypted vaults designed to preserve your memories securely.
            </p>

          </div>

          {/* SECURITY */}

          <div className='relative z-10 rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4'>

            <div className='relative z-10 flex items-center gap-4'>

              <div className='w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center'>
                <Lock size={20} className='text-violet-300' />
              </div>

              <div>

                <div className='text-[10px] tracking-[0.22em] uppercase text-violet-200/35 mb-1'>
                  Encryption
                </div>

                <div className='text-[13px] font-medium text-white'>
                  AES-256 Active
                </div>

              </div>

            </div>

          </div>

        </div>

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

      </div>

    </section>

  )

}