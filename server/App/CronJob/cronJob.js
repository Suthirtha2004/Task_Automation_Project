const cron = require('node-cron');
const TaskModel = require('../Model/TaskModel')

const cronStatusChecker = async(req,res)=>{
    try{
        const Taskdata = await TaskModel.find();
        if(!(Taskdata) || Taskdata.length === 0){
            console.log("Tasks not found");
        }
        if(Taskdata){
            Taskdata.forEach(tasks => {
                console.log(`${tasks._id}`,tasks.status);     
            }); 
        }else{
            console.log("Task Not found");
        }
    }catch(error){
        console.log("Error is",error.message);
    }
}

module.exports = {cronStatusChecker};