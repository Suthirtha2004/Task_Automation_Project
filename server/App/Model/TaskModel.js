const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdBy : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
    },
    assignedTo : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true
    },
    status :{
        type : String,
        enum : ["pending","in-progress","completed"],
        default : "pending"
    },
    priority : {
        type : String,
        enum : ["low","medium","high"],
        deafult : "low"
    },
    deadline : Date
},{timestamps : true});

const TaskModel = mongoose.model("TaskTable",taskSchema);
module.exports = TaskModel;
