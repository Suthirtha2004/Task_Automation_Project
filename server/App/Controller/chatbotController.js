const express = require('express');
const Task = require('../Model/TaskModel')


const buildPrompt = (taskData)=>{
    let prompt = "Generate a task summary and make it brief and professional"

    taskData.forEach((tasks,id)=>{
      prompt += `${tasks.title} and ${tasks.description} - ${tasks.status} and deadline ${tasks.deadline}`;
    })

    return prompt;
}

const getTaskSummary = async(req,res)=>{
  try{
      let role = req.user.role;
      if(role!="admin"){
          res.status(400).json({
            message:"Access denied"
          })
      }else{
        const taskData = await Task.find({createdBy : req.user.id});
        if(taskData){
          const prompt = buildPrompt(taskData);
          res.status(200).json({
            tasks: taskData,
            prompt : prompt
          }
          );
        }else{
          res.status(400).json({
            message: "Task Not Found"
          })
        }
      }
  }catch(error){
    console.log(error.message);
  }
}

module.exports = { getTaskSummary, buildPrompt };
