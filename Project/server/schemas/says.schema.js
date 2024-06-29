const mongoose = require("mongoose");

const SaysSchema= new mongoose.Schema({
    name:String,
    about:String,
    src:String,
   
})

module.exports = SaysSchema;