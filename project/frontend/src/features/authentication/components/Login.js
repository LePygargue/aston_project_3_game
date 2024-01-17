// frontend/src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Sending login request with data:', { username, password });
  
      const response = await api.post('/users/login', {
        username,
        password,
      });
  
      console.log('Login successful', response.data);
    } catch (error) {
      console.error('Error during login', error);
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Pas encore de compte ? <Link to="/authentication/register">Inscrivez-vous ici</Link>.
      </p>
    </div>
  );
};

export default Login;