import gsap from "gsap"
import React, { useLayoutEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function useGalleryAnimation(galleryRef) {

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
        // horizontal scroll (how much we need to scroll)
        let track = document.querySelector('.gallery-track')
        let totalScroll = track.scrollWidth - window.innerWidth // total scroll excluding current view port width

        // horizontal movement
        gsap.to(track,{
            x:-totalScroll,
            ease:'none',
            scrollTrigger:{
                trigger:galleryRef.current,
                start:'top top',
                end:`+=${totalScroll}`,
                scrub:1.2,
                invalidateOnRefresh:true
            }
        })

        // cards parallex
        const gcards = gsap.utils.toArray('.gcard')
        gcards.forEach((card,i) => {
            gsap.to(card,{
                y: i % 2 == 0 ? -40 : 40,
                ease:'none',
                scrollTrigger:{
                    trigger:galleryRef.current,
                    start:'top top',
                    end:`+=${totalScroll}`,
                    scrub:true,

                }
            })
        })

        return () => ctx.revert()
        
        },galleryRef)

    }, [])

}

export default useGalleryAnimation