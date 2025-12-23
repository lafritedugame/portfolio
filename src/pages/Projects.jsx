import React, { useEffect, useRef, useState } from 'react'

// Brèves descriptions pour montrer rapidement la valeur des projets (challenge → approche → impact).
const projects = [
  {
    id: 1,
    title: 'Thermonova',
    summary: 'Application de diagnostic et d\'optimisation thermique pour logements.',
    challenge: 'La plupart des logements souffrent d\'une distribution thermique inefficace. Le défi consiste à déterminer le placement optimal et la puissance des radiateurs pour assurer une chauffe uniforme et confortable dans toutes les pièces, tout en réduisant la consommation énergétique.',
    approach: 'En équipe de six, nous avons développé une application multiplateforme en Flutter/Dart permettant aux utilisateurs de saisir facilement les caractéristiques de leur logement. Nous avons récupéré les données de chauffage disponibles et les aides à la rénovation via une API Django, puis implémenté un algorithme d\'optimisation pour déterminer le placement idéal. Les données sont stockées de manière sécurisée en GeoJSON via API distante et SQLite localement.',
    stack: 'Flutter/Dart, Django, SQLite, GeoJSON API',
    impact: 'Le prototype en cours de développement offre une solution personnalisée pour l\'optimisation thermique basée sur la géométrie réelle et les caractéristiques uniques de chaque logement, permettant aux utilisateurs de prendre des décisions éclairées sur leurs installations de chauffage.',
    tags: ['Flutter', 'Backend', 'Optimization'],
    code: 'https://gitlab.esiea.fr/t404/flutter-app',
    demo: '#'
  },
  {
    id: 2,
    title: 'Sales Analytics Pipeline',
    summary: 'Pipeline d\'extraction et d\'analyse de données commerciales pour suivi des performances.',
    challenge: 'Les équipes commerciales avaient besoin de comprendre les tendances de vente en analysant les données de rendez-vous d\'installation. Le défi était d\'automatiser l\'extraction, le nettoyage et l\'analyse de ces données pour générer des insights exploitables sans intervention manuelle répétée.',
    approach: 'J\'ai conçu un pipeline Python automatisé qui utilise l\'API Google Calendar pour récupérer les données de rendez-vous en temps réel. Le système traite et enrichit les données, effectue des comparaisons mensuelles et annuelles, puis génère des visualisations professionnelles avec Matplotlib et des rapports détaillés en Excel que les équipes peuvent facilement explorer.',
    stack: 'Python, Google Calendar API, Matplotlib, Excel',
    impact: 'Le dashboard analytique resultant facilite considérablement le suivi des performances commerciales et l\'identification des tendances saisonnières, permettant aux décideurs de réagir rapidement aux variations du marché et d\'optimiser les stratégies de vente.',
    tags: ['Data', 'Analytics', 'Python'],
    code: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'JP no Uta',
    summary: 'Lecteur de musique avec recherche intelligente et téléchargement concurrent.',
    challenge: 'L\'objectif était de créer un lecteur MP3 intuitif capable de rechercher et télécharger de la musique avec ses paroles et pochettes d\'album, sans jamais interrompre la lecture ni bloquer l\'interface utilisateur, même lors de téléchargements simultanés.',
    approach: 'En équipe de trois personnes, nous avons implémenté une architecture Python exploitant le multithreading pour gérer les opérations de téléchargement et de lecture en parallèle. Nous avons conçu une application acceptant des recherches vocales ou textuelles, consommant une base de données relationnelle pour stocker les musiques, paroles et préférences utilisateur, tout en maintenant une interface réactive grâce à une gestion asynchrone sophistiquée des tâches.',
    stack: 'Python, Multithreading, Base de données relationnelle',
    impact: 'Le lecteur offre une expérience utilisateur exceptionnellement fluide : la musique continue de jouer sans interruption, l\'interface reste toujours réactive aux interactions, et les téléchargements se font de manière transparente en arrière-plan, même lors de téléchargements volumineux.',
    tags: ['Audio', 'Python', 'Multithreading'],
    code: '#',
    demo: '#'
  }
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expandedId && gridRef.current && !gridRef.current.contains(event.target)) {
        setExpandedId(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [expandedId])

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleNavigate = (direction, event) => {
    if (event) event.stopPropagation()
    if (!expandedId) return
    const currentIndex = projects.findIndex(p => p.id === expandedId)
    if (currentIndex === -1) return
    const nextIndex = direction === 'next'
      ? (currentIndex + 1) % projects.length
      : (currentIndex - 1 + projects.length) % projects.length
    setExpandedId(projects[nextIndex].id)
  }

  return (
    <section>
      <h2>Projets</h2>
      <p>Une sélection de projets data / ML avec un focus sur l'impact mesurable. Cliquez sur une carte pour voir les détails.</p>
      <div ref={gridRef} className={`grid ${expandedId ? 'grid-expanded' : ''}`}>
        {projects.map(p => {
          const isExpanded = expandedId === p.id
          const isHidden = expandedId && !isExpanded
          return (
            <article
              key={p.id}
              className={`card ${isExpanded ? 'card-expanded' : ''} ${isHidden ? 'card-hidden' : ''}`}
              onClick={() => toggleExpand(p.id)}
              style={{ cursor: 'pointer' }}
            >
              {isExpanded && (
                <>
                  <button
                    type="button"
                    className="card-nav-btn card-nav-top"
                    onClick={(e) => handleNavigate('prev', e)}
                    aria-label="Carte précédente"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    className="card-nav-btn card-nav-bottom"
                    onClick={(e) => handleNavigate('next', e)}
                    aria-label="Carte suivante"
                  >
                    ↓
                  </button>
                </>
              )}

              <h3>{p.title}</h3>
              <p className="summary">{p.summary}</p>

              {isExpanded && (
                <div className="expanded-content">
                  <p><strong>Challenge :</strong> {p.challenge}</p>
                  <p><strong>Approche :</strong> {p.approach}</p>
                  <p><strong>Stack :</strong> {p.stack}</p>
                  <p><strong>Impact :</strong> {p.impact}</p>
                </div>
              )}

              {p.tags && (
                <div className="badge-row">
                  {p.tags.map(tag => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>
              )}

              {isExpanded && (
                <div className="card-actions">
                  <a 
                    href={p.demo} 
                    onClick={(e) => p.demo === '#' && e.preventDefault()}
                    style={{
                      opacity: p.demo === '#' ? 0.4 : 1,
                      cursor: p.demo === '#' ? 'not-allowed' : 'pointer',
                      pointerEvents: p.demo === '#' ? 'auto' : 'auto'
                    }}
                    className={p.demo === '#' ? 'disabled-link' : ''}
                  >
                    Démo
                  </a>
                  <a 
                    href={p.code} 
                    onClick={(e) => p.code === '#' && e.preventDefault()}
                    style={{
                      opacity: p.code === '#' ? 0.4 : 1,
                      cursor: p.code === '#' ? 'not-allowed' : 'pointer',
                      pointerEvents: p.code === '#' ? 'auto' : 'auto'
                    }}
                    className={p.code === '#' ? 'disabled-link' : ''}
                  >
                    Code
                  </a>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
