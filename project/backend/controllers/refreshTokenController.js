const db = require("../config/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
    const { jwt: refreshToken } = req.cookies;
    if (!refreshToken) return res.sendStatus(401);

    try {
        const result = await db.query(
            "SELECT * FROM users WHERE user_jwt_token = $1",
            [refreshToken]
        );

        if (result.rows.length === 0) return res.sendStatus(403); // Forbidden

        const user = result.rows[0];

        // evaluate jwt
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err || user.user_username !== decoded.username)
                    return res.sendStatus(403);

                // generate new accessToken

                const accessToken = jwt.sign(
                    {
                        UserInfo: {
                            username: decoded.username,
                            roles: user.user_is_admin,
                        },
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: "5m" }
                );

                res.json({ accessToken });
            }
        );
    } catch (error) {
        console.error("Error during token refresh", error);
        res.sendStatus(500); // Internal Server Error
    }
};

module.exports = { handleRefreshToken };
