const mongoose = require("mongoose");

const MessageSchema= new mongoose.Schema({
    name:String,
    phone:String,
    time:String,
    barber:String
        
    
   
})

module.exports = MessageSchema;