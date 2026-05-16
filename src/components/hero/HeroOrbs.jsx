import React from 'react'

import useHeroAnimation from '../../animations/useheroAnimation'

const HeroOrbs = ({
    purpleOrbRef,
    cyanOrbRef,
    pinkOrbRef
  }) => {


  return (
    <>
    
      {/* TOP LEFT */}
      <div
      ref={purpleOrbRef}
        className='absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full blur-[120px]
        bg-[radial-gradient(circle,rgba(123,94,167,0.35)_0%,transparent_70%)]'
      />

      {/* BOTTOM RIGHT */}
      <div
      ref={cyanOrbRef} className='absolute bottom-[-50px] right-[-50px] w-[500px] h-[500px]
        rounded-full
        blur-[120px]
        bg-[radial-gradient(circle,rgba(224,111,163,0.25)_0%,transparent_70%)]'
      />

      {/* CENTER */}
      <div
      ref={pinkOrbRef} 
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]
        rounded-full
        blur-[120px]
        bg-[radial-gradient(circle,rgba(82,217,217,0.15)_0%,transparent_70%)]'
      />

    </>
  )
}

export default HeroOrbs
