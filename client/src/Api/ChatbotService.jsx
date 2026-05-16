import api from "./Api"

export const getChatbotService=(message) =>{
    return api.post("/chatbot", message);
}

export const getSummarizerService = (message)=>{
    return api.post("/summarizer", message);
}