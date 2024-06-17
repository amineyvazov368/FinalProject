const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: Number,
    src:String,
    role: {
        type: String,
        enum: ["admin", "client"]
    },
    favorites: Array
})

module.exports = UserSchema;