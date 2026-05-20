import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {

  return (

    <div className='min-h-screen bg-zinc-950 text-white'>

      <div className='border-b border-white/10 p-6'>

        <h1 className='text-xl font-bold'>
          Admin Panel
        </h1>

      </div>

      <main className='p-8'>

        <Outlet />

      </main>

    </div>

  )
}

export default AdminLayout