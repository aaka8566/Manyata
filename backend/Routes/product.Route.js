const express=require("express");
const { productModel } =require("../modules/product.Module");
const productRouter=express.Router();

productRouter.get("/getproddummy",async(req,res)=>{
    const products=await productModel.find();
    res.status(200).json(products);

});
productRouter.get("/getprod",async(req,res)=>{
    let queryfetch={};let page=1;
    req.query.page?page=Number(req.query.page):null;
    // req.query.gender?queryfetch.gender=req.query.gender:null;
    // req.query.itemType?queryfetch.itemType=req.query.itemType:null;
    // req.query.brand?queryfetch.brand=req.query.brand:null;


//itemType
if(req.query.itemType){
    // if(typeof(req.query.itemType)==="string"){
    //     req.query.rating?queryfetch.rating={$gte:Number(req.query.rating)}:null;
    // }
    // else
     if(typeof(req.query.itemType)==="object"){
        req.query.itemType?queryfetch.itemType=req.query.itemType:null;
    }
}
//itemType


//gender
if(req.query.gender){
    // if(typeof(req.query.gender)==="string"){
    //     req.query.rating?queryfetch.rating={$gte:Number(req.query.rating)}:null;
    // }
    // else
     if(typeof(req.query.gender)==="object"){
        req.query.gender?queryfetch.gender=req.query.gender:null;
    }
}
//gender


//brand
if(req.query.brand){
    // if(typeof(req.query.brand)==="string"){
    //     req.query.rating?queryfetch.rating={$gte:Number(req.query.rating)}:null;
    // }
    // else
     if(typeof(req.query.brand)==="object"){
        req.query.brand?queryfetch.brand=req.query.brand:null;
    }
}
//brand


//rating
if(req.query.rating){
    // if(typeof(req.query.rating)==="string"){
    //     req.query.rating?queryfetch.rating={$gte:Number(req.query.rating)}:null;
    // }
    // else
    if(typeof(req.query.rating)==="object"){
        req.query.rating.sort();
        req.query.rating?queryfetch.rating={$gte:Number(req.query.rating[0])}:null;
    }
}
//rating

//price
if(req.query.originalPrice&&typeof(req.query.originalPrice)==="object"){
    if(typeof(req.query.originalPrice)==="object"){
        req.query.originalPrice.sort();
        req.query.originalPrice?queryfetch.originalPrice={$gte:Number(req.query.originalPrice[0]),$lte:Number(req.query.originalPrice[req.query.originalPrice.length-1])}:null;
    }
}
//price

//discount
req.query.discount?queryfetch.discount={$gte:Number(req.query.discount)}:null;
//discount

console.log(req.query,typeof(req.query.brand));
    const products=await productModel.find(queryfetch).skip((Number(page)-1)*24).limit(24);
    //console.log(products);
    res.status(200).json(products);

});

productRouter.get("/getprod/:id",async(req,res)=>{
const prodid=req.params.id;
console.log(prodid);
    try{
        const product=await productModel.findById({"_id":prodid});
        console.log(product);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json("error in getting product");
    }
});
productRouter.post("/addprod",async(req,res)=>{
    try{
        const products=await productModel(req.body);
    await products.save();
    res.status(200).json("product added successfully");
    }
    catch(err){
        res.status(500).json("error in adding product");
    }
});
productRouter.delete("/deleteprod/:id",async(req,res)=>{
    try{
        const prodid=req.params.id;
        console.log(prodid);
        const products=await productModel.findByIdAndDelete(prodid);
        
        res.status(200).json({state:"product deleted successfully"});
    }
    catch(err){
        res.status(500).json({state:"error in deleting product"});
    }
});
productRouter.patch("/patchprod/:id",async(req,res)=>{
    try{
        const prodid=req.params.id;
        console.log(prodid);
        const products=await productModel.findByIdAndDelete(prodid,req.body);
        
        res.status(200).json({state:"product updated successfully"});
    }
    catch(err){
        res.status(500).json({state:"error in updated product"});
    }
});
module.exports={productRouter};