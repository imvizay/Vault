import React from 'react'
import { Outlet } from 'react-router-dom'

// ICONS
import {
  Search,
  Shield,
  Upload,
  LayoutGrid,
  List,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react'

function UserDashboardLayout() {

  return (

    <div className='min-h-screen bg-[#e6e6ef] text-[#111827]'>

      {/* TOPBAR */}
      <header className=' h-[88px] border-b border-[#ececf2] px-10 flex items-center justify-between '>

        {/* LEFT */}
        <div className='flex items-center gap-16'>

          {/* LOGO */}
          <div className='flex items-center gap-3'>

            <div className=' w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/20 '>

              <Shield size={18} className='text-white' />

            </div>

            <h1 className=' text-[28px] font-black tracking-tight '>
              Gallery Vault
            </h1>

          </div>

        </div>

        {/* USER */}
        <button className=' flex items-center gap-4 hover:bg-[#f2f2f7] px-4 py-2 rounded-2xl transition-all duration-300 '>

          <img src='https://i.pravatar.cc/100' alt='user' className=' w-12 h-12 rounded-full object-cover ' />

          <span className='font-semibold text-[15px]'>
            Vijay Meena
          </span>

          <ChevronDown size={18} />

        </button>

      </header>

      {/* BODY */}
      <section className='px-12 py-3'>

        {/* HEADER */}
        <div className='flex items-start justify-between'>

          {/* LEFT */}
          <div>

            <div className='flex items-center gap-3'>

              <h2 className=' text-[26px] font-black tracking-tight leading-none '>

                Your Memories

              </h2>

              <Shield size={26} className='text-violet-600 mt-2' />

            </div>

            <p className=' text-[#6b7280] mt-1 text-[14px] font-medium '>

              Encrypted and secured just for you.

            </p>

          </div>

          {/* RIGHT */}
          <div className='flex items-center gap-5'>

            {/* UPLOAD */}
            <button className=' h-[50px] px-8 rounded-2xl bg-violet-600 text-white font-semibold flex items-center gap-3 shadow-lg shadow-violet-500/20 hover:scale-[1.02] hover:bg-violet-700 transition-all duration-300 '>

              <Upload size={19} />

              Upload Photos

            </button>

            {/* VIEW MODES */}
            {/* <div className='flex items-center gap-3'>

              <button className=' w-[56px] h-[56px] rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center '>

                <LayoutGrid size={20} />

              </button>

              <button className=' w-[56px] h-[56px] rounded-2xl bg-[#f2f2f7] text-[#6b7280] flex items-center justify-center hover:bg-[#ececf2] transition-all duration-300 '>

                <List size={20} />

              </button>

            </div> */}

          </div>

        </div>

        {/* FILTERS */}
        <div className=' flex items-center justify-between mt-6 '>

          {/* TABS */}
          <div className='flex items-center gap-2'>

            {
              ['All', 'Images', 'Videos', 'Favorites']
              .map((el, idx) => (

                <button key={idx} className={` h-[45px] px-6 rounded-2xl font-semibold transition-all duration-300
                  ${
                    idx === 0
                    ?
                    'bg-violet-100 text-violet-600'
                    :
                    'bg-white border border-[#ececf2] text-[#6b7280] hover:border-violet-200 hover:text-violet-600'
                  }
                  `}
                >

                  {el}

                </button>

              ))
            }

          </div>

          {/* SORT */}
          {/* <button className=' h-[56px] px-6 rounded-2xl bg-white border border-[#ececf2] flex items-center gap-4 font-medium text-[#4b5563] hover:border-violet-300 transition-all duration-300 '>

            Date Added

            <ChevronDown size={18} />

          </button> */}

        </div>

        {/* OUTLET */}
        <main className='mt-10'>

          <Outlet />

        </main>

      </section>

    </div>
  )
}

export default UserDashboardLayout