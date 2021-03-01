let mongoose = require("mongoose");

//mdoel class
let userModel = new mongoose.Schema({
        username: String,
        password: String,
        name: String,
        number: String,
        email: String

    },

    {
        collection: "user"

    });

module.exports = mongoose.model('user', userModel);