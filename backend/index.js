const express=require("express")
const cors=require("cors")
const dotenv = require("dotenv");
const stripe = require("stripe")(
  "sk_test_51O1PDfSDn9Jvh8C8c05F4GOTOpQcBCLiHTI8EZ4jjzcbCPGS6uB9fMLU9oId1JesozvzMo8Hh6pU5rdHtk7CdaBg00moBTyJUP"
);
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

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(products)
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount:product.price * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://prepbytes-clone.vercel.app/dashboard",
    cancel_url: "https://prepbytes-clone.vercel.app/cancel",

  });
  res.json({id:session.id})
});
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
