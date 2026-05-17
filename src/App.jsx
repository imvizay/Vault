import React from 'react'
import './App.css'
import './index.css'

// component
import Navbar from './components/common/Navbar';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Marque from './components/marque/Marque';
import Statement from './components/statement/Statement';

export default function App() {
  return (
    
    <>
      <Navbar/>
      <Cursor/>
      <Hero/>
      <Marque/>
      <Statement/>
    </>
    
  )
}