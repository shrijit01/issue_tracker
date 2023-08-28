const express = require('express');
const router = express.Router();
const passport = require('passport');

const projectsController = require('../controllers/project_controller');

// router.get('/show-project-page',projectsController.createProjectPage);
router.post('/create',passport.checkAuthentication,projectsController.create);
router.get('/project/:id',passport.checkAuthentication,projectsController.show);

module.exports = router;