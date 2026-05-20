import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Unauthorized() {

  const location = useLocation()

  const attemptedPath = location.state?.pathname

  return (

    <div className='min-h-screen bg-black text-white flex items-center justify-center px-6'>

      <div className='max-w-xl text-center'>

        <h1 className='text-6xl font-bold mb-6 text-red-400'>
          403
        </h1>

         <h2 className='text-3xl font-bold mb-4'>
          Unauthorized Access
        </h2>

        <p className='text-zinc-400 mb-8'>
          You do not have permission to access:
        </p>

        <div className='mb-10 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-300'>
          {attemptedPath}
        </div>

        <Link
          to='/'
          className='rounded-full bg-violet-500 px-6 py-3 font-semibold hover:bg-violet-400 transition-all'
        >
          Return Home
        </Link>

         </div>

    </div>
  )
}

export default Unauthorized