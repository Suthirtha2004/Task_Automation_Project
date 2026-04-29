const {GoogleGenerativeAI} = require("@google/generative-ai")
const {getSummary} = require("../Controller/chatbotController")

require('dotenv').config();

const gemini_API_KEY = process.env.GEMINI_API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_API_KEY);

const geminiConfig={
    temperature: 0.9,
    topP : 1,
    topK : 1,
    maxOutputTokens : 4096,
};

const gemini_model = googleAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    ...geminiConfig
})

const generateSummary = async(req,res)=>{
    try{
        let role = req.user.role;
        if(role!="admin"){
            res.status(400).json({
                message:"Access denied"
            });
            return;
        }
        const message = req.body;
        const prompt = getSummary(message);
        const result = await gemini_model.generateContent(prompt);
        const response = result.response;
        if(response){
            res.status(200).json({
                summary : response.text()
            });
        }

    }catch(error){
        console.log(error.message)
    }
}

module.exports = generateSummary;