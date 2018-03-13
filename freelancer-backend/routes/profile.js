var express = require('express');
var router = express.Router();
var profilesController = require('../controllers/profiles');

router.get('/:id', profilesController.retrieve);

module.exports = router;
