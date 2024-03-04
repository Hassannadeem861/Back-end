const  authController  = require("../controllers/register.controller");
const  authMiddleware  = require("../middleware/authMiddleware");
const router = require("express").Router();


// Create a new registers
router.post("/register", authController.register);
router.post("/login", authController.login);


router.get("/user", authMiddleware, authController.user);

module.exports = router