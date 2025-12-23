import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import CV from './pages/CV'
import LavaBlobPhysics from './components/LavaBlobPhysics'
import FloatingRoses from './components/FloatingRoses'

  const routeMap = {
  '': 'home',
  '#/': 'home',
  '#/projects': 'projects',
  '#/about': 'about',
  '#/contact': 'contact',
  '#/cv': 'cv'
}

export default function App() {
  const [route, setRoute] = useState(routeMap[window.location.hash] || 'home')

  useEffect(() => {
    const onHash = () => setRoute(routeMap[window.location.hash] || 'home')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="app">
      {/* Physics-based lava lamp background */}
      <LavaBlobPhysics />
      <FloatingRoses />
      <div className="lava-bg">
        <div className="lava-blob blob-1"></div>
        <div className="lava-blob blob-2"></div>
        <div className="lava-blob blob-3"></div>
        <div className="lava-blob blob-4"></div>
        <div className="lava-blob blob-5"></div>
        <div className="lava-blob blob-6"></div>
        <div className="lava-blob blob-7"></div>
        <div className="lava-blob blob-8"></div>
        <div className="lava-blob blob-9"></div>
        <div className="lava-blob blob-10"></div>
        <div className="lava-blob blob-11"></div>
        <div className="lava-blob blob-12"></div>
        <div className="lava-blob blob-13"></div>
        <div className="lava-blob blob-14"></div>
        <div className="lava-blob blob-15"></div>
        <div className="lava-blob blob-16"></div>
        <div className="lava-blob blob-17"></div>
        <div className="lava-blob blob-18"></div>
        <div className="lava-blob blob-19"></div>
        <div className="lava-blob blob-20"></div>
        <div className="lava-blob blob-21"></div>
        <div className="lava-blob blob-22"></div>
        <div className="lava-blob blob-23"></div>
        <div className="lava-blob blob-24"></div>
        <div className="lava-blob blob-25"></div>
        <div className="lava-blob blob-26"></div>
        <div className="lava-blob blob-27"></div>
        <div className="lava-blob blob-28"></div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-section">
            <img 
              src="/photo-profile.png" 
              alt="Acsel Parsy" 
              className="brand-image"
            />
            <h1 className="brand">Portfolio - Acsel Parsy</h1>
          </div>
          <nav>
            <a href="#/">Accueil</a>
            <a href="#/projects">Projets</a>
            <a href="#/about">À propos</a>
            <a href="#/cv">CV</a>
            <a href="#/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {route === 'home' && <Home />}
        {route === 'projects' && <Projects />}
        {route === 'about' && <About />}
        {route === 'cv' && <CV />}
        {route === 'contact' && <Contact />}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img
            className="school-logo small"
            src="/esiea.png"
            alt="ESIEA"
            onError={(e) => (e.currentTarget.src = '/LogoEsiea.png')}
          />
          <div className="copyright">© {new Date().getFullYear()} — Acsel Parsy</div>
        </div>
      </footer>
    </div>
  )
}
