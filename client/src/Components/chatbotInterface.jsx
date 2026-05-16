import { useState } from "react";
import { getChatbotService, getSummarizerService } from "../Api/ChatbotService";

export const TaskChatbot = () => {
  const [promptmssg, setPromptmssg] = useState("");
  const [reply,setReply] = useState("");
  const [promptData , setpromptData] = useState({
    message:""
  });

  const getChatHelp = async(promptmessage) =>{
    try{
      const res = await getChatbotService(promptData);
      setReply(res.data.summary);
      setpromptData({
        message:""
      });

    }catch(error){
      console.log("Error message",error.message)
    }
  }

  const getSummaryResponse = async()=>{
    try{
      const res = await getSummarizerService(promptData);
      console.log(promptmssg);
      setReply(res.data.summary);
      setpromptData({
        message:""
      })

    }catch(error){
      console.log("Error message",error.message);
    }
  }

  const handleInputChange = (e) => {
    setPromptmssg(e.target.value);
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-6 space-y-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Task Chatbot
        </h2>

        {/* Input Section */}
        <div>
          <input
            name="promptmessage"
            placeholder="Please write your enquiry..."
            value={promptData.message}
            onChange={(e)=> setpromptData({
              message:e.target.value
            })}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 
                       focus:border-transparent transition duration-300"
          />
          <button
            onClick={() => getChatHelp(promptmssg)}
            className="w-1/3 bg-indigo-600 text-white py-2 rounded-xl 
                       hover:bg-indigo-700 transition duration-300 mt-2.5"
          >
            Send Enquiry
          </button>
          <button
            onClick={() => getSummaryResponse(promptmssg)}
            className="w-1/3 bg-indigo-600 text-white py-2 rounded-xl 
                       hover:bg-indigo-700 transition duration-300 mt-2.5 ml-2.5"
          >
            Summarize Task
          </button>
        </div>
        {/* Response Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">
            Chatbot Answer:
          </h4>

          <div className="bg-gray-100 rounded-xl p-4 min-h-[80px] text-gray-700 text-sm shadow-inner">
            {reply === ''? (
              <p>Your chatbot response will appear here...</p>
            ):
            (
              <p>{reply}</p>
            )
            }
            
          </div>
        </div>

      </div>
    </div>
  );
};