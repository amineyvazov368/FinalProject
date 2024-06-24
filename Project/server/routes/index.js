const user_router = require('./user.route');
const blog_router = require('./blog.route');
const cuts_router = require('./cuts.route');
const teams_router = require('./teams.route');
const prices_router = require('./prices.route');

const router = {
    blog: blog_router,
    user: user_router,
    cuts: cuts_router,
    teams: teams_router,
    prices: prices_router
}

module.exports = router;