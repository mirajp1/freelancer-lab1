var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projects');

router.get('/:id', projectsController.retrieve);
router.post('/', projectsController.create);
router.get('/all/bidded', projectsController.retrieveAllBidded);
router.get('/all/created', projectsController.retrieveAllCreated);
router.get('/all/open', projectsController.retrieveAll);

module.exports = router;
