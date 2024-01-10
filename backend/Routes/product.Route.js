const express=require("express");
const { productModel } =require("../modules/product.Module");
const {userModel}=require("../modules/user.Module");
const productRouter=express.Router();

productRouter.get("/getproddummy",async(req,res)=>{
    const products=await productModel.find();
    res.status(200).json(products);

});
productRouter.get("/getprod",async(req,res)=>{
    let queryfetch={};let page=1;
    req.query.page?page=Number(req.query.page):null;
// search
if(req.query.q&&!req.query.searchtype){
    res.status(200).json("please provide searchtype");
}
else if(!req.query.q&&req.query.searchtype){
    res.status(200).json("please provide searchkeywords");
}
else if(req.query.q&&req.query.searchtype){
queryfetch[req.query.searchtype]=req.query.q;
}
// search



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
if(req.query.discountedPrice&&typeof(req.query.discountedPrice)==="object"){
    if(typeof(req.query.discountedPrice)==="object"){
        req.query.discountedPrice.sort();
        req.query.discountedPrice?queryfetch.discountedPrice={$gte:Number(req.query.discountedPrice[0]),$lte:Number(req.query.discountedPrice[req.query.discountedPrice.length-1])}:null;
    }
}
//price

//discount
req.query.discount?queryfetch.discount={$gte:Number(req.query.discount)}:null;
//discount

console.log(queryfetch);
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


productRouter.get("/wislhlist",async(req,res)=>{
    try {
        const userswishlist=await userModel.findOne({_id:req.body.authorid}).populate('products').exec();
        res.status(200).send(userswishlist.cart);
    } catch (error) {
        console.log(error);
    }
});
productRouter.get("/post",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.wishlist.push(req.body.productid);
        await usertoadd.save();
        res.status(200).send("added to cart successfully");
    } catch (error) {
        console.log("not added to cart successfully");
    }
});
productRouter.get("/delete",async(req,res)=>{
    try {
        const usertoadd=await userModel.findOne({_id:req.body.authorid});
        usertoadd.wishlist.pull(req.body.productid);
        await usertoadd.save();
        res.status(200).send("deleted to cart successfully");
    } catch (error) {
        console.log("not deleted to cart successfully");
    }
});


module.exports={productRouter};