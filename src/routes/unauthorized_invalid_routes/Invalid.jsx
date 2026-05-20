import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {

  return (

    <div className='min-h-screen bg-black text-white flex items-center justify-center px-6'>

      <div className='text-center'>

        <h1 className='text-7xl font-black text-violet-400 mb-4'>
          404
        </h1>

        <h2 className='text-3xl font-bold mb-4'>
          Route Not Found
        </h2>

         <p className='text-zinc-400 mb-8'>
          The page you're trying to access does not exist.
        </p>

        <Link
          to='/'
          className='rounded-full border border-white/10 px-6 py-3 hover:border-violet-400 transition-all'
        >
          Go Back Home
        </Link>

      </div>

    </div>
  )
}

export default NotFound