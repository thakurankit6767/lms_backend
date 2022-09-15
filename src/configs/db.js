const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://ankit:ankit12345@cluster0.pr05k.mongodb.net/lms")
}

module.exports = connect