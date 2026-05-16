import '../../App.css'
import React, { useState } from 'react'
import AnimatedText from '../ui/AnimatedText'
import useNavbarAnimation from '../../animations/useNavbarAnimation'

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  const {
    menuBgRef,
    mobileMenuOverlayRef,

    topLineRef,
    midLineRef,
    botLineRef,

    clTopLineRef,
    clBottomLineRef,

  } = useNavbarAnimation(openMenu)

  return (
    <>

      {/* NAVBAR */}
      <nav className='px-4 py-4 fixed top-0 left-0 right-0 z-[997] flex items-center justify-between border border-transparent backdrop-blur-2xl'>

        {/* LOGO */}
        <div className='font-[SyneExtraBold] text-sm'>
          Gallary Vault
        </div>

        {/* DESKTOP NAV */}
        <ul className='hidden lg:flex items-center gap-8 font-[ChunkyPlayful] font-medium tracking-widest'>

          <li data-cursor='morph' className='relative'>
            <AnimatedText className='menu-link'>
              Features
            </AnimatedText>
          </li>

          <li data-cursor='morph' className='relative'>
            <AnimatedText className='menu-link'>
              Gallary
            </AnimatedText>
          </li>

          <li data-cursor='morph' className='relative'>
            <AnimatedText className='menu-link'>
              Security
            </AnimatedText>
          </li>

          <li data-cursor='morph' className='relative'>
            <AnimatedText className='menu-link'>
              Pricing
            </AnimatedText>
          </li>

        </ul>

        {/* DESKTOP CTA */}
        <button data-cursor='morph' className='hidden md:block text-[var(--purple)] font-bold border border-white py-2 px-6 rounded-full'>
          Create Vault
        </button>

        {/* MOBILE HAMBURGER */}
        <div onClick={() => setOpenMenu( p => !p )} className='md:hidden flex flex-col justify-end items-end gap-1.5 z-[200] cursor-pointer'>

          <span ref={topLineRef} className='block w-5 h-[2px] bg-white'></span>

          <span ref={midLineRef} className='block w-4 h-[2px] bg-white'></span>

          <span ref={botLineRef} className='block w-5 h-[2px] bg-white'></span>

        </div>

      </nav>

      {/* MOBILE OVERLAY */}
      
      <div ref={mobileMenuOverlayRef} className='fixed inset-0 z-[150] pointer-events-none overflow-hidden'>

        {/* EXPANDING BG */}
        <div ref={menuBgRef} className='absolute top-0 right-0 w-16 h-16 rounded-full bg-[#7c3aed]'></div>

        {/* CONTENT */}
        <div className='absolute inset-0 flex flex-col justify-center items-center gap-10 font-[ChunkyPlayful]'>

          <div data-cursor='morph'>
              <AnimatedText className='menu-link text-4xl font-medium tracking-wider'>
                Features
              </AnimatedText>
          </div>

          <div data-cursor='morph'>
              <AnimatedText className='menu-link text-4xl font-medium tracking-wider'>
                Gallary
              </AnimatedText>
          </div>

          <div data-cursor='morph'>
              <AnimatedText className='menu-link text-4xl font-medium tracking-wider'>
                Pricing
              </AnimatedText>
          </div>

          <div data-cursor='morph'>
              <AnimatedText className='menu-link text-4xl font-medium tracking-wider'>
                Security
              </AnimatedText>
          </div>
            
          <button data-cursor='morph' 
            className='menu-link md:hidden
            block text-[var(--purple)] font-bold border border-white py-2 px-6 rounded-full'
            >
              Create Vault
          </button>
            
          </div>
         
      </div>

    </>
  )
}

export default Navbar