const express=require("express");
const app=express();
const {connection}=require("./db");
const cors=require("cors");
const {userRouter}=require("./Routes/user.Routes");
const {productRouter}=require("./Routes/product.Route.js");
require("dotenv").config();


app.use(cors());
app.use(express.json());



app.use("/users",userRouter);
app.use("/products",productRouter);

app.get("/",(req,res)=>{
    res.send("hello");
})



app.listen(process.env.PORT,async()=>{
try{
    await connection;
    console.log("server is running");
}
catch(err){
    console.log(err);
}
})