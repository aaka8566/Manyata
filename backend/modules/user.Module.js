const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    password:String,
    email:String
});
const userModel=mongoose.model("usersdata",userSchema);
module.exports={userModel};