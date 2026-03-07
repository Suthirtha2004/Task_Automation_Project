let mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    message : {
        type: String,
        required : true
    }
});

const ChatModel = mongoose.model("ChatTable",chatSchema);
module.exports = ChatModel;