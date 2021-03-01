let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let app = express();


// connect to schema

let User = require('../models/user');

// get route 

router.get('/', (req, res, next) => {
    User.find((err, userList) => {
        if (err) {
            return console.error(err);
        } else {
            // console.log(userList);
            res.render('contactlist', { title: 'contact list', UserList: userList });
        }
    });
});

/*get for update */
router.get('/update/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, userToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('update', { title: 'Update', user: userToEdit })
        }
    });
});

/*post for update */
router.post('/update/:id', (req, res, next) => {
    let id = req.params.id;
    let updatedUser = User({
        "_id": id,
        "username": req.body.username,
        "password": req.body.password,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email

    });
    User.updateOne({ _id: id }, updatedUser, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/user-list');
        }
    });
});

/*get for delete */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    User.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/user-list');
        }
    });
});

/*post for login */

module.exports = router;