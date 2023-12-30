const auth=(req,res,next)=>{
const {email,name,password,username}=req.body;
console.log(email,name,password,username);
if(!email||!name||!password||!username){
    return res.status(200).json("few fields are missing");
}

    next();

}
module.exports={auth};