/*
    users file
	Mohamed Shaheen Kaipally
	Student #: 301158774
    Date: 28-feb-2021
*/


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;