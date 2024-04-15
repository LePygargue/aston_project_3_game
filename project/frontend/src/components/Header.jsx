// /frontend/src/layouts/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Importez les styles

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__logo">
        <a href="/">
          <img src="logo.png" />
        </a>
      </div>
      <div className="header__menu">
        <nav>
          <ul>
            <li>
              <Link to="/#home">Accueil</Link>
            </li>
            <li>
              <Link to="/#story">Histoire</Link>
            </li>
            <li>
              <Link to="/#wiki">Wiki</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__authButton">
        <a
          className="header__authButton--style"
          href="authentication/login"
          role="button"
        >
          Se connecter / S'inscrire
        </a>
      </div>
    </header>
  );
};

export default Header;
