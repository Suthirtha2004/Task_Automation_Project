import { Link } from "react-router-dom";

export const LandingPage = () => {

  return (
    <main className="min-h-screen bg-[#070708] text-gray-400 font-sans relative overflow-x-hidden selection:bg-[#f96232]/30 selection:text-white antialiased">
      
      {/* Premium Minimal Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none fixed" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#f96232]/5 blur-[150px] rounded-full pointer-events-none fixed" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Dynamic Update Pill */}
        <div className="inline-flex items-center space-x-2 bg-[#111113] border border-[#1e1e21] px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f96232] animate-pulse" />
          <span className="text-xs font-light text-gray-400 tracking-wide uppercase font-mono">v1.0: Admin AI Assistant Live</span>
        </div>

        {/* Master Typographic Heading */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8">
          Work directly. <br />
          <span className="font-semibold text-transparent bg-gradient-to-r from-[#f96232] via-[#ff7347] to-amber-400 bg-clip-text">
            Streamline Everything.
          </span>
        </h1>

        {/* Sub-text description */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          A minimalist task environment engineered for high-performance squads. Elevate tracking mechanics, clear developer bottlenecks, and execute milestones flawlessly.
        </p>

        {/* Interactive Action Hub */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-sm mx-auto mb-0">
          <Link to="/teamflow/signup" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#f96232] text-white rounded-xl font-semibold shadow-[0_4px_25px_rgba(249,98,50,0.3)] hover:bg-[#ff7347] transition-all duration-300 whitespace-nowrap text-sm tracking-wide uppercase">
              Get Started Free
            </button>
          </Link>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#111113] border border-[#1e1e21] text-gray-300 rounded-xl font-light hover:bg-[#18181b] hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 text-sm">
            <span>Watch Engine Demo</span>
          </button>
        </div>
         
      </section>

      {/* Modern Bento Box Features Layout */}
      {/* Changed py-32 to pt-12 pb-32 to sharply pull the features block closer to the hero hub */}
      <section className="relative z-10 px-6 pt-12 pb-32 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Engineered around <span className="text-[#f96232] font-medium">Execution</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
            No bloated mechanics. Just robust asynchronous systems customized for demanding production cycles.
          </p>
        </div>

        {/* Bento Box System Matrix with interactive hardware-accelerated animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transform-gpu">
          
          {/* Card 1: AI Task Management */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-[#111113]/40 border border-[#1e1e21] flex flex-col justify-between min-h-[280px] hover:border-[#f96232]/30 hover:bg-[#111113]/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(249,98,50,0.05)] transition-all duration-300 ease-out group">
            <div className="max-w-xl">
              <div className="w-9 h-9 bg-[#f96232]/5 text-[#f96232] rounded-xl flex items-center justify-center mb-6 border border-[#f96232]/10 group-hover:scale-110 group-hover:bg-[#f96232]/10 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-medium mb-2.5 text-white tracking-tight group-hover:text-[#f96232] transition-colors duration-300">AI-Assisted Task Management</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Experience smart task structures powered by intelligence layers. Automate tracking parameters, organize complex delivery goals, and optimize your sprint pipelines seamlessly with dynamic workflow automation.
              </p>
            </div>
            <div className="mt-6 flex space-x-2 text-[10px] font-mono text-gray-500">
              <div className="px-2.5 py-0.5 bg-[#070708] border border-[#1e1e21] rounded">AI Engine Active</div>
              <div className="px-2.5 py-0.5 bg-[#070708] border border-[#1e1e21] rounded">Smart Sync</div>
            </div>
          </div>

          {/* Card 2: Admin & Employee Support */}
          <div className="p-8 rounded-2xl bg-[#111113]/40 border border-[#1e1e21] flex flex-col justify-between hover:border-[#f96232]/30 hover:bg-[#111113]/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(249,98,50,0.05)] transition-all duration-300 ease-out group">
            <div>
              <div className="w-9 h-9 bg-[#f96232]/5 text-[#f96232] rounded-xl flex items-center justify-center mb-6 border border-[#f96232]/10 group-hover:scale-110 group-hover:bg-[#f96232]/10 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-lg font-medium mb-2.5 text-white tracking-tight group-hover:text-[#f96232] transition-colors duration-300">Admin & Employee Support</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Synchronized spaces custom-tailored for both managers and operations teams. Balance executive control with clear toolsets to remove typical friction points for staff.
              </p>
            </div>
          </div>

          {/* Card 3: Admin AI Assistant */}
          <div className="p-8 rounded-2xl bg-[#111113]/40 border border-[#1e1e21] flex flex-col justify-between hover:border-amber-500/30 hover:bg-[#111113]/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,158,11,0.05)] transition-all duration-300 ease-out group">
            <div>
              <div className="w-9 h-9 bg-amber-500/5 text-amber-400 rounded-xl flex items-center justify-center mb-6 border border-amber-500/10 group-hover:scale-110 group-hover:bg-amber-500/10 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-lg font-medium mb-2.5 text-white tracking-tight group-hover:text-amber-400 transition-colors duration-300">Admin AI Assistant</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Instantly summarize workspace backlogs and query intelligence layers to know everything about tasks, performance logs, and blockers in real-time.
              </p>
            </div>
          </div>

          {/* Card 4: Minimalist Dashboard */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-[#111113]/40 border border-[#1e1e21] flex flex-col justify-between min-h-[220px] hover:border-[#f96232]/30 hover:bg-[#111113]/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(249,98,50,0.05)] transition-all duration-300 ease-out group">
            <div>
              <div className="w-9 h-9 bg-[#f96232]/5 text-[#f96232] rounded-xl flex items-center justify-center mb-6 border border-[#f96232]/10 group-hover:scale-110 group-hover:bg-[#f96232]/10 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-lg font-medium mb-2.5 text-white tracking-tight group-hover:text-[#f96232] transition-colors duration-300">Minimalistic Dashboard</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                A clean, distraction-free environment layout designed explicitly around usability. Route control layers and visibility panels directly through an elegant workspace without unnecessary telemetry clutter.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Conversion Acceleration Panel */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#111113] to-[#070708] border border-[#1e1e21] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#f96232]/5 blur-[80px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
              Transform your execution <span className="font-semibold text-[#f96232]">today</span>.
            </h2>
            
            <p className="text-gray-400 font-light text-sm max-w-xl mx-auto leading-relaxed mb-10">
              Join professional modern engineering, support, and corporate management environments executing workloads securely inside TaskFlow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link to="/teamflow/signup" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#f96232] text-white rounded-xl font-semibold hover:bg-[#ff7347] shadow-[0_4px_25px_rgba(249,98,50,0.3)] transition-all duration-200 text-sm tracking-wide uppercase">
                  Start Asynchronous Trial
                </button>
              </Link>
              <Link to="/teamflow/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#111113] border border-[#1e1e21] text-gray-300 hover:text-white rounded-xl font-light hover:bg-[#18181b] transition-all duration-200 text-sm">
                  Sign In Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};