const blog_controller = require('./blog.controller');
const user_controller = require('./user.controller');
const  cuts_controller= require("./cuts.controller");
const teams_controller = require('./teams.controller');
const prices_controller = require('./prices.controller');
const says_controller = require('./says.controller');
const controller = {
    blog: blog_controller,
    user: user_controller,
    cuts:cuts_controller,
    teams:teams_controller,
    prices:prices_controller,
    says:says_controller
};

module.exports = controller;