import React from 'react'

function HeroContent({refs={}}) {

  const {
    heroTagRef,
    heroHeadingRef,
    heroSubRef,
    heroActionsRef 
  } = refs

  
  return (
    <>
    <div 
    ref={heroTagRef} 
    className="hero-tag flex items-center gap-3 mb-8 
              uppercase tracking-[0.3em] text-[11px] opacity-0 text-violet-300 
              
              before:content-['']
              before:block before:w-8 before:h-px before:bg-violet-300 before:opacity-50

              after:content-['']
              after:block after:w-8 after:h-px after:bg-violet-300 after:opacity-50
              ">


        {"Private Memory Sanctuary".split("").map((char, i) => (
          
            <span key={i} className="tag-char inline-block opacity-0 translate-y-2" >
              {char === " " ? "\u00A0" : char}
            </span>
      
        ))}

    

    </div>
    
    {/* HEADING */}
    <h1 
    ref={heroHeadingRef}
    className='font-[SyneExtraBold] leading-0.92 tracking-[0.03em] text-[clamp(52px,8vw,128px)]
      overflow-hidden
     text-white text-5xl'
    >
      <span className='line block overflow-hidden'>
        <span className='line-inner block translate-y-[110%]'>Some memories</span>
      </span>

      <span className='line block overflow-hidden'>
        <span className='line-inner block translate-y-[110%]'><em className='font-[ChunkyPlayful] italic font-normal bg-gradient-to-br from-violet-300 to-pink-300 bg-clip-text text-transparent'>deserve</em> {" "} a vault.</span>
      </span>
    </h1>

    <p
    ref={heroSubRef}
    className='hero-sub max-w-[480px] mt-10 mb-14 text-[clamp(15px,2vw,18px)] leading-[1.7] font-light text-zinc-400 opacity-0 translate-y-6' >
      GalleryVault is your encrypted sanctuary for private photos and videos — beautifully protected, forever yours.
    </p>

    {/* Actions */}

    <div
    ref={heroActionsRef}
    className='actions flex items-center justify-center gap-5 opacity-0 translate-y-6'>

      <button data-cursor='morph' className='px-10 py-4 rounded-full font-syne text-sm font-bold tracking-[0.04em] bg-gradient-to-br from-violet-500 to-pink-400 shadow-[0_0_40px_rgba(123,94,167,0.4)] 
      transition-all duration-300 
      hover:scale-105 hover:shadow-[0_0_60px_rgba(166,115,232,0.5)]
      '>Create Vault</button>
      
      <button data-cursor='morph'  className="z-[50] px-8 py-4 rounded-full border border-white/10 text-zinc-400 text-sm font-semibold tracking-[0.04em] transition-all duration-300
        hover:text-violet-500
        hover:border-white/10
      ">Explore Features</button>

    </div>
    </>
  )
}

export default HeroContent