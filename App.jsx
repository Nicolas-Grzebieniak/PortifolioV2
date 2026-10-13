import { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import startEffects from './effects/index.js'

export default function App() {
  // Animações e comportamentos (revelar ao rolar, régua, grid, loops dos mockups)
  useEffect(() => startEffects(), [])

  return (
    <>
      <a className="skip" href="#work">Skip to content</a>
      <canvas id="warp" aria-hidden="true" />
      <main id="top">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <div className="ruler" aria-hidden="true">
        <div className="win" />
        <div className="mark"><b /></div>
      </div>
    </>
  )
}
