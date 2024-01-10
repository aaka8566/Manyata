const express=require("express");
const { productModel } =require("../modules/product.Module");
const {userModel}=require("../modules/user.Module");
const cartRouter=express.Router();
const {log}=require("../middlewares/log");


cartRouter.get("/get/:id",async(req,res)=>{
    try {
        //console.log(req.params.id);
        const userscart=await userModel.findOne({_id:req.params.id}).populate("cart").exec();
      //  console.log(userscart);
        res.status(200).send(userscart);
    } catch (error) {
        console.log(error);
    }
});

cartRouter.post("/post",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.cart.push(req.body.productid);
        await usertoadd.save();
        res.status(200).send("added to cart successfully");
    } catch (error) {
        console.log("not added to cart successfully");
    }
});
cartRouter.delete("/delete",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.cart.pull(req.body.productid);
        await usertoadd.save();
        res.status(200).send("deleted to cart successfully");
    } catch (error) {
        console.log("not deleted to cart successfully");
    }
});
module.exports={cartRouter};