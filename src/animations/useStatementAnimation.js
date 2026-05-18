
import {React, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger,SplitText)
function useStatementAnimation(statementRef) {

    useLayoutEffect(()=>{

        const ctx = gsap.context( () => {

            // selected all line reveal
            const lines = gsap.utils.toArray('.reveal-line')
                    
                        
            lines.forEach((line) => {
            const split = new SplitText(line, {
                type: "chars"
            })
          
            gsap.set(split.chars, {
                opacity: 0,
                yPercent: 120,
                scaleY: 1.8,
                scaleX: 0.7,
                filter: "blur(12px)",
                rotateX: -90,
                transformOrigin: "50% 100%",
                willChange: "transform, opacity, filter"
            })
          
            gsap.to(split.chars, {
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                rotateX: 0,
                filter: "blur(0px)",
                duration: 1.8,
            
                stagger: {
                  each: 0.015,
                  from: "random"
                },
            
                ease: "expo.out",
            
                scrollTrigger: {
                  trigger: line,
                  start: "top 92%",
                  end: "top 45%",
                  scrub: 1.2,
                  markers: false
                }
            })
            })




        },statementRef)

        
        return () => ctx.revert()
    },[])

}

export default useStatementAnimation    