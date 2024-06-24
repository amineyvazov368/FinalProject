const express = require("express");
const prices_router = express.Router();
const controller = require("../controllers/index");
// const blog_middleware = require("../middlewares/blog.post.middleware");
// const authenticateToken = require("../middlewares/authenticate_token");

prices_router.get("/api/prices/:id", controller.prices.getOne);
prices_router.delete("/api/prices/:id", controller.prices.delete);
prices_router.get("/api/prices", controller.prices.getAll);
prices_router.patch("/api/prices/:id", controller.prices.patch);
prices_router.post("/api/prices",  controller.prices.post);

module.exports = prices_router;