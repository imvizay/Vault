import React, { useRef } from 'react'

import HeroOrbs from './HeroOrbs'
import HeroCards from './HeroCards'
import HeroContent from './HeroContent'
import ScrollHint from './ScrollHint'

import useHeroAnimation from '@animations/useHeroAnimation'

function Hero() {
    
  /* Floating orbs refs */
  const purpleOrbRef = useRef(null)
  const cyanOrbRef = useRef(null)
  const pinkOrbRef = useRef(null)


  /* Hero Content Refs */
  const heroTagRef = useRef(null)
  const heroHeadingRef = useRef(null)
  const heroSubRef = useRef(null)
  const heroActionsRef = useRef(null)

  // const scrollHintRef = useRef(null)

  const heroContentRefs = {
    heroTagRef,
    heroHeadingRef,
    heroSubRef,
    heroActionsRef
  }



  /* ─────────────────────────────
     MASTER ANIMATION CONTROL
  ───────────────────────────── */

  useHeroAnimation({

    /* orbs */
    purpleOrbRef,
    cyanOrbRef,
    pinkOrbRef,

    heroContentRefs

    // /* scroll hint */
    // scrollHintRef

  })



  return (

    <section
      className=' 
      relative min-h-screen overflow-hidden 
      flex flex-col items-center justify-center text-center 
      px-6 pt-32 pb-16
      '
    >

      {/* ORBS */}
      <HeroOrbs
        purpleOrbRef={purpleOrbRef}
        cyanOrbRef={cyanOrbRef}
        pinkOrbRef={pinkOrbRef}
      />


      {/* FLOATING CARDS */}
      <HeroCards/>

      {/* MAIN CONTENT */}
      <HeroContent refs={heroContentRefs}/>


      {/* SCROLL INDICATOR */}
      {/* <ScrollHint
        scrollHintRef={scrollHintRef}
      /> */}

    </section>

  )
}

export default Hero