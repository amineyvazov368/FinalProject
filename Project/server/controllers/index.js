const blog_controller = require('./blog.controller');
const user_controller = require('./user.controller');

const controller = {
    blog: blog_controller,
    user: user_controller
};

module.exports = controller;