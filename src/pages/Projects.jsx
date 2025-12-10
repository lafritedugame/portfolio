import React, { useEffect, useRef, useState } from 'react'

// Brèves descriptions pour montrer rapidement la valeur des projets (challenge → approche → impact).
const projects = [
  {
    id: 1,
    title: 'Optimisation des interventions terrain',
    summary: 'Prédire les créneaux disponibles et générer automatiquement les rendez-vous techniciens.',
    challenge: 'Agenda technicien saturé, annulations et rendez-vous mal séquencés.',
    approach: 'Features horaires + géoloc, modèle de prédiction des durées, API FastAPI pour la génération de slots, stockage PostgreSQL.',
    stack: 'Python, scikit-learn, FastAPI, PostgreSQL',
    impact: '–15 % de temps de planification et +8 % de taux de complétion.',
    tags: ['ML', 'API', 'Ops'],
    code: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Analyse de tickets et routage NLP',
    summary: 'Classification/priorisation automatique des tickets support.',
    challenge: "Temps de tri manuel élevé et erreurs d'aiguillage.",
    approach: 'Nettoyage texte, embeddings + TF-IDF, classification multi-classes, Streamlit pour le routage et la priorisation.',
    stack: 'Python, spaCy, scikit-learn, Streamlit',
    impact: 'Macro-F1 0.87, –30 % de temps de tri manuel.',
    tags: ['NLP', 'Classification'],
    code: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Prévision de consommation énergétique',
    summary: "Anticiper les pics et piloter l'optimisation énergétique.",
    challenge: "Variabilité forte et besoin de recommandations actionnables.",
    approach: "Décomposition des séries, Prophet + baselines, détection de pics, dashboard Plotly pour scénarios d'effacement.",
    stack: "Python, Prophet, Pandas, Plotly",
    impact: "MAPE < 6 %, recommandations visuelles pour lissage des pics.",
    tags: ['Time Series', 'Forecast'],
    code: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Tableau de bord visites & conversion',
    summary: 'Suivi du parcours utilisateur et des KPIs marketing avec alertes.',
    challenge: 'Identifier les points de friction et réagir vite sur les campagnes.',
    approach: "Collecte événements, agrégations funnel, visualisations Plotly, alertes sur seuils de conversion.",
    stack: "React, Plotly, Node/Express",
    impact: "+12 % de conversion après déclenchement d'actions ciblées.",
    tags: ['Analytics', 'Viz'],
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
                  <a href={p.demo}>Démo</a>
                  <a href={p.code}>Code</a>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
