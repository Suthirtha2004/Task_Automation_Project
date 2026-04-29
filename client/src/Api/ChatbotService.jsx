import api from "./Api"

export const getChatbotService=(message) =>{
    return api.get("/chatbot",message);
}

export const getSummarizerService = (message)=>{
    return api.get("/summarizer",message);
}