import React from 'react'

export default function CV() {
  return (
    <section>
      <h2>Curriculum Vitae</h2>
      <p>Version HTML extraite automatiquement du PDF — le fichier PDF est disponible au téléchargement.</p>

      <div style={{marginTop:12, marginBottom:18}}>
        <a className="button" href="/cv.pdf" target="_blank" rel="noreferrer">Télécharger le PDF</a>
      </div>

      <div style={{border:'1px solid #e6e9f2',background:'#fff',padding:18,borderRadius:8}}>
        <h3 style={{marginTop:0}}>Acsel PARSY</h3>
        <p style={{color:'#666'}}>Recherche de stage — Data Scientist</p>

        <h4>Contact</h4>
        <p>
          Téléphone: <strong>06.71.85.50.32</strong> • Email: <strong>parsy@et.esiea.fr</strong>
          <br />Adresse: 7 Rue de la Baignade, 94400 Vitry-sur-Seine
        </p>

        <h4>Résumé</h4>
        <p>
          Étudiant en cycle ingénieur à l'ESIEA, spécialité informatique et numérique, recherche un stage
          en data science. Expériences en pipelines Python, automatisation, bases de données et visualisation.
        </p>

        <h4>Compétences</h4>
        <p>
          Langages: Python, C, HTML, Flutter • Data: pandas, numpy, MySQL, sqlite • Visualisation: matplotlib, Excel
          • Outils: Git, Figma • Méthodologie: agile, travail en équipe
        </p>

        <h4>Langues</h4>
        <p>Anglais: courant (TOEIC 800/990) • Japonais: niveau débutant</p>

        <h4>Formation</h4>
        <ul>
          <li>ESIEA — École d’ingénieurs informatique (2022 – aujourd'hui). Classe internationale.</li>
          <li>Baccalauréat Général – Mention Bien, Lycée Jean Perrin (2022)</li>
          <li>Cursus international: SeoulTech (Corée du Sud), Dorset College Dublin (Irlande)</li>
        </ul>

        <h4>Expériences & projets</h4>
        <ul>
          <li>
            <strong>Automatisation des rendez‑vous techniciens</strong> — Développement d'un pipeline Python
            d'extraction et nettoyage via l'API Google Calendar, conception d'une base MySQL et rapports analytiques
            automatisés (matplotlib + Excel) pour le suivi opérationnel.
          </li>
          <li>
            <strong>Projet CAP – Application d'optimisation énergétique</strong> (Oct 2025 – Fév 2026) — Application
            mobile (Flutter) pour configurer le chauffage optimal, stockage local sécurisé (SQLite), API Django
            sécurisée (authentification par clés API).
          </li>
          <li>
            <strong>Concours ESIEA – Design Sprint</strong> (Janvier 2025) — Conception d'une interface web (Figma)
            pour intégrer l'IA dans les formations (prototype validé).
          </li>
        </ul>

        <h4>Informations complémentaires</h4>
        <p>Permis B (Février 2025). Méthodes: agile, GitLab, Jira.</p>
      </div>

      <p style={{marginTop:14,color:'#666'}}>Vérifie la mise en forme et dis‑moi si tu veux modifier des sections ou les formulations.</p>
    </section>
  )
}
