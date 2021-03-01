/*
    index file
	Mohamed Shaheen Kaipally
	Student #: 301158774
    Date: 28-feb-2021
*/

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const app = express();


let User = require('../models/user');

let indexController = require('../controllers/index');


/*  home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

/*  about me page. */
router.get('/about', indexController.displayAboutPage);

/*  project page. */
router.get('/project', indexController.displayProjectPage);

/*  contact page. */
router.get('/contact', indexController.displayContactPage);

/*  service page. */
router.get('/services', indexController.displayServicesPage);

/*  login page. */
router.get('/login', indexController.displayLoginPage);

/*  contact list page. */
router.get('/contactlist', function(req, res, next) {
    res.render('contactlist', { title: 'Contact List' });
});


module.exports = router;