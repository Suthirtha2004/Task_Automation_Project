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
    }
  };

  useEffect(() => {}, [userData]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] text-gray-200 font-sans relative overflow-hidden px-4">
      
      {/* Background Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-[#18181b]/80 backdrop-blur-md border border-[#27272a] rounded-3xl p-8 shadow-2xl relative z-10 flex flex-col items-center text-center">
        
        {/* Avatar / Icon Placeholder */}
        <div className="w-20 h-20 bg-[#27272a] rounded-full flex items-center justify-center border-4 border-[#18181b] shadow-xl mb-6 relative">
          <div className="absolute inset-0 rounded-full border border-teal-500/30 animate-pulse"></div>
          <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </div>

        <h1 className="text-3xl font-light text-white mb-2">
          Welcome to <span className="font-medium text-teal-400">Team Flow</span>
        </h1>
        <p className="text-gray-500 text-sm mb-8">Securely verified and ready to go.</p>

        {/* User Data Section */}
        {userData && (
          <div className="w-full bg-[#121214] border border-[#27272a] rounded-2xl p-5 mb-8 space-y-4 text-left">
            
            {/* Name */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#1c2c35] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Name</p>
                <p className="text-sm text-gray-200 truncate">{userData.name}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#2c1c35] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                <p className="text-sm text-gray-200 truncate">{userData.email}</p>
              </div>
            </div>

            {/* Role */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#1a2e20] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Role</p>
                <p className="text-sm text-gray-200 capitalize">{userData.role}</p>
              </div>
            </div>

          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleDashboard}
          className="w-full py-3.5 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-xl 
                     hover:bg-teal-500/20 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] 
                     transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
        >
          <span>Go to Dashboard</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </button>

      </div>
    </div>
  );
};