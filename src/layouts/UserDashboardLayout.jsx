import React from 'react'
import { Outlet } from 'react-router-dom'

// import Sidebar from '../components/Sidebar'
// import Topbar from '../components/Topbar'

function UserDashboardLayout() {

  return (

    <div className='flex min-h-screen bg-black text-white'>

      {/* <Sidebar /> */}

      <div className='flex-1'>

        {/* <Topbar /> */}

        <main className='p-8'>

          <Outlet />

        </main>

      </div>

    </div>

  )
}

export default UserDashboardLayout