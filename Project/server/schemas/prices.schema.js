const mongoose = require("mongoose");

const PricesSchema= new mongoose.Schema({
    src:String,
    services:String,
    price:Number
   
})

module.exports = PricesSchema;