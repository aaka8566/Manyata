const mongoose=require("mongoose");
const {Schema}=mongoose;
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    password:String,
    email:String,
    wishlist:[{type:Schema.Types.ObjectId,ref:"products"}],
    cart:[{type:Schema.Types.ObjectId,ref:"products"}],
    ordersplaced:[{type:Schema.Types.ObjectId,ref:"products"}]
});

const userModel=mongoose.model("usersdata",userSchema);
module.exports={userModel};
