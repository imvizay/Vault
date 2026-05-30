/* Component exported to mainlayout component to render as the platform landing page. */

import React from 'react';

// HOME PAGE COMPONENTS
import Hero from '@components/hero/Hero';
import Marque from '@components/marque/Marque';
import StatementSection from '@components/statement/Statement';
import Features from '@components/features/Features';
import GallerySection from '@components/gallery/Gallery';
import HowItWorks from '@components/howitworks/HowItWorks';
import SecuritySection from '@components/security/Security';
import PricingSection from '@components/pricing/Pricing';

function Home() {
  return (
    <>
      <Hero/>
      <Marque/>
      <StatementSection/>
      <Features/>
      <GallerySection/>
      <HowItWorks/>
      <SecuritySection/>
      <PricingSection/>
    </>
  )
}

export default Home