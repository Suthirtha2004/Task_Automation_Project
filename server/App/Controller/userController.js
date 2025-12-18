const User = require("../Model/UserModel")

const getMe = async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        if(!user){
            res.status(400).json({
                message:"Data not found",
            });
        }
        else{
            res.status(200).json({
                id : user.id,
                name : user.name,
                email : user.email,
                role : user.role
            });
        }
    }catch
    (error){
        res.status(401).json({
            message:"Unable to fetch user",
        })
        
    }
}

module.exports = {getMe};