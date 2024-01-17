// backend/db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'projet_3',
  password: 'MaC12pC19Mt992019*',
  port: 5432,
});

module.exports = pool;
