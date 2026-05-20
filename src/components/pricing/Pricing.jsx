import React from 'react'
import { Check,IndianRupee } from 'lucide-react'

function PricingSection() {

  const pricingPlans = [
    {
      tier: 'Personal',
      price: 0,
      period: 'Free forever',
      buttonText: 'Get Started Free',
      buttonVariant: 'ghost',
      featured: false,
      features: [
        '5 GB encrypted storage',
        '3 private vaults',
        'Temporary share links',
        'Mobile apps'
      ]
    },

    {
      tier: 'Vault Pro',
      price: 499,
      period: 'per month',
      buttonText: 'Start Free Trial',
      buttonVariant: 'fill',
      featured: true,
      features: [
        '100 GB encrypted storage',
        'Unlimited vaults',
        'Custom expiry links',
        'Biometric lock',
        'Priority support'
      ]
    },

    {
      tier: 'Sanctuary',
      price: 999,
      period: 'per month',
      buttonText: 'Contact Sales',
      buttonVariant: 'ghost',
      featured: false,
      features: [
        '1 TB encrypted storage',
        'Unlimited everything',
        'Family sharing (5 users)',
        'Advanced access control',
        'Dedicated support'
      ]
    }
  ]

  return (

    <section
      id='pricing'
      className='relative overflow-hidden px-6 py-28 md:px-10'
    >

      {/* Background Glow */}
      <div className='absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]' />

      {/* Header */}
      <div className='relative z-10 mx-auto max-w-5xl text-center'>

        <div className='mb-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl'>

          <span className='font-[SyneBold] text-[11px] uppercase tracking-[0.25em] text-violet-300'>
            Simple Pricing
          </span>

        </div>

        <h2 className='mx-auto max-w-3xl font-[SyneBold] text-[clamp(32px,4vw,56px)] leading-none tracking-[-0.04em] text-white'>

          Choose your{' '}

          <span className='bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent'>
            sanctuary
          </span>

        </h2>

      </div>

      {/* Pricing Grid */}
      <div className='relative z-10 mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3'>

        {pricingPlans.map((plan, index) => (

          <div
            key={index}
            // data-cursor='morph'
            className={`
              price-card group relative overflow-hidden rounded-[28px] border p-10 transition-all duration-500
              hover:-translate-y-2
              ${plan.featured
                ? 'border-violet-400/30 bg-gradient-to-b from-violet-500/10 to-pink-500/5 shadow-[0_0_60px_rgba(123,94,167,0.15)]'
                : 'border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/20'
              }
            `}
          >

            {/* Featured Badge */}
            {plan.featured && (
            
              <div className='absolute right-5 top-5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-3 py-1'>

                <span className='font-[SyneBold] text-[10px] uppercase tracking-[0.14em] text-white'>
                  Most Popular
                </span>

              </div>

            )}

            {/* Tier */}
            <p className='mb-5 font-[SyneBold] text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]'>
              {plan.tier}
            </p>

            {/* Price */}
            <div className='mb-2'>

              <h3
                className={` flex 
                  font-[SyneBold] text-[56px] leading-none tracking-[-0.05em]
                  ${plan.featured
                    ? 'bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent'
                    : 'text-white'
                  }
                `}
              >
                <span className='inline-flex items-center text-violet-300'>
                    {<IndianRupee size={42} strokeWidth={2.5}/>}
                </span> 
                <span className='inline-block'>
                    {plan.price}
                </span>
              </h3>

            </div>

            {/* Period */}
            <p className='mb-10 text-sm text-[var(--muted)]'>
              {plan.period}
            </p>

            {/* Features */}
            <ul className='mb-12 flex flex-col gap-4'>

              {plan.features.map((feature, i) => (

                <li
                  key={i}
                  className='flex items-center gap-3 text-sm text-[var(--muted)]'
                >

                  <div className='flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10'>

                    <Check size={12} className='text-violet-300' />

                  </div>

                  <span>
                    {feature}
                  </span>

                </li>

              ))}

            </ul>

            {/* CTA */}
            <button
              className={`
                w-full rounded-full px-6 py-4 font-[SyneBold] text-sm tracking-[0.04em] transition-all duration-300
                ${plan.buttonVariant === 'fill'
                  ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-[0_0_30px_rgba(123,94,167,0.4)] hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(166,115,232,0.5)]'
                  : 'border border-white/10 bg-transparent text-[var(--muted)] hover:border-white/20 hover:text-white'
                }
              `}
            >
              {plan.buttonText}
            </button>

            {/* Hover Glow */}
            <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>

              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_55%)]' />

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default PricingSection