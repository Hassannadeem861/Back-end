const  authController  = require("../controllers/register.controller");
const router = require("express").Router();


// Create a new registers
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router