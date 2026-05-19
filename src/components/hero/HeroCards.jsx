import React from 'react'

function HeroCards() {
  

  const cards = [
    {
      id: 1,
      position: 'top-[10%] left-[4%] w-[200px] h-[260px]',
      gradient: 'from-[#1a0a2e] to-[#3d1a6e]',
      icon: '🔒',
      label: 'Private · 2024',
      hidden:true,
    },

    {
      id: 2,
      position: 'bottom-[14%] left-[8%] w-[160px] h-[210px]',
      gradient: 'from-[#0a1a2e] to-[#1a3a5c]',
      icon: '🌊',
      label: 'Encrypted',
      hidden:true
    },

    {
      id: 3,
      position: 'top-[8%] right-[5%] w-[220px] h-[280px]',
      gradient: 'from-[#1a0a1a] to-[#5c1a3a]',
      icon: '✦',
      label: 'Memory · Vault',
      hidden:false
    },

    {
      id: 4,
      position: 'bottom-[10%] right-[7%] w-[170px] h-[220px]',
      gradient: 'from-[#0a1a1a] to-[#1a4a4a]',
      icon: '🎞️',
      label: 'Personal',
      hidden:true
    }
  ]


  return (

    <div className='absolute inset-0 pointer-events-none overflow-hidden'>

      {
        cards.map((card) => (

          <div
            key={card.id}
            className={`hcard

            ${card.hidden ? "opacity-0 md:opacity-100" : ''}
            absolute
            ${card.position}
            rounded-3xl
            overflow-hidden
            border border-white/10
            backdrop-blur-xl
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            bg-white/[0.03]

            md:block
            `}
          >

            {/* CARD INNER */}
            <div
              className={`
                w-full
                h-full
                bg-gradient-to-br
                ${card.gradient}
                relative
                flex
                items-center
                justify-center
               
              `}
            >

            {/* INNER GLASS BORDER */}
            <div
              className='
              absolute
              inset-2
              rounded-[1.5rem]
              border
              border-white/20
              pointer-events-none
             bg-white/[0.02]
              '
            />

            {/* TOP GLOW */}
            <div
              className='absolute
              top-0
              left-0
              w-full
              h-full
              bg-gradient-to-b
              from-white/10
              to-transparent'
            />

            {/* CENTER ICON */}
            <div
              className='text-5xl
              opacity-20
              select-none'
            >
              {card.icon}
            </div>

            {/* GLASS REFLECTION */}
            <div
              className='absolute
              top-[-20%]
              left-[-40%]
              w-[180%]
              h-[40%]
              rotate-12
              bg-white/10
              blur-2xl'
            />

          </div>

          </div>

        ))
      }

    </div>

  )
}

export default HeroCards