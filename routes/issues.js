var express = require('express');
var router = express.Router();


const issuesController = require('../controllers/issue_controller');

router.get('/issue-page',issuesController.issues);


module.exports = router;