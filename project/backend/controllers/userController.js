// /backend/src/controllers/userController.js

const db = require("../config/db");

const getAllUsers = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllAdmins = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM users WHERE user_is_admin = true"
        );
        res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateUser = async (req, res) => {
    const { username, password, email, firstName, lastName } = req.body;
};

const deleteUser = async (req, res) => {
    const { id } = req.body; // Supposons qu'on utilise un identifiant unique `id` pour supprimer un utilisateur

    try {
        const userExists = await db.query(
            "SELECT * FROM users WHERE user_id = $1",
            [id]
        );

        if (userExists.rows.length === 0) {
            return res
                .status(404)
                .json({ error: "L'utilisateur n'existe pas" });
        }

        await db.query("DELETE FROM users WHERE user_id = $1", [id]);

        res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getUser = async (req, res) => {
    console.log("TETS");
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "L'ID fourni est invalide." });
    }

    try {
        const result = await db.query(
            "SELECT * FROM users WHERE user_id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res
                .status(404)
                .json({ error: "L'utilisateur n'existe pas" });
        }

        const user = result.rows[0];
        // Pour des raisons de sécurité, vous pourriez vouloir exclure certains champs comme le mot de passe
        const { user_password, ...userWithoutPassword } = user;

        res.json(userWithoutPassword);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getAllUsers,
    getAllAdmins,
    updateUser,
    deleteUser,
    getUser,
};
