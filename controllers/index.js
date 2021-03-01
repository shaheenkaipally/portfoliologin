let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('../views/about', { title: 'About' });
}

module.exports.displayProjectPage = (req, res, next) => {
    res.render('../views/project', { title: 'Project' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('../views/contact', { title: 'Contact' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('../views/services', { title: 'Services' });
}

module.exports.displayLoginPage = (req, res, next) => {
    res.render('../views/login', { title: 'Login' });
}