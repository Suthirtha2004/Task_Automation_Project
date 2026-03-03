import api from "./Api"

export const getChatbotService=(message) =>{
    return api.get("/chatbot",message);
}