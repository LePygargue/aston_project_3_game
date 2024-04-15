const bcrypt = require("bcrypt");
const db = require("../config/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res
                .status(400)
                .json({ message: "Username and password are required." });
        }

        const result = await db.query(
            "SELECT * FROM users WHERE user_username = $1",
            [username]
        );
        if (result.rows.length === 0) {
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        const user = result.rows[0];
        // evaluate password
        const passwordMatch = await bcrypt.compare(
            password,
            user.user_password
        );
        if (passwordMatch) {
            // create JWTs
            const roles = user.user_is_admin;
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        username: user.user_username,
                        roles: user.user_is_admin,
                    },
                },

                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "5m" }
            );
            const refreshToken = jwt.sign(
                { username: user.user_username },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: "1d" }
            );
            // saving refreshToken with current user
            await db.query(
                "UPDATE users SET user_jwt_token = $1 WHERE user_username = $2",
                [refreshToken, username]
            );
            res.cookie("jwt", refreshToken, {
                httpOnly: true,
                sameSite: "None",
                secure: true,
                maxAge: 24 * 60 * 60 * 1000,
            });
            res.json({ message: "Login successful", accessToken, roles });
        } else {
            res.status(401).json({ error: "Invalid username or password" });
        }
    } catch (error) {
        console.error("Error during login", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { handleLogin };
