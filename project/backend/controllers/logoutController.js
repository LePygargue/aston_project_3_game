const db = require("../config/db");

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken
    const { jwt: refreshToken } = req.cookies;
    if (!refreshToken) return res.sendStatus(204); // Send No Content status

    // is refreshToken in db
    try {
        const result = await db.query(
            "SELECT user_id FROM users WHERE user_jwt_token = $1",
            [refreshToken]
        );

        if (result.rows.length === 0) {
            res.clearCookie("jwt", { httpOnly: true });
            return res.sendStatus(204);
        }

        // Delete refreshToken in db
        const user = result.rows[0];
        await db.query(
            "UPDATE users SET user_jwt_token = NULL WHERE user_id = $1",
            [user.user_id]
        );

        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
        }); // Clear the refreshToken cookie
        return res.sendStatus(204); // Send No Content status
    } catch (error) {
        console.error("Error during logout", error);
        res.sendStatus(500); // Internal Server Error
    }
};

module.exports = { handleLogout };
