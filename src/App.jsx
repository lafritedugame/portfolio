import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const routeMap = {
  '': 'home',
  '#/': 'home',
  '#/projects': 'projects',
  '#/about': 'about',
  '#/contact': 'contact'
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
      <header className="site-header">
        <div className="container">
          <h1 className="brand">Mon Portfolio - Data Science</h1>
          <nav>
            <a href="#/">Accueil</a>
            <a href="#/projects">Projets</a>
            <a href="#/about">À propos</a>
            <a href="#/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {route === 'home' && <Home />}
        {route === 'projects' && <Projects />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} — Acsel Parsy</div>
      </footer>
    </div>
  )
}
