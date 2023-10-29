const routes=require("express").Router()
const { register, login,  dashboard} = require("../Controller/Controller")
const {videoapi,mockapi,projectapi}=require("../Controller/usercontroller")
const userauth = require("../Middleware/middleware");
routes.get("/video",videoapi)
routes.get("/mock",mockapi)


routes.post("/register", register);
routes.post("/login", login);
routes.get("/dashboard", userauth, dashboard);
routes.get("/project",projectapi)
module.exports=routes