// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoute = require('./routes/users');
const db = require('./db');

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

app.use('/users', usersRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
