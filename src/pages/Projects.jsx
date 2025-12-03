import React from 'react'

const sampleProjects = [
  { id: 1, title: 'Projet 1 - Classification', tags: ['ML', 'Python'] },
  { id: 2, title: 'Projet 2 - Visualisation', tags: ['Viz', 'Plotly'] },
  { id: 3, title: 'Projet 3 - NLP', tags: ['NLP', 'Transformer'] },
  { id: 4, title: 'Projet 4 - Time Series', tags: ['TimeSeries', 'Forecast'] }
]

export default function Projects() {
  return (
    <section>
      <h2>Projets</h2>
      <p>Voici quelques travaux sélectionnés (placeholders — on remplira ensemble).</p>
      <div className="grid">
        {sampleProjects.map(p => (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>Tags: {p.tags.join(', ')}</p>
            <p>Résumé court du projet — challenge, rôle, résultat.</p>
            <div className="card-actions">
              <a href="#/">Détails</a>
              <a href="#/">Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
