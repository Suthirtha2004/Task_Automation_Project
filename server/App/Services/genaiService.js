const { GoogleGenerativeAI } = require("@google/generative-ai");
const { buildPrompt, getTaskSummary,fetchtasksForChat } = require("../Controller/chatbotController");
const ChatModel = require("../Model/chatModel")
require('dotenv').config();

const gemini_API_KEY = process.env.GEMINI_API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_API_KEY);

const geminiConfig = {
    temperature : 0.9,
    topP: 1,
    topK : 1,
    maxOutputTokens : 4096,
};

const gemini_model = googleAI.getGenerativeModel({
    model : "gemini-2.5-flash",
    ...geminiConfig
})

const generate = async(req,res)=>{
    try{
        const taskData = await fetchtasksForChat(req.user.id);
        const message = req.body;
        if(taskData.length === 0){
            res.status(400).json({
                message: "Task not found"
            })
        }
        const prompt = buildPrompt(taskData,message);
        const result = await gemini_model.generateContent(prompt);
        const response = result.response;
        if(response){
            res.status(200).json({
                summary : response.text(),
                taskLength : taskData.length

            });
        }
    }catch(error){
        
        console.log(error.message);
    }
}

module.exports = generate;