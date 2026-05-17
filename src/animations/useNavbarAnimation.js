import gsap from 'gsap';
import { useRef,useLayoutEffect,useEffect } from 'react';

function useNavbarAnimation(openMenu) {

    const navbarCtxRef = useRef(null)

    // open menu icon
    const topLineRef = useRef(null)
    const midLineRef = useRef(null)
    const botLineRef = useRef(null)

    const mobileMenuOverlayRef = useRef(null)
    const menuBgRef = useRef(null)

    const tl = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(()=>{
             if(!mobileMenuOverlayRef.current) return

        const menuLinks = gsap.utils.toArray('.menu-link',mobileMenuOverlayRef.current)

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
           pointerEvents:'auto',
           visibility:'visible',
           opacity:1,

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
            rotation:0,
            ease:'power3.out'
        },'-=0.7')

        tl.current.to(topLineRef.current,{
            rotate:45,
            y:7,
            duration:0.45,
            ease:'power3.out'
        },0)


        tl.current.to(midLineRef.current,{
            opacity:0,
        },0)

        tl.current.to(botLineRef.current,{
            rotate:-45,
            y:-7,
            duration:0.45,
            ease:'power3.out'
        },0)

        },navbarCtxRef)

        return () => ctx.revert()
       
    },[])

    useEffect(() => {

        if(!tl.current) return

        if(openMenu){
            tl.current.play()
        }
        else{

            tl.current.reverse()

            tl.current.eventCallback( "onReverseComplete", 
                () => {

                     gsap.set(
                       mobileMenuOverlayRef.current,
                       {
                         pointerEvents:'none',
                         opacity:0,
                         visibility:'hidden'
                       }
                     )
            })
        }
    },[openMenu])

    useEffect(() => {
        return () => {
            tl.current?.kill()
        }
    },[])

    return {

        navbarCtxRef,
        topLineRef,
        midLineRef,
        botLineRef,

        mobileMenuOverlayRef,
        menuBgRef
    }
}

export default useNavbarAnimation