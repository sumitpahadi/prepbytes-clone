const express=require("express")
const cors=require("cors")
const dotenv = require("dotenv");
const connectDB=require("./Mongoose/mongoose")
const routes=require("./Routing/Routers")
const app=express()
const port=4000
dotenv.config();

app.use(cors(
    {
        origin:"*",
    }
))
app.use(express.json());
app.use("/",routes)



const startConnection = async () => {
    try {
      await connectDB(process.env.mongo_url);
      app.listen(port, () => {
        console.log("Server is Runing on" + port);
      });
    } catch (err) {
      console.log(`Database is showing Error`);
    }
  };
  
  startConnection();
