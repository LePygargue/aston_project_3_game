// backend/routes/users.js
const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const result = await db.query('SELECT * FROM users WHERE user_username = $1', [username]);
  
      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const user = result.rows[0];
  
      if (password !== user.user_password) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Continuez avec le processus d'authentification
      // ...
  
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error during login', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
