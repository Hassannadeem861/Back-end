const registers = require("../controllers/register.controller");
const router = require("express").Router();


// Create a new registers
router.post("/register", registers);

module.exports = router