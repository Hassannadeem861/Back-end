<<<<<<< HEAD
const authController = require("../controllers/register.controller");
const authMiddleware = require("../middlewares/authMiddleware");
=======
const  authController  = require("../controllers/register.controller");
const  authMiddleware  = require("../middleware/authMiddleware");
>>>>>>> 0340d90a093d47b639ef00eb6dbb4f8d1499a20a
const router = require("express").Router();


// Create a new registers
router.post("/register", authController.register);
router.post("/login", authController.login);

<<<<<<< HEAD
router.get("/user", authMiddleware, authController.userLogic);
=======

router.get("/user", authMiddleware, authController.user);
>>>>>>> 0340d90a093d47b639ef00eb6dbb4f8d1499a20a

module.exports = router