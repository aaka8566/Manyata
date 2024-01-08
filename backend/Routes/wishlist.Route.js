const express=require("express");
const { productModel } =require("../modules/product.Module");
const {userModel}=require("../modules/user.Module");
const wishlistRouter=express.Router();



wishlistRouter.get("/get",async(req,res)=>{
    try {
        const userswishlist=await userModel.findOne({_id:req.body.authorid}).populate('products').exec();
        res.status(200).send(userswishlist.cart);
    } catch (error) {
        console.log(error);
    }
});
wishlistRouter.get("/post",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.wishlist.push(req.body.productid);
        await usertoadd.save();
        res.status(200).send("added to cart successfully");
    } catch (error) {
        console.log("not added to cart successfully");
    }
});
wishlistRouter.get("/delete",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.wishlist.pull(req.body.productid);
        await usertoadd.save();
        res.status(200).send("deleted to cart successfully");
    } catch (error) {
        console.log("not deleted to cart successfully");
    }
});
module.exports={wishlistRouter};