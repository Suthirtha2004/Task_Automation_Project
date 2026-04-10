const mongoose = require('mongoose');
const express = require('express');
const User = require("../Model/UserModel");
const Task = require("../Model/TaskModel");
const { populate } = require('dotenv');
const TaskModel = require('../Model/TaskModel');

//Create Task - Admin 

const createTask = async(req,res)=>{
  try{
    let role = req.user.role;
    if(role!= "admin"){
        res.status(400).json({
            message: "Access denied"
        });
    }
    else{
        let {title,description,createdBy,assignedTo,status,priority,deadline} =req.body;

        if(!title || !description || !assignedTo || !status || !priority || !deadline){
            res.status(400).json({
                message: "Fields are required"
            });
        }

        const TaskData = await Task.create({
            title,
            description,
            createdBy : req.user.id,
            assignedTo,
            status,
            priority,
            deadline
        })

        console.log("Task created successfully");
        if(TaskData){
            res.status(201).json({
                _id : TaskData.id,
                title : TaskData.title
            });
        }
        else{
            res.status(400).json({
                message:"Task data is not valid"
            });
        }
    }
  }catch(error){
    res.status(401).json({
        message:"Error in creating task"
    });
  }
}

//Fetch all Tasks created - Admin

const getTask = async(req,res)=>{
    try{
        let role = req.user.role;
        if(role!= "admin"){
            res.status(400).json({
                message:"Access denied"
            });
        }
        else{
            const tasks = await Task.find({createdBy : req.user.id});
            console.log("Task Fetched successfully");
            if(tasks) {
                res.status(201).json(tasks);
            }
            else{
                res.status(400).json({message:"Cannot get tasks"});
            }
        }

    }catch(error){
        res.status(401).json({
            message:"Error in fetching tasks"
        });
    }
}

//Get Tasks - Employee

const getTaskEmp = async(req,res)=>{
    try{
        let role = req.user.role;
        if(role!="employee"){
            return res.status(403).json({
                message : "Access denied"
            });
        }
        // console.log("User email:", req.user.email);
        const assignedTask = await Task.find({assignedTo : req.user.email});
        // console.log("Found tasks:", assignedTask);
        if(assignedTask && assignedTask.length > 0){
            return res.status(200).json(assignedTask);
        }else{
            return res.status(200).json({message : "No tasks assigned", tasks: []});
        }

    }catch(error){
        console.log("Error:", error);
        res.status(401).json({
            message : "Error in getting tasks",
            error: error.message
        });
    }
}

//UPDATE TASK - ADMIN
const updateTask = async(req,res)=>{
    try{
        let role = req.user.role;
        if(role!="admin"){
            res.status(401).json({message:"Access denied"});
        }else{
            let id = req.params.id;
            let {title,description,createdBy,assignedTo,status,priority,deadline} =req.body;
            let updateTaskValue  = {
                title,
                description,
                createdBy,
                assignedTo,
                status,
                priority,
                deadline
            }
            let updateData = await Task.findByIdAndUpdate(id,
                updateTaskValue,
                {new : true}
            );

            if(updateData){
                res.status(201).json({
                    message: "Task updates successfully"
                });
            }else{
                res.status(400).json({
                    message: "Task not updated",
                    updateData
                });
            }
        }
    }catch(error){
        res.status(401).json({
            message : "Error in updating task"
        })
    }
}

//DELETE TASK - ADMIN

const deleteTask = async(req,res)=>{
    try{
        let role = req.user.role;
        if(role!="admin"){
            res.status(400).json({message:"Access denied"});
        }
        else{
            let id = req.params.id;
            const deletedTask = await Task.findByIdAndDelete(id);
            if(deletedTask){
                res.status(201).json({message : "Task deleted successfully"});
            }else{
                res.status(400).json({message : "Task id not found"});
            }
        }
    }catch(error){
        res.status(401).json({
            message : "Error in deleting task"
        });
    }
}

//Update Task Status - Employee
const updateTaskStatus = async(req,res)=>{
    try{
        const role = req.user.role;
        if(role!="employee"){
            res.status(401).json({
                message:"Access denied"
            })
        }else{
            let id = req.params.id;
            const {status}= req.body;
            const updatedStatus = {
                status
            }
            let updateStatusvalue = await Task.findByIdAndUpdate(id,updatedStatus,{new:true});
            if(updateStatusvalue){
                res.status(201).json({
                    message:"Status updated successfully"
                })
            }else{
                res.status(400).json({
                    message: "Task not found"
                })
            }
        }
    }catch(error){
        res.status(400).json({
            message:"Error in updating status"
        })
    }
}

module.exports = {createTask,getTask,getTaskEmp,updateTask,deleteTask,updateTaskStatus};