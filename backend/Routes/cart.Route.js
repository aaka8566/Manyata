const express=require("express");
const { productModel } =require("../modules/product.Module");
const {userModel}=require("../modules/user.Module");
const cartRouter=express.Router();
const {log}=require("../middlewares/log");


cartRouter.get("/get/:id",async(req,res)=>{
    try {
        const userswishlist=await userModel.findOne({_id:req.params.id}).populate("cart").exec();
        res.status(200).send(userswishlist);
    } catch (error) {
        console.log(error);
    }
});

cartRouter.post("/post",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.wishlist.push(req.body.productid);
        await usertoadd.save();
        res.status(200).send("added to cart successfully");
    } catch (error) {
        console.log("not added to cart successfully");
    }
});
cartRouter.delete("/delete",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.query.authorid});
        console.log(req.query,usertoadd)
        usertoadd.wishlist.pull(req.query.productid);
        await usertoadd.save();
        res.status(200).send("deleted to cart successfully");
    } catch (error) {
        console.log("not deleted to cart successfully");
    }
});
module.exports={cartRouter};