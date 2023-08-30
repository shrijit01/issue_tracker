var express = require('express');
var router = express.Router();
const passport = require('passport');

const issuesController = require('../controllers/issue_controller');

router.get('/issue-page',passport.checkAuthentication,issuesController.issues);

router.post('/create',passport.checkAuthentication,issuesController.create);


module.exports = router;