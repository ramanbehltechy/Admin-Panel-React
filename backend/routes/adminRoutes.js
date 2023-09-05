const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');

// Define the route for registering an admin
router.post('/register', AdminController.registerAdmin);
router.post('/login',AdminController.loginAdmin)
module.exports = router;
