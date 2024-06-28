const express = require("express");
const user_router = express.Router();
const controller = require("../controllers/index");
const protect = require("../middlewares/auth.middleware");
// const upload = require("../middlewares/user.register.middleware");
// const authenticateToken = require("../middlewares/authenticate_token");

user_router.get("/", controller.user.getAll);
user_router.get('/getMe', protect, controller.user.getMe)
user_router.get("/:id", controller.user.getOne);
user_router.delete("/:id", controller.user.delete);
user_router.patch("/:id", controller.user.patch);
user_router.post("/login", controller.user.login);
user_router.post("/register", controller.user.register);
// user_router.get("/api/verify/:token", controller.user.verify);

module.exports = user_router;