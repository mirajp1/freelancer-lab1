var express = require('express');
var router = express.Router();
var profile = require('./profile');
// router.get('/', function(req, res, next) {
//     res.send("dsad");
// });

//profile
router.use('/profile',profile);

module.exports = router;