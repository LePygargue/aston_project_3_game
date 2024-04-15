const bcrypt = require("bcrypt");
const db = require("../config/db");

const handleNewUser = async (req, res) => {
    const { username, password, email, firstName, lastName } = req.body;

    try {
        const userExists = await db.query(
            "SELECT * FROM users WHERE user_username = $1",
            [username]
        );

        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: "L'utilisateur existe déjà" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await db.query(
            "INSERT INTO users (user_username, user_password, user_email, user_first_name, user_last_name) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [username, hashedPassword, email, firstName, lastName]
        );

        res.json({
            message: "Utilisateur créé avec succès",
            user: result.rows[0],
        });
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { handleNewUser };
