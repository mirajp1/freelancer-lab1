var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projects');

router.get('/:id', projectsController.retrieve);
router.post('/', projectsController.create);

module.exports = router;
