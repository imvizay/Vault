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

        <div className="statement-eyebrow mb-12 font-[11px] tracking-[0.3em] 
        text-[var(--cyan)]">
          The Philosophy
        </div>

        <h2
          className="
            statement-heading
            mb-16 font-[SyneExtraBold] h-fit text-[clamp(1rem,8vw,4rem)] leading-[0.9] tracking-[-0.04em] max-w-[11ch] mx-auto text-center
          ">

          <span className="block reveal-line">
            Not every
          </span>

          <span className="block reveal-line"> moment</span>

          <span className="block reveal-line">
            is meant to be shared 
          </span>

          <span className="block reveal-line mt-10">
           - but every moment
          </span>

          <span
            className="
              block reveal-line 
               text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.18)] drop-shadow-[0_0_30px_rgba(34,211,238,0.12)]">
            deserves to be treasured.
          </span>

        </h2>

        <p className="
          statement-description 

          mt-20 leading-6 text-violet-300/40
          md:mt-20 md:leading-6 md:text-violet-300/40 md:w-[480px]"
        >
          In a world of social feeds and fleeting stories,
          GalleryVault offers something rare: 
          a private sanctuary
          where your most intimate memories live — protected by
          military-grade encryption and touched only by you.
        
        </p>
      </div>
    </section>
  )
  
}