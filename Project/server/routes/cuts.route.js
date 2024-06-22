const express = require("express");
const cuts_router = express.Router();
const controller = require("../controllers/index");
// const blog_middleware = require("../middlewares/blog.post.middleware");
// const authenticateToken = require("../middlewares/authenticate_token");

cuts_router.get("/api/cuts/:id", controller.cuts.getOne);
cuts_router.delete("/api/cuts/:id", controller.cuts.delete);
cuts_router.get("/api/cuts", controller.cuts.getAll);
cuts_router.patch("/api/cuts/:id", controller.cuts.patch);
cuts_router.post("/api/cuts",  controller.cuts.post);

module.exports = cuts_router;