import { useState } from "react";
import { NavLink } from "react-router-dom";
import { registerUser } from "../Api/AuthService";

export const SignUp = () => {
  const [selectedRole, setselectedRole] = useState("employee");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: selectedRole
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    console.log(formData);
  };

  const handleSelectedRole = (e) => {
    const newRole = e.target.value;
    setselectedRole(newRole);
    console.log(newRole);
    setFormData((prev) => ({
      ...prev,
      role: newRole
    }));
  };

  const Registeruser = async () => {
    try {
      let response = await registerUser(formData);
      if (response.status === 201 || response.status === 200) {
        setFormData([...response.data, formData]);
      }
      setFormData({ name: "", email: "", password: "", role: selectedRole });
      alert("User registered successfully");
    } catch (error) {
      alert("error registering user");
    }
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    Registeruser();
  };

  return (
    <main className="min-h-screen bg-[#070708] text-gray-200 font-sans flex items-center justify-center p-4 relative overflow-hidden selection:bg-[#f96232]/30 selection:text-white antialiased">
      
      {/* Background Ambient Glow Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f96232]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container Card Split Over Panels */}
      <div className="w-full max-w-4xl bg-[#111113]/60 border border-[#26262a] rounded-3xl overflow-hidden flex flex-col md:flex-row relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        
        {/* Left Panel: Hello There Welcome Card */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-[#161619] via-[#0d0d0f] to-[#070708] p-8 md:p-10 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-[#26262a]">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#f96232]/10 blur-[40px] rounded-full pointer-events-none" />
          
          {/* Top Pill Counterpart */}
          <div className="inline-flex items-center space-x-2 bg-[#1e1e21] border border-[#3f3f46] px-3 py-1 rounded-full w-fit mb-8 md:mb-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f96232] animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-gray-300 tracking-wider uppercase">Onboarding</span>
          </div>

          {/* Typography Layout Writeup */}
          <div className="my-auto py-4">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.2] mb-4">
              Hello there! <br />
              <span className="font-bold text-transparent bg-gradient-to-r from-[#f96232] via-[#ff7347] to-amber-400 bg-clip-text">
                Create Account
              </span>
            </h1>
            <p className="text-sm text-gray-300 font-normal leading-relaxed max-w-xs">
              Set up your profile identity inside the workspace engine. Gain instant visibility, sync backlogs, and launch milestones side by side with your team.
            </p>
          </div>

          {/* Footer Identifier Metatag */}
          <div className="text-[10px] font-mono font-bold text-gray-500 tracking-widest hidden md:block">
            NODE REGISTRATION // TF-01
          </div>
        </div>

        {/* Right Panel: SignUp Form Field Operations */}
        <div className="w-full md:w-7/12 bg-[#111113]/40 p-8 md:p-10 flex items-center justify-center">
          <div className="w-full">
            
            <form onSubmit={handlesubmit} className="space-y-4">
              {/* Input: Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">
                  Name
                </label>
                <div className="mt-1.5">
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name} 
                    required 
                    placeholder="John Doe"
                    className="block w-full rounded-xl bg-[#070708] border border-[#26262a] px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#f96232] focus:ring-1 focus:ring-[#f96232]/30 transition-all duration-200" 
                  />
                </div>
              </div>

              {/* Input: Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="mt-1.5">
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    onChange={handleInputChange}
                    value={formData.email}
                    required 
                    placeholder="name@company.com"
                    className="block w-full rounded-xl bg-[#070708] border border-[#26262a] px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#f96232] focus:ring-1 focus:ring-[#f96232]/30 transition-all duration-200" 
                  />
                </div>
              </div>

              {/* Input: Password */}
              <div>
                <label htmlFor="password" className="block text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">
                  Password
                </label>
                <div className="mt-1.5">
                  <input 
                    id="password"
                    type="password" 
                    name="password"
                    onChange={handleInputChange}
                    value={formData.password} 
                    required 
                    placeholder="••••••••"
                    className="block w-full rounded-xl bg-[#070708] border border-[#26262a] px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#f96232] focus:ring-1 focus:ring-[#f96232]/30 transition-all duration-200" 
                  />
                </div>
              </div>

              {/* Input: Role Select */}
              <div>
                <label htmlFor="role-select" className="block text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">
                  Workspace Role
                </label>
                <div className="mt-1.5">
                  <select 
                    id="role-select"
                    onChange={handleSelectedRole}
                    value={selectedRole}
                    className="block w-full rounded-xl bg-[#070708] border border-[#26262a] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f96232] focus:ring-1 focus:ring-[#f96232]/30 transition-all duration-200 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23a1a1aa%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%25.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_auto] bg-[right_1.25rem_center] bg-no-repeat"
                  >
                    <option value="employee" className="bg-[#111113]">Employee</option>
                    <option value="admin" className="bg-[#111113]">Admin</option>
                  </select>
                </div>
              </div>

              {/* Primary Action Button */}
              <button 
                type="submit" 
                className="w-full !mt-6 px-6 py-3.5 bg-[#f96232] text-white rounded-xl font-bold shadow-[0_4px_20px_rgba(249,98,50,0.25)] hover:bg-[#ff7347] transition-all duration-300 text-xs tracking-wide uppercase"
              >
                Sign Up Account
              </button>
            </form>

            {/* Splitter Line Separator */}
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#26262a]"></div>
              <span className="flex-shrink mx-4 text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">Existing Member</span>
              <div className="flex-grow border-t border-[#26262a]"></div>
            </div>

            {/* Redirection Links & Disclaimers */}
            <div className="text-center space-y-2">
              <NavLink to="/teamflow/login" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Already a member? <span className="text-[#f96232] font-semibold hover:underline ml-1">Log In here</span>
              </NavLink>
              
              <div className="text-xs text-gray-500">
                By signing up, you agree to our{" "}
                <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-150 underline underline-offset-2">
                  Terms & Conditions
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};