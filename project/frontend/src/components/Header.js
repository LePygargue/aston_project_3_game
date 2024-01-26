// /frontend/src/layouts/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importez les styles

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/authentication">Authentication</Link>
          </li>
          {/* Ajoutez d'autres liens de navigation selon vos besoins */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
