var express = require('express');
var router = express.Router();
var profilesController = require('../controllers/profiles');
var profileUpload=require('../config/multerConfig').profileMulter;

router.get('/:id', profilesController.retrieve);
router.post('/image', profileUpload.single('image'),profilesController.uploadProfilePhoto);

module.exports = router;
