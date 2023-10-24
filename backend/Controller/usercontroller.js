const videodata=require("../Videodata/Videodata")
const mockdata=require("../Mocktest/Mock")
const project=require("../Project data/project")

const videoapi=(req,res)=>{
    res.status(200).send({data:videodata})
}
const mockapi=(req,res)=>{
    res.status(200).send({mockdata})
}
const projectapi=(req,res)=>{
    res.status(200).send({data:project})
}

module.exports={videoapi,mockapi,projectapi}