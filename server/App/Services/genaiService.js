const { GoogleGenerativeAI } = require("@google/generative-ai");
const { buildPrompt, getTaskSummary } = require("../Controller/chatbotController");

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
    model : "gemini-pro",
    geminiConfig
})

const generate = async(req,res)=>{
    try{
        await getTaskSummary();
        const prompt = buildPrompt(taskData);
        const result = await gemini_model.generateContent(prompt);
        const response = result.response;
        if(response){
            res.status(200).json(response.text());
        }
    }catch(error){
        console.log(error.message);
    }
}

module.exports = generate;