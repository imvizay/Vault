import React from 'react'
import HeroOrbs from './HeroOrbs'
import HeroCards from './HeroCards'
import HeroContent from './HeroContent'
import ScrollHint from './ScrollHint'

function Hero() {
  return (
    <section>
        <HeroOrbs/>
        <HeroCards/>
        <HeroContent/>
        <ScrollHint/>
    </section>
  )
}

export default Hero