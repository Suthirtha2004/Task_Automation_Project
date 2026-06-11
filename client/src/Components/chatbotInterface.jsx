import { useState } from "react";
import { getChatbotService, getSummarizerService } from "../Api/ChatbotService";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";

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
    <div className="flex min-h-screen bg-[#070708] text-gray-200 font-sans relative overflow-hidden antialiased">
      <Sidebar/>
      {/* Background Grid & Vetra Orange Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#f96232]/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10">
        
        {/* Top Navbar */}
        <div className="flex justify-end p-6">
          <div className="flex items-center space-x-3 bg-[#111113] border border-[#1e1e21] rounded-full px-4 py-2 cursor-pointer hover:bg-[#18181b] transition">
            {/* Nav content placeholders if any */}
          </div>
        </div>

        {/* Chat Area Container */}
        <div className="max-w-4xl mx-auto w-full mt-8 px-4 pb-12">
          
          <h1 className="text-5xl font-medium text-white mb-2 tracking-tight">
            Hey! <span className="text-[#f96232] font-semibold">{userData?.name || "User"}</span>
          </h1>
          <h2 className="text-3xl font-light text-gray-400 mb-10">What can I help with?</h2>

          {/* MAIN INPUT PANEL */}
          <div className="bg-[#111113] border border-[#1e1e21] rounded-2xl p-5 shadow-2xl mb-6 relative focus-within:border-[#f96232]/50 transition-all duration-200">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3 flex items-center">
               <svg className="w-4 h-4 mr-2 text-[#f96232]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
               Input Interface Data
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
              className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none resize-none text-base"
            />
          </div>

          {/* ACTION PANELS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            
            {/* Panel 1: Chatbot Enquiry */}
            <div className="bg-[#111113] border border-[#1e1e21] p-5 rounded-2xl flex flex-col justify-between hover:border-[#f96232]/30 hover:shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-all duration-300">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-[#f96232]/10 text-[#f96232] text-xs font-mono uppercase tracking-wider rounded-md mb-3 border border-[#f96232]/20">
                  Enquiry
                </div>
                <h4 className="text-lg text-gray-200 font-medium mb-1">Ask the Chatbot</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Send the input above as a direct question to get a conversational response.</p>
              </div>
              <button
                onClick={() => getChatHelp(promptData.message)}
                className="w-full py-3 bg-[#f96232]/10 text-[#f96232] border border-[#f96232]/20 rounded-xl hover:bg-[#f96232] hover:text-white hover:shadow-[0_0_20px_rgba(249,98,50,0.2)] transition-all duration-300 flex items-center justify-center space-x-2 font-semibold tracking-wide uppercase text-xs"
              >
                <span>Send Enquiry</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>

            {/* Panel 2: Summarize Task */}
            <div className="bg-[#111113] border border-[#1e1e21] p-5 rounded-2xl flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-all duration-300">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider rounded-md mb-3 border border-amber-500/20">
                  Summary
                </div>
                <h4 className="text-lg text-gray-200 font-medium mb-1">Summarize Task</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Extract the key points and get a concise summary of the task details provided.</p>
              </div>
              <button
                onClick={getSummaryResponse}
                className="w-full py-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl hover:bg-amber-500 hover:text-[#070708] hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300 flex items-center justify-center space-x-2 font-semibold tracking-wide uppercase text-xs"
              >
                <span>Summarize Data</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
              </button>
            </div>

          </div>

          {/* Response Section */}
          {reply && (
            <div className="mt-4 bg-[#111113] border border-[#1e1e21] p-6 rounded-2xl shadow-2xl animate-fade-in-up">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#f96232] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                AI Output Matrix
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