const user_router = require('./user.route');
const blog_router = require('./blog.route');
const cuts_router = require('./cuts.route');
const teams_router = require('./teams.route');
const prices_router = require('./prices.route');
const says_router= require('./says.route')
const message_router=require('./message.route')
const router = {
    blog: blog_router,
    user: user_router,
    cuts: cuts_router,
    teams: teams_router,
    prices: prices_router,
    says: says_router,
    message: message_router
}

module.exports = router;