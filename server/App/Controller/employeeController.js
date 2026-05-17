const User = require("../Model/UserModel");
const {populate } = require("dotenv");

const getEmployees = async(req ,res)=>{
    try{
        let role = req.user.role;
        if(role!=admin){
            res.status(400).json({
                message:"Access Denied"
            });
        }
    }
    catch(error){
        console.log(error.message);
    }
}