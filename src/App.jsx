import React from 'react'
import './App.css'
import './index.css'

// component
import Navbar from './components/common/Navbar';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';

export default function App() {
  return (
    
    <>
      <Navbar/>
      <Cursor/>
      <Hero/>
    </>
    
  )
}