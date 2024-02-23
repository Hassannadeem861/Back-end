const contactController = require("../controllers/contact.controller.js");
const router = require("express").Router();


// Create a new registers
router.post("/contact", contactController);

module.exports = router