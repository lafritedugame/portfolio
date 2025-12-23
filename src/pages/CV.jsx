import React from 'react'

export default function CV() {
  return (
    <section>
      <h2>Curriculum Vitae</h2>
      <p>Version HTML extraite automatiquement du PDF — le fichier PDF est disponible au téléchargement.</p>

      <div style={{marginTop:12, marginBottom:18}}>
        <a className="button" href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noreferrer">Télécharger le PDF</a>
      </div>

      <div style={{border:'1px solid rgba(0,212,255,0.15)',background:'rgba(13,24,33,0.6)',padding:24,borderRadius:16,backdropFilter:'blur(8px)'}}>
        <h3 style={{marginTop:0,color:'var(--text)',fontFamily:'Playfair Display,serif'}}>Acsel PARSY</h3>
        <p style={{color:'var(--accent-bright)',fontWeight:600,fontSize:'1.05em'}}>Recherche de stage — Data Scientist</p>

        <h4 style={{color:'var(--text)',borderBottom:'2px solid var(--accent)',paddingBottom:4,marginTop:20}}>Contact</h4>
        <p style={{color:'var(--muted)'}}>
          Email: <strong style={{color:'var(--text)'}}>parsy@et.esiea.fr</strong>
          <br />Adresse: Vitry-sur-Seine, France
        </p>

        <h4 style={{color:'var(--text)',borderBottom:'2px solid var(--accent)',paddingBottom:4,marginTop:20}}>Résumé</h4>
        <p style={{color:'var(--muted)'}}>
          Étudiant en cycle ingénieur à l'ESIEA, spécialité informatique et numérique, recherche un stage
          en data science. Expériences en pipelines Python, automatisation, bases de données et visualisation.
        </p>

        <h4 style={{color:'var(--text)',borderBottom:'2px solid var(--accent)',paddingBottom:4,marginTop:20}}>Compétences</h4>
        <p style={{color:'var(--muted)'}}>
          Langages: <strong style={{color:'var(--text)'}}>Python, C, HTML, Flutter</strong> • Data: <strong style={{color:'var(--text)'}}>pandas, numpy, MySQL, sqlite</strong> • Visualisation: <strong style={{color:'var(--text)'}}>matplotlib, Excel</strong>
          • Outils: Git, Figma • Méthodologie: agile, travail en équipe
        </p>

        <h4 style={{color:'var(--text)',borderBottom:'2px solid var(--accent)',paddingBottom:4,marginTop:20}}>Langues</h4>
        <p style={{color:'var(--muted)'}}>Anglais: courant (TOEIC 800/990) • Japonais: niveau débutant</p>

        <h4 style={{color:'var(--text)',borderBottom:'2px solid var(--accent)',paddingBottom:4,marginTop:20}}>Formation</h4>
        <ul style={{color:'var(--muted)'}}>
          <li style={{marginBottom:8}}><strong style={{color:'var(--text)'}}>ESIEA</strong> — École d'ingénieurs informatique (2022 – aujourd'hui). Classe internationale.</li>
          <li style={{marginBottom:8}}><strong style={{color:'var(--text)'}}>Baccalauréat Général</strong> – Mention Bien, Lycée Jean Perrin (2022)</li>
          <li>Cursus international: SeoulTech (Corée du Sud), Dorset College Dublin (Irlande)</li>
        </ul>

        <h4 style={{color:'var(--text)',borderBottom:'2px solid var(--accent)',paddingBottom:4,marginTop:20}}>Expériences & projets</h4>
        <ul style={{color:'var(--muted)'}}>
          <li style={{marginBottom:12}}>
            <strong style={{color:'var(--accent-bright)'}}>Automatisation des rendez‑vous techniciens</strong> — Développement d'un pipeline Python
            d'extraction et nettoyage via l'API Google Calendar, conception d'une base MySQL et rapports analytiques
            automatisés (matplotlib + Excel) pour le suivi opérationnel.
          </li>
          <li style={{marginBottom:12}}>
            <strong style={{color:'var(--accent-bright)'}}>Projet CAP – Application d'optimisation énergétique</strong> (Oct 2025 – Fév 2026) — Application
            mobile (Flutter) pour configurer le chauffage optimal, stockage local sécurisé (SQLite), API Django
            sécurisée (authentification par clés API).
          </li>
          <li>
            <strong style={{color:'var(--accent-bright)'}}>Concours ESIEA – Design Sprint</strong> (Janvier 2025) — Conception d'une interface web (Figma)
            pour intégrer l'IA dans les formations (prototype validé).
          </li>
        </ul>

        <h4 style={{color:'var(--text)',borderBottom:'2px solid var(--accent)',paddingBottom:4,marginTop:20}}>Informations complémentaires</h4>
        <p style={{color:'var(--muted)'}}>Permis B (Février 2025). Méthodes: agile, GitLab, Jira.</p>
      </div>

      <p style={{marginTop:14,color:'var(--muted)',fontSize:'0.9em'}}>Vérifie la mise en forme et dis‑moi si tu veux modifier des sections ou les formulations.</p>
    </section>
  )
}
