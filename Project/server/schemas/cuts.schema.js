const mongoose = require("mongoose");

const CutsSchema= new mongoose.Schema({
    title:String,
    description:String,
    src:String,
   
})

module.exports = CutsSchema;