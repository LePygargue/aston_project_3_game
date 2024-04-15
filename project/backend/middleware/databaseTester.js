const pool = require("../config/db");

// Middleware pour vérifier la connexion à la base de données
const databaseConnectionCheckMiddleware = (req, res, next) => {
  pool.connect((err, client, release) => {
    if (err) {
      console.error("Database connection error", err.stack);
      return res.status(500).send("Database connection error");
    }
    console.log("Database connection established");
    release();
    next();
  });
};

module.exports = databaseConnectionCheckMiddleware;
