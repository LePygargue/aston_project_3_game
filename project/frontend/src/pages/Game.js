// /src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Importez les styles

const HomeGame = () => {
  return (
    <div className="home-page">
      <h1>VOUS ETES ACTUELLEMENT DANS LE JEU</h1>
      <p>VOUS ETES ACTUELLEMENT DANS LE JEU!</p>

      <div className="game-preview">
        <h2>Aperçu du Jeu</h2>
        {/* Ajoutez des composants ou des images pour présenter votre jeu */}
      </div>

      <div className="cta-buttons">
        <Link to="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
        <Link to="/leaderboard" className="btn btn-secondary">
          Classement
        </Link>
      </div>
    </div>
  );
};

export default HomeGame;
