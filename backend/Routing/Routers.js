const routes=require("express").Router()
const {videoapi,mockapi,projectapi}=require("../Controller/usercontroller")
routes.get("/video",videoapi)
routes.get("/mock",mockapi)
routes.get("/project",projectapi)
module.exports=routes