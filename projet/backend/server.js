// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importez le module cors
const usersRoute = require('./routes/users');
const db = require('./db');

const app = express();
const port = 3001;

app.use(cors()); // Utilisez le middleware cors

app.use(bodyParser.json());

// Utilisation des routes
app.use('/users', usersRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
