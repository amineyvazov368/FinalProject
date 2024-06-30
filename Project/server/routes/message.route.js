const express = require("express");
const message_router = express.Router();
const controller = require("../controllers/index");
// const blog_middleware = require("../middlewares/blog.post.middleware");
// const authenticateToken = require("../middlewares/authenticate_token");

message_router.get("/api/message/:id", controller.message.getOne);
message_router.delete("/api/message/:id", controller.message.delete);
message_router.get("/api/message", controller.message.getAll);
message_router.patch("/api/message/:id", controller.message.patch);
message_router.post("/api/message",  controller.message.post);

module.exports = message_router;