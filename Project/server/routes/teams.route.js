const express = require("express");
const teams_router = express.Router();
const controller = require("../controllers/index");
// const blog_middleware = require("../middlewares/blog.post.middleware");
// const authenticateToken = require("../middlewares/authenticate_token");

teams_router.get("/api/teams/:id", controller.teams.getOne);
teams_router.delete("/api/teams/:id", controller.teams.delete);
teams_router.get("/api/teams", controller.teams.getAll);
teams_router.patch("/api/teams/:id", controller.teams.patch);
teams_router.post("/api/teams",  controller.teams.post);

module.exports = teams_router;