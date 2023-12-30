const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
rating:Number,
rating_Count:String,
image:String,
brand:String,
description:String,
size:String,
discountedPrice:Number,
originalPrice:Number,
discount:Number,
itemType:String,
id:Number,
gender:String,
title:String,
});
const productModel=mongoose.model("products",productSchema);
module.exports={productModel};