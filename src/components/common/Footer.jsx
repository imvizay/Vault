import React, { useRef,useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ArrowUpRight, Mail, Phone, Sparkles } from 'lucide-react'

function Footer() {

  const devData = {
    fullname: 'Vijay Meena',
    business: 'vizaymeena@gmail.com',
    contact: '7987725298',
    bio: 'Python Full-Stack Web Developer'
  }

  return (

    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-white/10
      px-6
      md:px-12
      pt-14
      pb-10
      "
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">

          {/* LOGO */}
          <div>

            <div
              className="
              text-[24px]
              tracking-[-0.05em]
              font-[SyneExtraBold]
              bg-gradient-to-r
              from-violet-200
              via-pink-200
              to-cyan-200
              bg-clip-text
              text-transparent
              mb-2
              "
            >
              GalleryVault
            </div>

            <p className="text-[12px] tracking-[0.18em] uppercase text-violet-200/35">
              Private memories deserve permanence.
            </p>

          </div>

          {/* DEVELOPER CARD */}
          <DeveloperCard data={devData} />

        </div>


        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8 border-t border-white/10">

          <p className="text-[11px] tracking-[0.14em] uppercase text-violet-200/30">
            GalleryVault - 2026
          </p>

          <p className="text-[13px] italic font-serif text-violet-200/35 text-center">
            Some memories are not meant for the world.
          </p>

        </div>

      </div>

    </footer>

  )

}

export default Footer



const DeveloperCard = ({ data }) => {

  const cardRef = useRef(null)

  useLayoutEffect(() => {

    const card = cardRef.current

    const xTo = gsap.quickTo(card, "x", {
      duration: 0.6,
      ease: "power3.out"
    })

    const yTo = gsap.quickTo(card, "y", {
      duration: 0.6,
      ease: "power3.out"
    })

    const rotateXTo = gsap.quickTo(card, "rotateX", {
      duration: 0.6,
      ease: "power3.out"
    })

    const rotateYTo = gsap.quickTo(card, "rotateY", {
      duration: 0.6,
      ease: "power3.out"
    })

    const handleMove = (e) => {

      const rect = card.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const moveX = (x - centerX) * 0.035
      const moveY = (y - centerY) * 0.035

      xTo(moveX)
      yTo(moveY)

      rotateYTo(moveX * 0.12)
      rotateXTo(-moveY * 0.12)

    }

    const reset = () => {

      xTo(0)
      yTo(0)

      rotateXTo(0)
      rotateYTo(0)

    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', reset)

    return () => {

      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', reset)

    }

  }, [])

  return (

    <div
      ref={cardRef}
      

      className="
      group
      
      w-[420px]
      max-w-full
      overflow-hidden
      rounded-[2rem]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-2xl
      p-6
      transition-colors
      duration-500
      hover:border-white/20
      will-change-transform
      "
      style={{
        transformStyle: 'preserve-3d',
        transformPerspective: '1200px',
      }}
    >

      {/* Ambient Hover Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-700
        bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_40%)]
        "
      />

      {/* Glass Reflection */}
      <div
        className="
        absolute
        top-[-30%]
        left-[-20%]
        w-[140%]
        h-[60%]
        rotate-12
        bg-white/10
        blur-3xl
        pointer-events-none
        "
      />

      {/* Inner Border */}
      <div className="absolute inset-2 rounded-[1.5rem] border border-white/10 pointer-events-none" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex items-start justify-between mb-7">

          <div>

            <div className="flex items-center gap-2 mb-2">

              <Sparkles
                size={14}
                className="text-violet-300"
              />

              <span className="text-[10px] tracking-[0.3em] uppercase text-violet-200/40">
                Developer
              </span>

            </div>

            <h3 className="font-[SyneExtraBold] text-[28px] tracking-[-0.04em] text-white leading-none">
              {data.fullname}
            </h3>

          </div>

          {/* Floating Orb */}
          <div
            className=" relative w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center "   >

            <ArrowUpRight size={18} className=" text-violet-200/70 transition-transform duration-500 group-hover:rotate-45 "/>

          </div>

        </div>


        {/* BIO */}
        <p className="text-[14px] leading-7 text-violet-100/45 mb-8 max-w-[320px]">
          {data.bio}
        </p>


        {/* CONTACTS */}
        <div className="flex flex-col gap-4">

          {/* EMAIL */}
          <div
            className=" flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:bg-white/[0.05]    "  >

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Mail size={15} className="text-violet-300" />
              </div>

              <div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-violet-200/35 mb-1">
                  Email
                </div>

                <div className="text-[13px] text-white/70">
                  {data.business}
                </div>

              </div>

            </div>

          </div>


          {/* PHONE */}
          <div className=" flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:bg-white/[0.05] "   >

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Phone size={15} className="text-cyan-300" />
              </div>

              <div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-violet-200/35 mb-1">
                  Contact
                </div>

                <div className="text-[13px] text-white/70">
                  {data.contact}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}