const mongoose = require("mongoose");

const TeamsSchema= new mongoose.Schema({
    title:String,
    description:String,
    src:String,
   
})

module.exports = TeamsSchema;