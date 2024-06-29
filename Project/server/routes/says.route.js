const express = require("express");
const says_router = express.Router();
const controller = require("../controllers/index");
// const blog_middleware = require("../middlewares/blog.post.middleware");
// const authenticateToken = require("../middlewares/authenticate_token");

says_router.get("/api/says/:id", controller.says.getOne);
says_router.delete("/api/says/:id", controller.says.delete);
says_router.get("/api/says", controller.says.getAll);
says_router.patch("/api/says/:id", controller.says.patch);
says_router.post("/api/says",  controller.says.post);

module.exports = says_router;