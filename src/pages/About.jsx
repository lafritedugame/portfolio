import React from 'react'

export default function About() {
  return (
    <section>
      <h2>À propos</h2>
      
      <div className="about-container">
        <div className="about-photo">
          <img 
            src="/photo-profile.png" 
            alt="Acsel Parsy - Data Scientist"
            className="profile-picture"
          />
        </div>
        
        <div className="about-content">
          <p>Résumé professionnel, formation et compétences.</p>
          <h3>Compétences techniques</h3>
          <ul>
            <li>Python, pandas, NumPy</li>
            <li>scikit-learn, PyTorch</li>
            <li>Visualisation: Plotly, Matplotlib</li>
            <li>SQL, data cleaning, feature engineering</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
