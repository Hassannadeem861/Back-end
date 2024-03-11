const express = require('express');
const adminRouter = require('../controllers/admin-controller');
// const AdminAuthMiddleWare = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/users').get(adminRouter.getAllUsers)
router.route('/contacts').get(adminRouter.getAllContacts)
// Retrieve a single admin with id
router.get("/:id", adminRouter.getSingleUser);

module.exports = router
