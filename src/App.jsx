import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}
