import { useState } from "react";
import { getChatbotService, getSummarizerService } from "../Api/ChatbotService";
import { useAuth } from "../context/AuthContext";

export const TaskChatbot = () => {
  const [promptmssg, setPromptmssg] = useState("");
  const [reply, setReply] = useState("");
  const [promptData, setpromptData] = useState({
    message: ""
  });

  const {userData} = useAuth();

  const getChatHelp = async (promptmessage) => {
    try {
      const res = await getChatbotService(promptData);
      setReply(res.data.summary);
      setpromptData({
        message: ""
      });
    } catch (error) {
      console.log("Error message", error.message);
    }
  };

  const getSummaryResponse = async () => {
    try {
      const res = await getSummarizerService(promptData);
      console.log(promptmssg);
      setReply(res.data.summary);
      setpromptData({
        message: ""
      });
    } catch (error) {
      console.log("Error message", error.message);
    }
  };

  const handleInputChange = (e) => {
    setPromptmssg(e.target.value);
  };

  return (
    <div className="flex min-h-screen bg-[#09090b] text-gray-200 font-sans relative overflow-hidden">
      {/* Background Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-teal-600/20 blur-[120px] rounded-full pointer-events-none"></div>

     

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10">
        
        {/* Top Navbar */}
        <div className="flex justify-end p-6">
          <div className="flex items-center space-x-3 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-2 cursor-pointer hover:bg-[#27272a] transition">
            
          </div>
        </div>

        {/* Chat Area Container */}
        <div className="max-w-4xl mx-auto w-full mt-8 px-4 pb-12">
          
          <h1 className="text-5xl sm:text-5xl font-medium text-white mb-2">Hey! {userData.name}</h1>
          <h2 className="text-3xl sm:text-3xl font-light text-white mb-10">What can I help with?</h2>

          {/* MAIN INPUT PANEL */}
          <div className="bg-[#18181b]/90 backdrop-blur-md border border-[#27272a] rounded-2xl p-5 shadow-2xl mb-6 relative">
            <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
               Input Data
            </h3>
            <textarea
              name="promptmessage"
              placeholder="Paste your task details or write your question here..."
              value={promptData.message}
              onChange={(e) => {
                setpromptData({ message: e.target.value });
                handleInputChange(e); 
              }}
              rows={4}
              className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none resize-none"
            />
          </div>

          {/* ACTION PANELS (Separated as requested) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            
            {/* Panel 1: Chatbot Enquiry */}
            <div className="bg-[#121214] border border-[#27272a] p-5 rounded-2xl flex flex-col justify-between hover:border-teal-500/40 transition-all duration-300">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-[#1c2c35] text-teal-300 text-xs font-semibold rounded-md mb-3">Enquiry</div>
                <h4 className="text-lg text-gray-200 font-medium mb-1">Ask the Chatbot</h4>
                <p className="text-sm text-gray-500">Send the input above as a direct question to get a conversational response.</p>
              </div>
              <button
                onClick={() => getChatHelp(promptData.message)}
                className="w-full py-3 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-xl hover:bg-teal-500/20 hover:shadow-[0_0_15px_rgba(45,212,191,0.1)] transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
              >
                <span>Send Enquiry</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>

            {/* Panel 2: Summarize Task */}
            <div className="bg-[#121214] border border-[#27272a] p-5 rounded-2xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-[#2c1c35] text-purple-300 text-xs font-semibold rounded-md mb-3">Summary</div>
                <h4 className="text-lg text-gray-200 font-medium mb-1">Summarize Task</h4>
                <p className="text-sm text-gray-500">Extract the key points and get a concise summary of the task details provided.</p>
              </div>
              <button
                onClick={getSummaryResponse}
                className="w-full py-3 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-xl hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
              >
                <span>Summarize Data</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
              </button>
            </div>

          </div>

          {/* Response Section */}
          {reply && (
            <div className="mt-4 bg-[#18181b]/90 backdrop-blur-md border border-[#27272a] p-6 rounded-2xl shadow-xl animate-fade-in-up">
              <h3 className="text-sm font-semibold text-teal-400 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                AI Output
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                {reply}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};