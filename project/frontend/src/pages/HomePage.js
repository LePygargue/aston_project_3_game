// /src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Importez les styles

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenue dans Mon Jeu</h1>
      <p>Explorez, jouez et amusez-vous!</p>

      <div className="game-preview">
        <h2>Aperçu du Jeu</h2>
        {/* Ajoutez des composants ou des images pour présenter votre jeu */}
      </div>

      <div className="cta-buttons">
        <Link to="/play" className="btn btn-primary">Jouer Maintenant</Link>
        <Link to="/leaderboard" className="btn btn-secondary">Classement</Link>
      </div>
    </div>
  );
};

export default HomePage;
