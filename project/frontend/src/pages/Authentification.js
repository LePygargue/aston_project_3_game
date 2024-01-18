// /frontend/src/features/authentication/index.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const AuthenticationPage = () => {
  return (
    <div>
      <h1>Page d'Authentification</h1>
      <nav>
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AuthenticationPage;
