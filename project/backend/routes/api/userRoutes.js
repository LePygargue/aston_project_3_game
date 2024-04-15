// /backend/src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

const verifyIsAdmin = require("../../middleware/verifyIsAdmin");

router.get("/getAllUsers", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.get("/getAllAdmins", verifyIsAdmin, userController.getAllAdmins);
router.put("/update", verifyIsAdmin, userController.updateUser);
router.delete("/delete", verifyIsAdmin, userController.deleteUser);

module.exports = router;
