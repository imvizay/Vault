import { useLayoutEffect } from 'react'
import gsap from 'gsap'

function useHeroAnimation({

  purpleOrbRef,
  cyanOrbRef,
  pinkOrbRef,
  heroContentRefs

}) {


  useLayoutEffect(() => {

    console.log("prupleorb ref",purpleOrbRef)

    const ctx = gsap.context(() => {

      /* =======  Hero Content Refs ======  */
      const {
        heroTagRef,
        heroHeadingRef,
        heroSubRef,
        heroActionsRef
      } = heroContentRefs


      /*  ========  ORBS ========    */

      gsap.to(purpleOrbRef.current,{
        x:40,
        y:20,
        duration:8,
        repeat:-1,
        yoyo:true,
        ease:'sine.inOut'
      })

      gsap.to(cyanOrbRef.current,{
        scale:1.15,
        opacity:0.25,
        duration:4,
        repeat:-1,
        yoyo:true,
        ease:'sine.inOut'
      })

      gsap.to(pinkOrbRef.current,{
        y:-20,
        duration:6,
        repeat:-1,
        yoyo:true,
        ease:'sine.inOut'
      })


      /* ------------------------------
          HERO CARDS
      ------------------------------ */

      const hcards = gsap.utils.toArray('.hcard')

      // MASTER HERO TIMELINE ENTRY
      const heroIntroTimeline = gsap.timeline({
        delay:0.2
      })

      // hero cards
      heroIntroTimeline.from(hcards,{

        y:120,
        opacity:0,
        scale:0.85,
        rotation:6,
        duration:1.4,
        ease:'power4.out',

        stagger:0.12,
       
        ease:'power4.out',
       
      })

       /* FLOATING LOOP */
      hcards.forEach((card,i) => {

        gsap.to(card,{

          y:gsap.utils.random(-40,20),
          x:gsap.utils.random(-8,8),
          rotation:gsap.utils.random(-4,4),

          duration:gsap.utils.random(3,5),

          repeat:-1,
          yoyo:true,
          
          ease:'sine.inOut',

          delay:i * 0.2,
        
        })
      })

      // hero tag container

      heroIntroTimeline.to(heroTagRef.current,{
        opacity:1,
        duration:0.02,    
      },'-=1')

      // hero tag line chars

      heroIntroTimeline.to(heroTagRef.current.querySelectorAll('.tag-char'),{
          opacity:1,
          y:0,
          duration:0.3,
          stagger:0.025,
          ease:'power2.out'
        
        },'-=0.9'
      )

      // hero heading text

      heroIntroTimeline.to( heroHeadingRef.current.querySelectorAll('.line-inner'),{
        y:'0%',
        duration:1.2,
        stagger:0.12,
        ease:'power4.out'
      },'-=0.6'
      )

      // hero heading subtext

      heroIntroTimeline.to(heroSubRef.current,{
        opacity:1,
        y:0,
        duration:0.8,
        ease:'power3.out'
      },'-=0.8')

      // hero action ref
      heroIntroTimeline.to(
        heroActionsRef.current,{
          opacity:1,
          y:0,
          duration:0.7,
          ease:'power3.out'
        },'-=0.5'
      )

    })

    return () => ctx.revert()

  },[])

}

export default useHeroAnimation