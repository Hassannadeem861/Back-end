const authController = require("../controllers/register.controller");
// const authMiddleware = require("../middlewares/authMiddleware");
const router = require("express").Router();


// Create a new registers
router.post("/register", authController.register);
router.post("/login", authController.login);

// router.get("/user", verifyToken, authController.userLogic);
// router.route('/user').get(authMiddleware, authController.userLogic)

module.exports = router