let mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password : {
        type: String,
        required : true
    },
    role:{
        type : String,
        required : true,
        enum : ["admin","employee"]
    }
});

const UserModel = mongoose.model("UserTable",teamSchema);
module.exports =  UserModel;