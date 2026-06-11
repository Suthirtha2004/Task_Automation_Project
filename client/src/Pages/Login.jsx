import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../Api/AuthService";

export function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setloginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const LoginUser = async () => {
    try {
      const response = await loginUser(loginData);
      
      if (response?.data?.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        setloginData({ email: "", password: "" });
        navigate('/teamflow/home');
      }
    } catch (error) {
      console.error("Login unsuccessful", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginUser();
  };

  return (
    <main className="min-h-screen bg-[#070708] text-gray-200 font-sans flex items-center justify-center p-4 relative overflow-hidden selection:bg-[#f96232]/30 selection:text-white antialiased">
      
      {/* Background Ambient Glow Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f96232]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-4xl bg-[#111113]/60 border border-[#26262a] rounded-3xl overflow-hidden flex flex-col md:flex-row relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        
        {/* Welcome Section (Stylized Dark Gradient) */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#161619] via-[#0d0d0f] to-[#070708] p-10 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-[#26262a]">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#f96232]/10 blur-[40px] rounded-full pointer-events-none" />
          
          {/* Top Brand Pill */}
          <div className="inline-flex items-center space-x-2 bg-[#1e1e21] border border-[#3f3f46] px-3 py-1 rounded-full w-fit mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f96232] animate-pulse" />
            <span className="text-[10px] font-medium text-gray-300 tracking-wider uppercase font-mono">v1.0 Ready</span>
          </div>

          {/* Main Typography Block */}
          <div className="my-auto">
            <h1 className="text-4xl font-normal tracking-tight text-white leading-[1.2] mb-4">
              Welcome to <br />
              <span className="font-bold text-transparent bg-gradient-to-r from-[#f96232] via-[#ff7347] to-amber-400 bg-clip-text">
                Task Flow
              </span>
            </h1>
            <p className="text-sm text-gray-300 font-normal leading-relaxed max-w-xs">
              A minimalist environment engineered for high-performance squads. Synchronize operations and execute flawlessly.
            </p>
          </div>

          {/* Footer contextual label */}
          <div className="mt-12 text-[10px] font-mono font-semibold text-gray-500 tracking-widest">
            SECURE ENGINE INTERFACE
          </div>
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 bg-[#111113]/40 p-10 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Sign in to your account</h2>
            <p className="text-sm text-gray-400 font-normal mb-8">Enter your security credentials to access the workspace.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">Email Address</label>
                <div className="mt-2">
                  <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    onChange={handleInputChange}
                    value={loginData.email}
                    required 
                    placeholder="name@company.com"
                    className="block w-full rounded-xl bg-[#070708] border border-[#26262a] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f96232] focus:ring-1 focus:ring-[#f96232]/30 transition-all duration-200" 
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">Password</label>
                  <NavLink to="/" className="text-xs font-medium text-gray-400 hover:text-[#f96232] transition-colors duration-200">
                    Forgot password?
                  </NavLink>
                </div>
                <div className="mt-2 relative">
                  <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    onChange={handleInputChange}
                    value={loginData.password}
                    required
                    placeholder="••••••••"
                    className="block w-full rounded-xl bg-[#070708] border border-[#26262a] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f96232] focus:ring-1 focus:ring-[#f96232]/30 transition-all duration-200" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 px-6 py-3.5 bg-[#f96232] text-white rounded-xl font-bold shadow-[0_4px_20px_rgba(249,98,50,0.25)] hover:bg-[#ff7347] transition-all duration-300 text-xs tracking-wide uppercase"
              >
                Sign In
              </button>
            </form>
            
            {/* Splitter Divider */}
            <div className="relative flex py-6 items-center">
              <div className="flex-grow border-t border-[#26262a]"></div>
              <span className="flex-shrink mx-4 text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">New Squad</span>
              <div className="flex-grow border-t border-[#26262a]"></div>
            </div>

            <div className="text-center">
              <NavLink to="/teamflow/signup" className="inline-block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Don't have an account? <span className="text-[#f96232] font-semibold hover:underline ml-1">Sign Up here</span>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}