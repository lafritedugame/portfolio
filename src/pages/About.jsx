import React from 'react'

export default function About() {
  return (
    <section>
      <h2>À propos</h2>
      
      <div className="about-container">
        <div className="about-photo">
          <img 
            src={`${import.meta.env.BASE_URL}photo-profile.png`} 
            alt="Acsel Parsy"
            className="profile-picture"
          />
        </div>
        
        <div className="about-content">
          <p>Étudiant ingénieur en 4ème année à l'ESIEA, école de référence en informatique et numérique, spécialisé en cybersécurité. Passionné par la programmation, les réseaux et les défis technologiques, je cherche à mettre en pratique mes connaissances sur des projets stimulants et innovants. Curieux, adaptable et méthodique, j'aime résoudre des problèmes complexes en équipe.</p>
          <h3>Compétences techniques</h3>
          <ul>
            <li>Langages de programmation : Python, C, Flutter/Dart</li>
            <li>Bases de données : SQL, SQLite</li>
            <li>Réseaux et sécurité : notions fondamentales, Wireshark, bonnes pratiques de sécurité</li>
            <li>Outils et méthodologies : Git, agile, multithreading</li>
          </ul>
          <h3>Qualités personnelles</h3>
          <ul>
            <li>Curiosité et soif d'apprentissage constant</li>
            <li>Adaptabilité et résilience face aux défis techniques</li>
            <li>Rigueur méthodique et organisation</li>
            <li>Ouverture d'esprit et capacité de collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
