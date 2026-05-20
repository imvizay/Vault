import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {

  return (

    <div className='flex min-h-screen items-center justify-center bg-black px-6'>

      <div className='w-full max-w-md'>

        <Outlet />

      </div>

    </div>

  )
}

export default AuthLayout