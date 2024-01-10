const express=require("express");
const { productModel } =require("../modules/product.Module");
const {userModel}=require("../modules/user.Module");
const ordersPlacedRouter=express.Router();
const {log}=require("../middlewares/log");


ordersPlacedRouter.get("/get/:id",async(req,res)=>{
    try {
        const userswishlist=await userModel.findOne({_id:req.params.id}).populate("ordersPlaced").exec();
        res.status(200).send(userswishlist);
    } catch (error) {
        console.log(error);
    }
});

ordersPlacedRouter.post("/post",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.wishlist.push(req.body.productid);
        await usertoadd.save();
        res.status(200).send("added to ordersPlaced successfully");
    } catch (error) {
        console.log("not added to ordersPlaced successfully");
    }
});
ordersPlacedRouter.delete("/delete",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.query.authorid});
        console.log(req.query,usertoadd)
        usertoadd.wishlist.pull(req.query.productid);
        await usertoadd.save();
        res.status(200).send("deleted to ordersPlaced successfully");
    } catch (error) {
        console.log("not deleted to ordersPlaced successfully");
    }
});
module.exports={ordersPlacedRouter};