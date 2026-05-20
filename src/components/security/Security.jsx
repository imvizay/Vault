import React,{useRef} from 'react'
import { Lock } from 'lucide-react'
import useSecurityAnimation from '@animations/useSecurityAnimation'

function SecuritySection() {

    const securityRef = useRef(null)

  const badges = [
    {
      title: 'AES-256 Encryption',
      color: 'bg-cyan-400'
    },

    {
      title: 'Zero-Knowledge',
      color: 'bg-pink-400'
    },

    {
      title: 'End-to-End Encrypted',
      color: 'bg-violet-400'
    },

    {
      title: 'SOC 2 Type II',
      color: 'bg-cyan-400'
    },

    {
      title: 'GDPR Compliant',
      color: 'bg-pink-400'
    }
  ]

  useSecurityAnimation(securityRef)
  return (

    <section
    ref={securityRef}
      id="security"
      className="
      relative
      overflow-hidden
      py-44
      px-6
      md:px-12
      "
    >

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_65%)] pointer-events-none" />

      {/* Noise Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">

        {/* LOCK VISUAL */}
        {/* <div className="relative w-[280px] h-[280px] flex items-center justify-center mb-24"> */}
        <div className="security-lock relative w-[280px] h-[280px] flex items-center justify-center mb-24">

          {/* Core Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" />

          {/* Ring 1 */}
          <div className="absolute inset-0 rounded-full border border-violet-400/20 animate-pulse" />

        
          {/* Rotating Gradient Ring */}
          <div className="absolute inset-[12px] rounded-full border border-white/10 border-t-violet-300/40 border-r-pink-300/30 animate-spin [animation-duration:12s]" />

          {/* Lock Core */}
          <div className=" relative z-10 w-[120px] h-[120px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(168,85,247,0.25)]     "   >

            {/* Inner Border */}
            <div className="absolute inset-2 rounded-full border border-white/10" />

            <Lock size={46} className="text-violet-200" strokeWidth={1.5} />

          </div>

        </div>


        {/* EYEBROW */}
        <div className="uppercase tracking-[0.35em] text-[11px] text-violet-300/70 mb-8">
          Military-Grade Protection
        </div>


        {/* HEADING */}
        <h2
          className="security-heading font-[SyneExtraBold] leading-[0.9] tracking-[-0.05em] text-[clamp(1rem,8vw,3rem)] mb-12"
        >

          <span className="block text-white">
            Your secrets are
          </span>

          <span className="block bg-gradient-to-r from-violet-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
            mathematically
          </span>

          <span className="block text-white">
            protected.
          </span>

        </h2>


        {/* DESCRIPTION */}
        <p
          className="security-description max-w-[760px] text-[12px] md:text-[14px] leading-6 tracking-normal text-violet-200/45 mb-20
          "
        >
          We use AES-256 encryption, zero-knowledge architecture,
          and end-to-end protocols that make your memories invisible
          — even to us.
        </p>


        {/* BADGES */}
        <div className="security-badges flex flex-wrap justify-center gap-3 w-screen" >

          {
            badges.map((badge, index) => (

              <div
                key={index}
                className="
                security-badge 
                group
                relative
                
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                px-6
                py-3
                flex
                items-center
                gap-3
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-white/20
                "
              >

                {/* Dot */}
                <div className={`relative z-10 w-2.5 h-2.5 rounded-full ${badge.color}`} />

                {/* Text */}
                <span className="relative z-10 text-[9px] tracking-[0.18em] uppercase text-white/70">
                  {badge.title}
                </span>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  )

}

export default SecuritySection