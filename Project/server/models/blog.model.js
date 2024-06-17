const mongoose = require("mongoose");
const BlogSchema = require('../schemas/blog.schema');

const BlogModel = mongoose.model("Blogs", BlogSchema);

module.exports = BlogModel;