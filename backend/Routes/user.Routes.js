const express=require("express");
const { userModel } = require("../modules/user.Module");
const userRouter=express.Router();
const {auth}=require("../middlewares/auth");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


userRouter.post("/register",auth,(req,res)=>{
    try{
       
        bcrypt.hash(req.body.password, 5, async function(err, hash) {
            // Store hash in your password DB.
            if(err){return res.status(200).json(err);}
           req.body.password = hash;
           const user=await userModel(req.body);
           await user.save();
           return res.status(200).json("new user added successfully")
        });
    }
    catch(err){
        res.json(err);
    }
    
})


userRouter.post("/login",async(req,res)=>{
try{
    
const user=await userModel.findOne({"email":req.body.email});

if(user){

    bcrypt.compare(req.body.password, user.password, function(err, result) {
        // result == true
        if(err){return res.json(err);}
if(result){
const token=jwt.sign({ foo: 'bar' }, 'masai');
console.log(token);
return res.status(200).json({"token":token});
}
else{
    return res.status(200).json("wrong password");
}
    });
}
else{
    return res.status(200).json(" no user found");
}

    }
    catch(err){
        res.json(err);
    }
    
})
module.exports={userRouter};
