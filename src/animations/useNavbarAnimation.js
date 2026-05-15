import gsap from 'gsap';
import { useRef,useEffect } from 'react';

function useNavbarAnimation(openMenu) {

    const topLineRef = useRef(null)
    const midLineRef = useRef(null)
    const botLineRef = useRef(null)

    const mobileMenuOverlayRef = useRef(null)
    const menuBgRef = useRef(null)

    const tl = useRef(null)

    useEffect(() => {

        if(!mobileMenuOverlayRef.current) return

        const menuLinks =
          mobileMenuOverlayRef.current.querySelectorAll('.menu-link')

        if(menuBgRef.current){
            gsap.set(menuBgRef.current,{
                scale:0,
            })
        }

        gsap.set(menuLinks,{
            y:120,
            opacity:0
        })

        tl.current = gsap.timeline({
            paused:true
        })

        tl.current.set(mobileMenuOverlayRef.current,{
           pointerEvents:'auto'
        })

        tl.current.to(menuBgRef.current,{
            scale:45,
            duration:2,
            ease:'expo.inOut'
        })

        tl.current.to(menuLinks,{
            y:0,
            opacity:1,
            stagger:0.08,
            duration:1.6,
            ease:'power3.out'
        },'-=0.7')

        tl.current.to(topLineRef.current,{
            rotate:45,
            y:8
        },0)

        tl.current.to(midLineRef.current,{
            opacity:0,
        },0)

        tl.current.to(botLineRef.current,{
            rotate:-45,
            y:-8
        },0)

    },[])

    useEffect(() => {

        if(!tl.current) return

        if(openMenu){
            tl.current.play()
        }
        else{

            tl.current.reverse()

            tl.current.eventCallback(
              "onReverseComplete",
              () => {

                if(mobileMenuOverlayRef.current){

                    gsap.set(
                      mobileMenuOverlayRef.current,
                      {
                        pointerEvents:'none'
                      }
                    )

                }

            })

        }

    },[openMenu])

    useEffect(() => {
        return () => {
            tl.current?.kill()
        }
    },[])

    return {
        topLineRef,
        midLineRef,
        botLineRef,
        mobileMenuOverlayRef,
        menuBgRef
    }
}

export default useNavbarAnimation