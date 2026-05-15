import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Cursor() {

  const cursorRef = useRef(null)
  const glowRef = useRef(null)
  const isMorphing = useRef(false)

  useEffect(() => {

    gsap.set([cursorRef.current, glowRef.current], {
      xPercent: -50,
      yPercent: -50,
    })

    const cursorX = gsap.quickSetter(cursorRef.current, 'x', 'px')
    const cursorY = gsap.quickSetter(cursorRef.current, 'y', 'px')

    const moveCursor = (e) => {

      cursorX(e.clientX)
      cursorY(e.clientY)

      if (!isMorphing.current) {

        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power3.out',
          overwrite: 'auto'
        })

      }

    }

    window.addEventListener('mousemove', moveCursor)

    const morphTargets = document.querySelectorAll("[data-cursor='morph']")

    morphTargets.forEach(element => {

      const mouseenter = () => {

        isMorphing.current = true

        const rect = element.getBoundingClientRect()

        gsap.to(cursorRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.25,
        })

        gsap.to(glowRef.current, {
          width: rect.width + 30,
          height: rect.height + 15,
          backgroundColor:"var(--purple-glow-fadeout)",

          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,

          borderRadius: 999,

          duration: 0.55,
          ease: 'power4.out',
        })
      }

      const mouseleave = () => {

        isMorphing.current = false

        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.25,
        })

        gsap.to(glowRef.current, {
          width: 40,
          height: 40,
          borderRadius: 999,
          backgroundColor:"",

          duration: 0.55,
          ease: 'power4.out',
        })
      }

      element.addEventListener('mouseenter', mouseenter)
      element.addEventListener('mouseleave', mouseleave)

    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }

  }, [])

  return (
    <>

      {/* INNER DOT */}
      <div ref={cursorRef} className=" fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-80"/>

      {/* GLOW */}
      <div 
      ref={glowRef} 
      className=" fixed top-0 left-0 w-10 h-10 rounded-full border border-purple-400/20  pointer-events-none will-change-transform z-40
    "/>


    {/* progress bar */}

    </>
  )
}

export default Cursor