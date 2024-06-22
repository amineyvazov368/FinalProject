const blog_controller = require('./blog.controller');
const user_controller = require('./user.controller');
const  cuts_controller= require("./cuts.controller")
const controller = {
    blog: blog_controller,
    user: user_controller,
    cuts:cuts_controller
};

module.exports = controller;