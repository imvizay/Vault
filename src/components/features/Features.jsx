import React,{ useRef } from 'react'

import { LockIcon,Globe,Camera,Timer } from 'lucide-react'
import useFeaturesRef from '../../animations/useFeaturesRef'


function Features() {
    const featuresRef = useRef(null)
    const features = [
        {
          id: '01',
          title: 'Encrypted Vaults',
          icon: LockIcon,
          description:
            'Every vault uses AES-256 encryption with your personal key — we never store it. Your memories are mathematically protected.'
        },

        {
          id: '02',
          title: 'Temporary Access Links',
          icon: Timer,
          description:
            'Share specific memories with trusted people via time-limited links that auto expire — full control stays with you.'
        },

        {
          id: '03',
          title: 'Cinematic Organization',
          icon: Camera,
          description:
            'Beautifully arranged timelines, smart albums and curated collections — your vault feels like a premium gallery.'
        },

        {
          id: '04',
          title: 'Zero-Knowledge Architecture',
          icon: Globe,
          description:
            "Our servers handle only encrypted data — even we can't see your memories. True privacy by design, not by promise."
        }
    ]   

    const BottomIcon = features[3].icon

    useFeaturesRef(featuresRef)

  return (
    <section ref={featuresRef} className='relative overflow-hidden pt-28 pb-32 px-6 md:px-14 xl:px-24'>

      {/* Atmospheric Glow */}
      <div className='absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-[140px] pointer-events-none' />

      <div className='absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none' />

      {/* Header */}
      <div className='relative z-10 flex flex-col items-center text-center'>

        {/* Eye Brow */}
        <div
          className="
          w-[360px] 
          
          relative flex gap-2 justify-center items-center gap-2text-[11px] tracking-[0.35em] uppercase 

          text-[var(--purple-glow)]

          md:after:content-['']
          md:after:absolute
          md:after:left-[-50px]
          md:after:top-1/2
          md:after:-translate-y-1/2
          md:after:w-8
          md:after:h-px
          md:after:bg-[var(--purple-glow)]

          md:before:content-['']
          md:before:absolute
          md:before:right-[-50px]
          md:before:top-1/2
          md:before:-translate-y-1/2
          md:before:w-8
          md:before:h-px
          md:before:bg-[var(--purple-glow)]"
        >
          <span className='inline-block reveal-eye md:tracking-[1rem]'>Everything</span>
          <span className='inline-block reveal-eye md:tracking-[1rem]'>You</span> 
          <span className='inline-block reveal-eye md:tracking-[1rem]'>Need</span>
        </div>

        {/* Heading */}
        <div className='mt-20 md:mt-10 leading-[0.95] tracking-[-0.05em] font-[SyneExtraBold] text-[clamp(3rem,7vw,5rem)]'>

          <h1 className=''>
            Built For{' '}

            <span className='bg-gradient-to-b from-white to-cyan-300 bg-clip-text text-transparent 
            drop-shadow-[0_0_18px_rgba(125,211,252,0.2)]'>
              Privacy.
            </span>
          </h1>

          <h1 className=''>
            Designed For{' '}

            <span className='bg-gradient-to-b from-white to-fuchsia-300 bg-clip-text text-transparent 
            drop-shadow-[0_0_18px_rgba(217,70,239,0.2)]'>
              Beauty.
            </span>
          </h1>

        </div>
      </div>

      {/* Grid */}
      <div className='relative z-10 mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px] max-w-full mx-auto'>

        {/* Top Cards */}
        {features.slice(0, 3).map((feature) => (

          <div
    
            key={feature.id}
            id={`fc${feature.id}`}
            className='feature-card font-[SyneBold] tracking-[0.02em] font-light group relative overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10 lg:p-12 transition-all duration-500 hover:border-violet-400/30
            md:py-48 md:px-40 
            '
          >

            {/* Hover Glow */}
            <div
              className='absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_45%)]'
            />

            {/* Border Sweep */}
            <div
              className='absolute top-0 left-[-100%] w-full h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent transition-all duration-700 group-hover:left-[100%]'
            />

            {/* Icon */}
            <div className='relative mb-8 w-fit'>

              <div className='w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]'>

 
                {<feature.icon/>}
              </div>

              <span className='absolute -top-2 -right-3 px-2 py-1 rounded-full border border-violet-400/20 bg-violet-500/10 text-[10px] tracking-[0.15em] font-bold text-violet-300'>
                {feature.id}
              </span>

            </div>

            {/* Content */}
            <h3 className='mb-4 w-full font-[SyneBold] text-[18px] font-light tracking-[-0.03em] transition-colors duration-300 group-hover:text-violet-300'>
              {feature.title}
            </h3>

            <p className='font-serif text-[12px] leading-[1.5] leading-[1.9] text-[var(--muted)]'>
              {feature.description}
            </p>

          </div>

        ))}

        {/* Large Bottom Card */}
        <div id={`fc${features[3].id}`} className='feature-card group relative overflow-hidden md:col-span-2 xl:col-span-3 border border-white/10 bg-white/[0.04] backdrop-blur-xl p-14 lg:p-20 flex flex-col lg:flex-row items-center gap-16'>

          {/* Glow */}
          <div className='absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_50%)]' />

          {/* Border Sweep */}
          <div className='absolute top-0 left-[-100%] w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:left-[100%]' />

          {/* Left Content */}
          <div className='relative z-10 flex-1'>

            {/* Icon */}
            <div className='relative mb-8 w-fit'>

              <div className='w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]'>
                {<BottomIcon/>}
              </div>

              <span className='absolute -top-2 -right-3 px-2 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[10px] tracking-[0.15em] font-bold text-cyan-300'>
                04
              </span>

            </div>

            {/* Title */}
            <h3 className='mb-6 font-[SyneBold] text-[20px] leading-[1] tracking-[-0.04em] font-bold'>
              Zero-Knowledge Architecture
            </h3>

            {/* Desc */}
            <p className='max-w-[650px] text-[14px] lg:text-[15px] leading-[2] text-[var(--muted)]'>
              Our servers handle only encrypted data — even we can&apos;t see your memories. True privacy by design, not by promise.
            </p>

          </div>

          {/* Mockup */}
          <div className='relative z-10 w-full max-w-[340px] h-[240px] rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-4 overflow-hidden'>

            {/* Inner Screen */}
            <div className='w-full h-full rounded-2xl border border-white/10 bg-[#0d0d12] p-4 flex flex-col gap-3'>

              {/* Bars */}
              <div className='h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-80' />

              <div className='h-2 w-[70%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-40' />

              <div className='h-2 w-[50%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20' />

              {/* Grid */}
              <div className='grid grid-cols-3 gap-2 flex-1 mt-2'>

                <div className='rounded-md border border-violet-400/10 bg-violet-500/10' />

                <div className='rounded-md border border-violet-400/10 bg-violet-500/10' />

                <div className='rounded-md border border-violet-400/10 bg-violet-500/10' />

                <div className='col-span-2 rounded-md border border-violet-400/10 bg-violet-500/10' />

                <div className='rounded-md border border-violet-400/10 bg-violet-500/10' />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Features