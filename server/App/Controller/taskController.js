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
            res.status(400).json({
                message : "Access denied"
            });
        }
        else{
            const assginedTask = await Task.find({assignedTo : req.user.id});
            console.log("Fetched tasks succesfully");
            if(assginedTask){
                res.status(201).json(assginedTask);
            }else{
                res.status(400).json({message : "Error in fetching tasks"});
            }
        }

    }catch(error){
        res.status(401).json({
            message : "Error in getting tasks"
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

module.exports = {createTask,getTask,getTaskEmp,updateTask,deleteTask};