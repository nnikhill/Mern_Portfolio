import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Education from './Components/Eduaction'
import Skills from './Components/Skills'

import Contact from './Components/contact'
import Projects from './Components/projects'

const App = () => {
  return (
    <div >
    <Navbar/>
    <HeroSection/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App
