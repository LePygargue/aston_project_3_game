const verifyIsAdmin = async (req, res, next) => {
    // Assurez-vous que l'utilisateur est identifié et que req.user.UserInfo est défini
    if (!req.user || !req.user.UserInfo) return res.sendStatus(401);

    try {
        const { roles } = req.user.UserInfo;

        if (!roles) {
            // L'utilisateur n'a pas de rôles définis
            console.log("Roles not defined for user.");
            return res.sendStatus(401);
        }

        // Vérifiez si l'utilisateur est administrateur
        if (!roles) {
            console.log("utilisateur non autorisé ...");
            return res.sendStatus(403); // 403 Forbidden est plus approprié ici
        }

        // L'utilisateur est administrateur, passez au middleware/route suivant
        next();
    } catch (error) {
        console.error("Error in verifyIsAdmin middleware:", error);
        res.sendStatus(500); // Erreur serveur
    }
};

module.exports = verifyIsAdmin;
