const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./src/routes/route");
const cors = require("cors");
const Razorpay =require("razorpay")


app.use(cors());
app.use(express.json({limit:"10mb"}))
mongoose
.connect(
  "mongodb+srv://shivamp2001:shivamp2001@mycluster.au9iv5p.mongodb.net/Amazon-clone")
  .then(() => console.log("Database connected Successfully"))
  .catch((err) => console.log(err));



app.use("/", route);
app.get("/getkey",(req,res)=>{
 return res.status(200).json({key:"rzp_test_WMbjrZqD73hUzs"})
})
app.listen(5000, () => console.log("Server running on Port 5000"));
