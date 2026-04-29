const express = require('express');
const Task = require('../Model/TaskModel')


const buildPrompt = (taskData,message)=>{
   let prompt = `Keep the response professional : ${message}\n`;
    taskData.forEach((tasks, index) => {
      prompt += `Task ${index + 1}: Title: ${tasks.title}, Description: ${tasks.description}, Status: ${tasks.status}, Deadline: ${tasks.deadline}\n`;
    });

    return prompt;
};
const fetchtasksForChat = async(userId)=>{
  const taskData = await Task.find({createdBy :userId });
  return taskData;
}

const getTaskSummary = async(req,res)=>{
  try{
      let role = req.user.role;
      if(role!="admin"){
          return res.status(400).json({
            message:"Access denied"
          })
      }else{
        const taskData = await fetchtasksForChat(req.user.id);
        if(taskData && taskData.length > 0){
          const prompt = buildPrompt(taskData, "");
          return res.status(200).json({
            tasks: taskData,
            prompt : prompt
          }
          );
        }else{
          return res.status(400).json({
            message: "Task Not Found"
          })
        }
      }
  }catch(error){
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

//Summarize Prompts
const getSummary = (message)=>{
  const prompt = `Extract title ,description , priority , status and probable dealine(should be in the format of dd/mm/yyyy and please calculate it with respect to the present date) from the ${message} given and please produce the result in the form of 
  -title
  -description
  -priority
  -status
  -deadline`

  return prompt;
}

module.exports = { getTaskSummary, buildPrompt,fetchtasksForChat ,getSummary};
