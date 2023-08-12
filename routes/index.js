const express = require('express');
const router = express.Router();

const homeController = require("../controllers/home_controller");

/* GET home page. */
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/projects',require('./projects'));
router.use('/issues',require('./issues'));



module.exports = router;