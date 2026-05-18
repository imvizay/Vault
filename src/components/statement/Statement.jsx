// StatementSection.jsx

import React, { useRef } from "react";
import useStatementAnimation from "../../animations/useStatementAnimation";

export default function StatementSection() {
  const statementRef = useRef(null)

  useStatementAnimation(statementRef)

  return (
    <section 
    className="min-h-screen text-center py-40 px-10 overflow-hidden
    
    statement-section
    "
      ref={statementRef}
    >
    
      <div className="relative flex flex-col justify-between items-center
      statement-content
      ">

        <span className="statement-eyebrow mb-12 font-[11px] tracking-[0.3em] 
        text-[var(--cyan)]">
          The Philosophy
        </span>

        <h2
          className="
            statement-heading
            perspective-[1000px]
            mb-12
            font-[SyneExtraBold]
            font-bold
            text-[var(--muted)]
            text-[clamp(2rem,9vw,6rem)]
            leading-[0.9]
            tracking-tight
            max-w-screen
          "
        >
          <span className="block text-center reveal-line">
            Not every
          </span>

          <span className="block reveal-line">
            moment 
          </span>

          <span className="block reveal-line">is</span>

          <span className="block reveal-line glow-text">
            meant to be
          </span>


          <span className="block my-10 reveal-line glow-text">shared</span>

          <span className="block reveal-line" >
             — but every 
             <em>moment</em>
          </span>

        
          <span className="block reveal-line">
            deserves 
          </span>

          <span className="block reveal-line">to be</span>

          <span className="glow-text
          bg-gradient-to-b
          from-white
          via-white
          to-cyan-300
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
          drop-shadow-[0_0_30px_rgba(34,211,238,0.18)]"
          >
            treasured
          </span>
        </h2>

        <p className="statement-description">
          
          <span className="block">
            In a world of social feeds and fleeting stories,
            GalleryVault offers something rare: 
          </span>

          <span className="block">a private sanctuary
          where your most intimate memories live — protected by
          military-grade encryption and touched only by you.
          </span>
        </p>
      </div>
    </section>
  )
  
}