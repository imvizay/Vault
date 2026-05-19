import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

function useStatementAnimation(statementRef) {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const lines = gsap.utils.toArray('.reveal-line')

      lines.forEach((line) => {

        const split = new SplitText(line, {
          type: 'chars'
        })

        gsap.set(split.chars, {
          opacity: 0,
          y: 40,
          filter: 'blur(8px)',
          willChange: 'transform, opacity'
        })

        gsap.to(split.chars, {

          opacity: 1,
          y: 0,
          filter: 'blur(0px)',

          duration: 1.4,

          stagger: 0.025,

          ease: 'power3.out',
        
          scrollTrigger: {
            trigger: line,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          }

        })

      })

      // description paragraph

      gsap.from('.statement-description', {

        opacity: 0,
        y: 30,

        duration: 1.6,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.statement-description',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }

      })

      // eyebrow

      gsap.from('.statement-eyebrow', {

        opacity: 0,
        y: 12,

        duration: 1,

        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.statement-eyebrow',
          start: 'top 92%',
        }

      })

    }, statementRef)

    return () => ctx.revert()

  }, [])

}

export default useStatementAnimation