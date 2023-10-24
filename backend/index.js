const express=require("express")
const cors=require("cors")
const routes=require("./Routing/Routers")
const app=express()
app.use(cors(
    {
        origin:"*",
    }
))
app.use("/",routes)

const port=4000
app.listen(port ,()=>{
    console.log("server is running on port number "+port)
})