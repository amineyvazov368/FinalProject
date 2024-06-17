const mongoose = require("mongoose");

const BlogSchema= new mongoose.Schema({
    title:String,
    description:String,
    src:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    likes: { type: Array, default: [] },
    comments: { type: Array, default: [] },
})

module.exports = BlogSchema;