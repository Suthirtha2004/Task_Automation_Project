const Task = require("../Model/TaskModel");
const User = require("../Model/UserModel")
const {populate} = require('dotenv')

// Dashboard Analytics 

const getAdminDashboard = async(req,res)=>{
    try{
        let role = req.user.role;
        if(role!= 'admin'){
            res.status(400).json({
                message:"Access Denied"
            });
        }else{
        const completedTasks = await Task.countDocuments({
            createdBy : req.user.id,
            status: "completed"
        });

        const pendingTasks = await Task.countDocuments({
            createdBy : req.user.id,
            status: "pending"
        });

        const progressTasks = await Task.countDocuments({
            createdBy : req.user.id,
            status : "in-progress"
        });

        const highPriority = await Task.countDocuments({
            createdBy : req.user.id,
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

const getUserDashboard = async(req,res)=>{
    try{
        const completedTasks = await Task.countDocuments({
            status : "completed"
        });

        const pendingTasks = await Task.countDocuments({
            status: "pending"
        });

        const progressTasks = await Task.countDocuments({
            status : "in-progress"
        });

        const highPriority = await Task.countDocuments({
            highPriority : "high"
        })
        if(completedTasks || pendingTasks || progressTasks || highPriority){
            res.status(201).json({
                completedTasks : completedTasks,
                pendingTasks : pendingTasks,
                progressTasks : progressTasks,
                highPriority : highPriority
            });
        }else{
            res.status(400).json({
                message : "Internal Server error"
            })
        }

    }catch(error){
        console.log(error.message);
    }
}

const getEmployees = async(req ,res)=>{
    try{
        let role = req.user.role;
        if(role!='admin'){
            res.status(400).json({
                message:"Access Denied"
            });
        }
        else{
            // const employees = await User.find({
            //     role: "employee"
            // });

            const assignedEmails = await Task.distinct(
                    "assignedTo",
                    {
                    createdBy: req.user.id
                    }
                );
            
            const employees = await User.find({
                email: { $in: assignedEmails },
                role: "employee"
            });

            const employeeData = [];
            for(const emp of employees){
                const totalTasks = await Task.countDocuments({
                    assignedTo : emp.email,
                    createdBy : req.user.id
                });

                const completedTasks = await Task.countDocuments({
                    assignedTo : emp.email,
                    createdBy : req.user.id,
                    status : "completed"
                });

                employeeData.push({
                name : emp.name,
                email : emp.email,
                totalTasks : totalTasks,
                completedTasks : completedTasks
              });
            }
            if(employeeData){
                res.status(201).json({
                    message : "Employee Data Fetched",
                    employeeData : employeeData
                })
            }else{
                res.status(400).json({
                    message : "Internal Server error"
                })
            }
        }
        
    }
    catch(error){
        res.status(401).json({
            message : "Error in fetching data"
        })
        console.log(error.message);
    }
}

module.exports = {getUserDashboard,getAdminDashboard,getEmployees};