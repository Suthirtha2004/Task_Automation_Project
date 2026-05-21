import { Link } from "react-router-dom";

export const LandingPage = () => {
  const systemMetrics = [
    { value: "10K+", label: "Active Nodes Deploying" },
    { value: "1M+", label: "Tasks Compiled" },
    { value: "99.98%", label: "System Core Uptime" },
    { value: "24/7", label: "Automated Support" }
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-gray-400 font-sans relative overflow-x-hidden selection:bg-teal-500/30 selection:text-white">
      
      {/* Premium Minimal Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none fixed" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none fixed" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Dynamic Update Pill */}
        <div className="inline-flex items-center space-x-2 bg-[#141416] border border-[#1f1f23] px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs font-light text-gray-400 tracking-wide uppercase font-mono">v2.0: Advanced Task Analytics Live</span>
        </div>

        {/* Master Typographic Heading */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8">
          Work directly. <br />
          <span className="font-semibold text-transparent bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-500 bg-clip-text">
            Streamline Everything.
          </span>
        </h1>

        {/* Sub-text description */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          A minimalist task environment engineered for high-performance squads. Elevate tracking mechanics, clear developer bottlenecks, and execute milestones flawlessly.
        </p>

        {/* Interactive Action Hub */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-sm mx-auto mb-24">
          <Link to="/teamflow/signup" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-teal-400 text-[#09090b] rounded-xl font-medium shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:bg-teal-300 transition-all duration-300 whitespace-nowrap text-sm">
              Get Started Free
            </button>
          </Link>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#141416] border border-[#1f1f23] text-gray-300 rounded-xl font-light hover:bg-[#18181b] hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 text-sm">
            <span>Watch Engine Demo</span>
          </button>
        </div>

        {/* Embedded UI Dashboard Mockup Panel */}
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-[#1f1f23] bg-[#141416]/60 backdrop-blur-md p-4 shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
          
          {/* Top Frame Control Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1f1f23]">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#27272a]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27272a]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27272a]" />
            </div>
            <div className="w-1/3 h-5 bg-[#09090b] rounded-md border border-[#1f1f23]" />
            <div className="w-8 h-5 bg-teal-500/5 border border-teal-500/10 rounded-md" />
          </div>

          {/* Core Mock Panel Viewport */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="md:col-span-2 h-44 bg-[#09090b]/50 border border-[#1f1f23]/60 rounded-xl p-5 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="h-3.5 bg-[#18181b] border border-[#27272a] rounded w-1/4" />
                <div className="h-3 bg-[#18181b]/60 border border-[#1f1f23] rounded w-3/4" />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/10 border border-teal-500/20" />
                <div className="w-24 h-5 bg-[#141416] border border-[#1f1f23] rounded" />
              </div>
            </div>
            <div className="h-44 bg-[#09090b]/50 border border-[#1f1f23]/60 rounded-xl p-5 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl border border-dashed border-[#27272a] flex items-center justify-center text-gray-600 text-base font-light">
                +
              </div>
              <div className="h-3 bg-[#18181b]/60 border border-[#1f1f23] rounded w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Global Performance Metrics Band */}
      <section className="relative z-10 border-y border-[#1f1f23] bg-[#141416]/20 backdrop-blur-sm py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {systemMetrics.map((stat, i) => (
            <div key={i} className="text-center md:text-left md:border-l md:border-[#1f1f23] md:pl-8 first:border-none">
              <div className="text-3xl font-light text-white mb-1 font-mono tracking-tight">{stat.value}</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-widest font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Bento Box Features Layout */}
      <section className="relative z-10 px-6 py-32 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Engineered around <span className="text-teal-400 font-medium">Execution</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
            No bloated mechanics. Just robust asynchronous systems customized for demanding production cycles.
          </p>
        </div>

        {/* Bento Box System Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Horizontal Node Focus */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-[#141416]/40 border border-[#1f1f23] flex flex-col justify-between min-h-[280px]">
            <div className="max-w-xl">
              <div className="w-9 h-9 bg-teal-500/5 text-teal-400 rounded-xl flex items-center justify-center mb-6 border border-teal-500/10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-medium mb-2.5 text-white tracking-tight">Lightning Fast Architecture</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Experience onboarding structured without typical friction points. Deploy tasks, specify tracking guidelines, and manage priority workflows instantly with optimized data sync pools.
              </p>
            </div>
            <div className="mt-6 flex space-x-2 text-[10px] font-mono text-gray-500">
              <div className="px-2.5 py-0.5 bg-[#09090b] border border-[#1f1f23] rounded">latency: 14ms</div>
              <div className="px-2.5 py-0.5 bg-[#09090b] border border-[#1f1f23] rounded">SSL Node Secure</div>
            </div>
          </div>

          {/* Card 2: Team Hub Container */}
          <div className="p-8 rounded-2xl bg-[#141416]/40 border border-[#1f1f23] flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-teal-500/5 text-teal-400 rounded-xl flex items-center justify-center mb-6 border border-teal-500/10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-lg font-medium mb-2.5 text-white tracking-tight">Team Hub</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Synchronized coordination nodes keep active staff unified. Break assignments down into isolated modules cleanly.
              </p>
            </div>
          </div>

          {/* Card 3: Deep Reporting Node */}
          <div className="p-8 rounded-2xl bg-[#141416]/40 border border-[#1f1f23] flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-teal-500/5 text-teal-400 rounded-xl flex items-center justify-center mb-6 border border-teal-500/10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-lg font-medium mb-2.5 text-white tracking-tight">Advanced Analytics</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Generate clean performance curves. Extract deep workspace reporting telemetry without setting up external processing layers.
              </p>
            </div>
          </div>

          {/* Card 4: Horizontal Security Infrastructure Focus */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-[#141416]/40 border border-[#1f1f23] flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-9 h-9 bg-teal-500/5 text-teal-400 rounded-xl flex items-center justify-center mb-6 border border-teal-500/10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-lg font-medium mb-2.5 text-white tracking-tight">Ironclad System Security</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Granular administrative roles mean data remains isolated perfectly. Define user parameters and route dashboard view layers based explicitly on certified operational privileges.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Conversion Acceleration Panel */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#141416] to-[#09090b] border border-[#1f1f23] relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
              Transform your execution <span className="font-medium text-teal-400">today</span>.
            </h2>
            
            <p className="text-gray-400 font-light text-sm max-w-xl mx-auto leading-relaxed mb-10">
              Join professional modern engineering, support, and corporate management environments executing workloads securely inside TaskFlow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link to="/teamflow/signup" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-teal-400 text-[#09090b] rounded-xl font-medium hover:bg-teal-300 transition-all duration-200 text-sm">
                  Start Asynchronous Trial
                </button>
              </Link>
              <Link to="/teamflow/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#141416] border border-[#1f1f23] text-gray-300 hover:text-white rounded-xl font-light hover:bg-[#18181b] transition-all duration-200 text-sm">
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