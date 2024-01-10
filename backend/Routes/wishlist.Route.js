const express=require("express");
const { productModel } =require("../modules/product.Module");
const {userModel}=require("../modules/user.Module");
const wishlistRouter=express.Router();
const {log}=require("../middlewares/log");


wishlistRouter.get("/get/:id",async(req,res)=>{
    try {
        const userswishlist=await userModel.findOne({_id:req.params.id}).populate("wishlist").exec();
        res.status(200).send(userswishlist);
    } catch (error) {
        console.log(error);
    }
});

wishlistRouter.post("/post",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.wishlist.push(req.body.productid);
        await usertoadd.save();
        res.status(200).send("added to wishlist successfully");
    } catch (error) {
        console.log("not added to wishlist successfully");
    }
});
wishlistRouter.delete("/delete",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.query.authorid});
        console.log(req.query,usertoadd)
        usertoadd.wishlist.pull(req.query.productid);
        await usertoadd.save();
        res.status(200).send("deleted to wishlist successfully");
    } catch (error) {
        console.log("not deleted to wishlist successfully");
    }
});
module.exports={wishlistRouter};