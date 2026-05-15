import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedText({children,className=''}) {

  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      paused: true
    });

    tl.to(trackRef.current, {
      yPercent: -50,
      duration: 0.35,
      ease: "power3.out"
    });

    const wrapper = wrapperRef.current;

    const enter = () => tl.play()
    const leave = () => tl.reverse()

    wrapper.addEventListener("mouseenter", enter);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mouseenter", enter);
      wrapper.removeEventListener("mouseleave", leave);
    }

  }, [])

  return (

    <div
      // data-cursor="morph"
      ref={wrapperRef}
      className={`relative overflow-hidden leading-none h-[1em] ${className}`}
    >

     <div ref={trackRef} className="flex flex-col">

        <span className="block">
          {children}
        </span>

        <span className="block text-purple-400">
          {children}
        </span>

      </div>

    </div>

  )
}