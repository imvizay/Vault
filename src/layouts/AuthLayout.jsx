// AuthLayout.jsx

import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {

  return (
    <main className='min-h-screen bg-black overflow-hidden'>
      <Outlet />
    </main>
  )

}

export default AuthLayout