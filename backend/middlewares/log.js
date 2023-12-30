const jwt=require("jsonwebtoken");

const log=(req,res,next)=>{
if(req.headers.authorization){
const decoded=jwt.verify(req.headers.authorization, 'masai');
if(decoded){
    req.body.authorname=decoded.name;
    req.body.authorid=decoded._id;
    next();
}
else{
    res.status(200).json(err.message);
}
}

else{
    res.status(200).json("Please Login");
}
    
    }
    module.exports={log};