import React from 'react'
import { Moon, Waves, Sparkles, Leaf } from 'lucide-react'
import { useRef } from 'react'
import useGalleryAnimation from '@animations/useGalleryAnimation'
function GallerySection() {

    const galleryRef = useRef(null)

    const cards = [
        {
          id: 1,
          icon: Moon,
          title: 'Late Night · 2024',
          height: 'h-[420px]',
          width: 'w-[300px]',
          gradient: 'from-violet-950 via-purple-900 to-violet-700',
          glow: 'shadow-[0_0_120px_rgba(168,85,247,0.18)]',
          y: 'md:translate-y-0',
        },
      
        {
          id: 2,
          icon: Waves,
          title: 'Ocean · Encrypted',
          height: 'h-[300px]',
          width: 'w-[220px]',
          gradient: 'from-sky-950 via-blue-900 to-sky-700',
          glow: 'shadow-[0_0_120px_rgba(59,130,246,0.18)]',
          y: 'md:translate-y-20',
        },
      
        {
          id: 3,
          icon: Sparkles,
          title: 'Private · 847 Files',
          height: 'h-[480px]',
          width: 'w-[340px]',
          gradient: 'from-pink-950 via-fuchsia-900 to-rose-700',
          glow: 'shadow-[0_0_120px_rgba(236,72,153,0.18)]',
          y: 'md:-translate-y-2',
        },
      
        {
          id: 4,
          icon: Leaf,
          title: 'Summer · Vault 03',
          height: 'h-[320px]',
          width: 'w-[240px]',
          gradient: 'from-emerald-950 via-teal-900 to-emerald-700',
          glow: 'shadow-[0_0_120px_rgba(16,185,129,0.18)]',
          y: 'md:translate-y-12',
        },
      
        {
          id: 5,
          icon: Sparkles,
          title: 'Golden Hour · Shared',
          height: 'h-[440px]',
          width: 'w-[280px]',
          gradient: 'from-amber-950 via-yellow-900 to-orange-700',
          glow: 'shadow-[0_0_120px_rgba(245,158,11,0.18)]',
          y: 'md:-translate-y-10',
        }
    ]


    useGalleryAnimation(galleryRef)


  return (

    <section ref={galleryRef} id="gallery" className="relative h-[300vh]">

        {/* Ambient Glow */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_65%)] pointer-events-none" /> */}
    
        {/* Header */}
        <div className="relative z-20 mb-20">
    
          <div className="uppercase tracking-[0.3em] text-[11px] text-violet-300/60 my-15 text-center">
            Your Sanctuary
          </div>
    
          <h2 className="text-center font-[SyneExtraBold] leading-[0.88] tracking-[-0.05em] text-[clamp(1.5rem,8vw,4rem)]">
    
            <span className="block text-white">
              Every memory,
            </span>
    
            <span className="block bg-gradient-to-r from-violet-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
              beautifully kept.
            </span>
    
          </h2>
    
        </div>

      {/* Sticky Scene */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
    
        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-32 z-30 bg-gradient-to-r from-[#05010f] to-transparent pointer-events-none" />
    
        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-32 z-30 bg-gradient-to-l from-[#05010f] to-transparent pointer-events-none" />
    
        {/* HORIZONTAL TRACK */}
        <div className="gallery-track relative z-10 flex items-end gap-12 px-[12vw] w-max will-change-transform">
    
          {cards.map((card, index) => {
        
            const Icon = card.icon
        
            return (
            
              <div
                key={card.id}
                className={`
                gcard relative shrink-0 rounded-[2.5rem] border border-white/10 backdrop-blur-xl overflow-hidden bg-white/[0.03]
                ${card.width}
                ${card.height}
                ${card.gradient}
                
                ${card.y}
                transition-all duration-500
                hover:-translate-y-4 hover:scale-[1.02] hover:border-white/20
                `}
              >
            
                {/* INNER BORDER */}
                <div className="absolute inset-3 rounded-[2rem] border border-white/10" />
                
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
                
                {/* REFLECTION */}
                <div className="absolute top-[-20%] left-[-30%] w-[180%] h-[40%] rotate-12 bg-white/10 blur-3xl" />
                
                {/* ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon size={72} className="text-white/20" />
                </div>
                
                {/* META */}
                <div className="absolute bottom-6 left-6 text-[12px] tracking-[0.2em] uppercase text-white/55">
                  {card.title}
                </div>
                
              </div>
    
            )
        
          })}
    
        </div>
      
      </div>
      
    </section>

  )

}

export default GallerySection