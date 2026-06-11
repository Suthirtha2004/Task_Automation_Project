import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { userData } = useAuth();

  const handleDashboard = () => {
    if (userData?.role === "admin") {
      navigate("/teamflow/admin");
    } else if (userData?.role === "employee") {
      navigate("/teamflow/user");
    }else{
      navigate("/teamflow/login")
    }
  };

  useEffect(() => {}, [userData]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070708] text-gray-200 font-sans relative overflow-hidden px-4 antialiased">
      
      {/* Background Grid & Vetra Orange Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#f96232]/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-[#111113] border border-[#1e1e21] rounded-3xl p-8 shadow-3xl relative z-10 flex flex-col items-center text-center">
        
        {/* Avatar / Icon Container */}
        <div className="w-20 h-20 bg-[#18181b] rounded-full flex items-center justify-center border-2 border-[#1e1e21] shadow-xl mb-6 relative">
          <div className="absolute inset-0 rounded-full border border-[#f96232]/20 animate-pulse"></div>
          <svg className="w-9 h-9 text-[#f96232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>

        <h1 className="text-3xl font-light text-white mb-2 tracking-tight">
          Welcome to <span className="font-semibold text-[#f96232]">Team Flow</span>
        </h1>
        <p className="text-gray-400 text-sm mb-8">Securely verified and ready to build.</p>

        {/* User Data Section */}
        {userData && (
          <div className="w-full bg-[#18181b]/50 border border-[#1e1e21] rounded-2xl p-5 mb-8 space-y-4 text-left">
            
            {/* Name */}
            <div className="flex items-center space-x-4">
              <div className="w-9 h-9 rounded-xl bg-[#f96232]/10 border border-[#f96232]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#f96232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Identity Name</p>
                <p className="text-sm text-gray-200 font-medium truncate mt-0.5">{userData.name}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Routing Address</p>
                <p className="text-sm text-gray-200 font-medium truncate mt-0.5">{userData.email}</p>
              </div>
            </div>

            {/* Role */}
            <div className="flex items-center space-x-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Access Level</p>
                <p className="text-sm text-emerald-400 font-semibold capitalize mt-0.5 tracking-wide">{userData.role}</p>
              </div>
            </div>

          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleDashboard}
          className="w-full py-3.5 bg-[#f96232] text-white rounded-xl hover:bg-[#ff7347] shadow-[0_4px_25px_rgba(249,98,50,0.3)] transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-sm tracking-wide uppercase"
        >
          <span>Go to Dashboard</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>

      </div>
    </div>
  );
};