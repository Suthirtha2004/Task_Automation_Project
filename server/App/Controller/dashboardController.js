const Task = require("../Model/TaskModel");
const User = require("../Model/UserModel")
const {populate} = require('dotenv')

// Dashboard Analytics 

const getDashboard = async(req,res)=>{
    try{
        let role = req.user.role;
        if(role!= admin){
            res.status(400).json({
                message:"Access Denied"
            });
        }else{
        const completedTasks = await Task.countDocuments({
            status: "completed"
        });

        const pendingTasks = await Task.countDocuments({
            status: "pending"
        });

        const progressTasks = await Task.countDocuments({
            status : "in-progress"
        });

        const highPriority = await Task.countDocuments({
            priority : "high"
        })

        if(completedTasks || pendingTasks || progressTasks || highPriority){
            res.status(201).json({
                completedTasks : completedTasks,
                pendingTasks : pendingTasks,
                progressTasks : progressTasks,
                highPriority : progressTasks
            });
        }else{
            res.status(401).json({
                message:"Internal Server Error"
            })
        }
        }
    }catch(error){
        console.log(error.message);
    }
}

module.exports = getDashboard;