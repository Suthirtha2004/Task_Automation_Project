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
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">

  <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8">

    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-extrabold text-gray-800">
        AI Task Assistant
      </h1>

      <p className="text-gray-500 mt-2">
        Ask questions or summarize tasks instantly
      </p>
    </div>

    {/* Input Section */}
    <div className="space-y-4">

      <textarea
        name="promptmessage"
        placeholder="Write your enquiry or task details here..."
        value={promptData.message}
        onChange={(e) =>
          setpromptData({
            message: e.target.value
          })
        }
        rows={5}
        className="w-full px-5 py-4 rounded-2xl border border-gray-300
                   focus:outline-none focus:ring-4 focus:ring-indigo-300
                   resize-none text-gray-700 shadow-sm"
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">

        <button
          onClick={() => getChatHelp(promptData.message)}
          className="flex-1 bg-indigo-600 text-white py-3 rounded-2xl
                     font-semibold hover:bg-indigo-700
                     transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Send Enquiry
        </button>

        <button
          onClick={getSummaryResponse}
          className="flex-1 bg-purple-600 text-white py-3 rounded-2xl
                     font-semibold hover:bg-purple-700
                     transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Summarize Task
        </button>

      </div>
    </div>

    {/* Response Section */}
    <div className="mt-8">

      <h3 className="text-lg font-semibold text-gray-700 mb-3">
        Chatbot Response
      </h3>

      <div
        className="bg-gray-50 border border-gray-200 rounded-2xl
                   p-5 min-h-[150px] shadow-inner"
      >
        {reply === "" ? (
          <p className="text-gray-400 italic">
            Your chatbot response will appear here...
          </p>
        ) : (
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {reply}
          </p>
        )}
      </div>

    </div>
  </div>
</div>
  );
};