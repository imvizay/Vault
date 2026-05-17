import React from 'react';
import '../../App.css';

const premiumFeatures = [
  "Built For Privacy",
  "Own Your Memories",
  "Your Keys. Your Vault.",
  "Invisible To Everyone Else",
  "Privacy Without Compromise",
  "Locally Encrypted",
  "AES-256 Security",
  "True Digital Privacy",
  "Zero-Knowledge Security",
]

function Marque() {

  return (

    // marquee wrapper
    <div className='font-[SyneBold] relative overflow-hidden w-full py-7 border-t border-b border-white/10
    
      bg-gradient-to-r from-[#7B5EA7]/[0.06] via-[#E06FA3]/[0.04] to-[#52D9D9]/[0.04]'>

      {/* marquee track */}
      <div className='marquee-track flex gap-0 w-max'>

        {/* loop twice for generating marquee item */}
        {[...Array(2)].map((_, index) => (

          // marquee item
          <div
            key={index}
            className='flex justify-center items-center gap-0 w-max shrink-0'
          >

            {premiumFeatures.map((feat, i) => (

              <React.Fragment key={i}>

                <span className='flex items-center gap-10 px-10 whitespace-nowrap font-[Syne] font-bold text-[clamp(10px,2vw,12px)] tracking-[0.2em] uppercase text-[var(--muted)]'>
                  {feat}
                </span>

                <div className='w-2 h-2 rounded-full bg-violet-600/40'></div>

              </React.Fragment>

            ))}

          </div>

        ))}

      </div>

    </div>
  )
}

export default Marque