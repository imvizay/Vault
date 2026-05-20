import React from 'react'
import { ShieldCheck, Upload, Link2 } from 'lucide-react'
import { useRef } from 'react'
import useHowItWorksAnimation from '@animations/useHowItWorksAnimation'
function HowItWorks() {
    const howItWorks = useRef(null)


  const steps = [
    {
      id: '01',
      icon: ShieldCheck,
      title: 'Create Your Vault',
      description:
        "Generate your encrypted private vault in seconds. Your security key never leaves your device.",
      glow: 'from-violet-500/20 to-fuchsia-500/10',
      border: 'border-violet-500/20',
      iconColor: 'text-violet-300',
    },

    {
      id: '02',
      icon: Upload,
      title: 'Upload Your Memories',
      description:
        "Photos and videos are encrypted client-side before reaching the cloud. Only you control access.",
      glow: 'from-pink-500/20 to-rose-500/10',
      border: 'border-pink-500/20',
      iconColor: 'text-pink-300',
    },

    {
      id: '03',
      icon: Link2,
      title: 'Share on Your Terms',
      description:
        "Create revocable private links with expiry controls and permission layers for trusted people only.",
      glow: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/20',
      iconColor: 'text-cyan-300',
    }
  ]

  useHowItWorksAnimation(howItWorks)

  return (

    <section ref={howItWorks} className=" relative overflow-hidden py-40 px-6 md:px-12   "
    >

      {/* Ambient Glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none" /> */}

      {/* Header */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center mb-28">

        <div className="uppercase tracking-[0.35em] text-[11px] text-violet-300/60 mb-6">
          Simple by Design
        </div>

        <h2 className="font-[SyneExtraBold] leading-[0.92] tracking-[-0.05em] text-[clamp(2rem,7vw,3rem)]">

          <span className="block text-white">
            Three steps to
          </span>

          <span className="block bg-gradient-to-r from-violet-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
            complete privacy
          </span>

        </h2>

      </div>


      {/* Timeline Line */}
      <div className="relative max-w-[1400px] mx-auto">


        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 relative z-10">

          {steps.map((step, index) => {

            const Icon = step.icon

            return (

              <div key={step.id} id={step.id} className="how-card relative group "   >

                {/* Glow */}
                <div className={` absolute  inset-0  rounded-[2.5rem]  bg-gradient-to-br  ${step.glow}  blur-3xl  opacity-0  group-hover:opacity-100  transition-opacity  duration-700  `} />

                {/* Card */}
                <div
                  className={` relative h-full rounded-[2.5rem] border ${step.border} bg-white/[0.03] backdrop-blur-xl overflow-hidden px-10 py-14 text-center transition-all duration-500 hover:-translate-y-3
                  `}
                >

                  {/* Inner Border */}
                  <div className="absolute inset-3 rounded-[2rem] border border-white/10 pointer-events-none" />

                  {/* Reflection */}
                  <div className="absolute top-[-20%] left-[-30%] w-[180%] h-[40%] rotate-12 bg-white/10 blur-3xl" />

                  {/* Step Circle */}
                  <div className="relative w-[110px] h-[110px] mx-auto mb-10">

                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse" />

                    {/* Inner Ring */}
                    <div className="absolute inset-[-10px] rounded-full border border-violet-400/20" />

                    {/* Main Circle */}
                    <div className={` relative z-10 w-full h-full rounded-full flex items-center justify-center border ${step.border} bg-gradient-to-br ${step.glow} backdrop-blur-xl `}>

                      <div className="flex flex-col items-center gap-1">

                        <Icon
                          size={26}
                          className={step.iconColor}
                        />

                        <span className="font-[SyneExtraBold] text-lg text-white">
                          {step.id}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Title */}
                  <h3 className="font-[SyneExtraBold] text-[20px] tracking-[-0.03em] text-white mb-5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] leading-4.4 text-violet-200/50 max-w-[320px] mx-auto">
                    {step.description}
                  </p>

                </div>

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )

}

export default HowItWorks