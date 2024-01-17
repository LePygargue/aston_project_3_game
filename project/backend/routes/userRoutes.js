// /backend/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getAllUsers', userController.getAllUsers);
router.get('/getAllAdmins', userController.getAllAdmins);
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

module.exports = router;

/**
 * @swagger
 * /getAllUser:
 *   get:
 *     summary: Récupérer la liste des utilisateurs
 *     description: Endpoint pour récupérer tous les utilisateurs
 *     responses:
 *       200:
 *         description: Succès - Renvoie la liste des utilisateurs
 *       500:
 *         description: Erreur du serveur
 * 
 */
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Récupérer la liste des utilisateurs
 *     description: Endpoint pour récupérer tous les utilisateurs
 *     responses:
 *       200:
 *         description: Succès - Renvoie la liste des utilisateurs
 *       500:
 *         description: Erreur du serveur
 * 
 */
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Récupérer la liste des utilisateurs
 *     description: Endpoint pour récupérer tous les utilisateurs
 *     responses:
 *       200:
 *         description: Succès - Renvoie la liste des utilisateurs
 *       500:
 *         description: Erreur du serveur
 * 
 */
