// backend/routes/users.js
const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

// Route pour créer un nouvel utilisateur
router.post('/register', async (req, res) => {
  const { username, password, email, firstName, lastName } = req.body;

  try {
    // Vérifiez si l'utilisateur existe déjà
    const userExists = await db.query('SELECT * FROM users WHERE user_username = $1', [username]);

    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'L\'utilisateur existe déjà' });
    }

    // Hachez le mot de passe avant de le stocker dans la base de données
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérez le nouvel utilisateur dans la base de données
    const result = await db.query(
      'INSERT INTO users (user_username, user_password, user_email, user_first_name, user_last_name) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [username, hashedPassword, email, firstName, lastName]
    );

    res.json({ message: 'Utilisateur créé avec succès', user: result.rows[0] });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query('SELECT * FROM users WHERE user_username = $1', [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const user = result.rows[0];

    const passwordMatch = await bcrypt.compare(password, user.user_password); 

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
