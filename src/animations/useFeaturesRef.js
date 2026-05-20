import React from 'react'
import { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';


gsap.registerPlugin(ScrollTrigger,SplitText)

export default function useFeaturesRef(featuresRef) {

    useLayoutEffect(()=>{

        const ctx = gsap.context(()=>{

            // feature card class name 
            const ids = ['#fc01','#fc02','#fc03','#fc04']

            // feature card title eye heading
            const words = document.querySelectorAll('.reveal-eye')
            const splitedWords = []

            // words animation
            words.forEach((word,i) => {
                let split = new SplitText(word,{
                    type:'chars'
                })
                splitedWords.push(word)
                gsap.from(split.chars, {
                    y: 10,
                    opacity: 0,

                    duration: 0.6,
                    ease: 'power3.out',

                    stagger: 0.04,
                    delay: i * 0.2,

                    scrollTrigger: {
                        trigger: word,
                        start: 'top 85%',
                        end: 'bottom 90%',
                    }
                })
            })    
            
            // cards animation
            ids.forEach((card,i)=>{
            gsap.from(card, {
                y: 80,
                opacity: 0,
                duration: 1.2,
                delay: i * 0.20,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: `top 85%`,
                    end:'bottom 90%',
                },
            })

            })
        
        },featuresRef)

        return () => ctx.revert()

    },[])
    
}

