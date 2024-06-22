const user_router = require('./user.route');
const blog_router = require('./blog.route');
const cuts_router = require('./cuts.route');

const router = {
    blog: blog_router,
    user: user_router,
    cuts: cuts_router
}

module.exports = router;