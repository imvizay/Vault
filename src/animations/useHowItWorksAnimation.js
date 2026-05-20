import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
function useHowItWorksAnimation(howItWorkRef) {

    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            const steps = document.querySelectorAll('.how-card')
           
                
                gsap.from(steps,{
                    y:60,
                    opacity:0,
                    duration:0.9,
                    stagger:0.18,
                    ease:'power3.out',
                    scrollTrigger:{
                        trigger:howItWorkRef.current,
                        start:'top -20%',
                    }
                })
           


        },howItWorkRef)

        return () => ctx.revert()
    },[])
  
}

export default useHowItWorksAnimation