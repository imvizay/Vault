import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function useSecurityAnimation(securityRef) {

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

           const securityTl = gsap.timeline({
                scrollTrigger:{
                    trigger: securityRef.current,
                    start:'top -20%',
                }
            })

            securityTl.from('.security-heading', {
                y:60,
                opacity:0,
                duration:1.4,
                ease:'power3.out',
            })

            securityTl.from('.security-description', {
                y:30,
                opacity:0,
                duration:1.2,
                ease:'power2.out',
            },'-=0.8')

            securityTl.from('.security-badge', {
                y:-20,
                opacity:0.5,
                duration:0.8,
                stagger:0.08,
                ease:'power3.out',
                // immediateRender: false,
                
            },'-=0.9')

        }, securityRef)

        return () => ctx.revert()

    }, [])

}

export default useSecurityAnimation