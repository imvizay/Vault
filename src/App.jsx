import React from 'react'
import '@/App.css'
import '@/index.css'

// cursor

import Cursor from '@components/cursor/Cursor'

// component
import AuthPage from '@components/auth/Register';
import AppRoutes from '@routes/AppRoutes';


export default function App() {
  return (
    
    <>
     
     {/* Global Cursor Custom Component For Cursor Interaction */}
      <Cursor/>
      
      {/* All Routes Centralized Inside This Component
      Whether Public,Users,Admin 
      */}
      <AppRoutes/>

    </>
    
  )
}