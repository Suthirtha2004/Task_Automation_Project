import { Home, LayoutDashboard, Bot, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={18} />,
      category: "MAIN MENU",
    },
    {
      name: "Main Page",
      path: "/teamflow",
      icon: <ArrowLeft size={18} />,
      category: "MAIN MENU",
    },
    {
      name: "Dashboard",
      path: "/teamflow/admin",
      icon: <LayoutDashboard size={18} />,
      category: "MAIN MENU",
    },
    {
      name: "AI Assistant",
      path: "/teamflow/admin/chatbot",
      icon: <Bot size={18} />,
      category: "OTHERS",
    },
  ];

  // Group items by category just like the reference layout
  const mainMenuItems = menuItems.filter(item => item.category === "MAIN MENU");
  const otherItems = menuItems.filter(item => item.category === "OTHERS");

  const renderLink = (item) => {
    const isActive = location.pathname === item.path;
    return (
      <Link
        key={item.name}
        to={item.path}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-150
        ${
          isActive
            ? "bg-white text-black font-medium" // High contrast active item
            : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
        }`}
      >
        <span className={isActive ? "text-black" : "text-zinc-400"}>
          {item.icon}
        </span>
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    //  signature deep dark background with crisp, low-impact structural lines
    <div className="h-screen w-64 bg-[#0b0b0c] border-r border-zinc-900 text-zinc-300 flex flex-col p-5 shrink-0 select-none justify-between">
      
      <div>
        {/* Brand Header Group */}
        <div className="mb-6 px-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f96232]" /> {/* Orange Accenting */}
            <h1 className="text-lg font-bold text-white tracking-tight">
              TaskFlow
            </h1>
          </div>
        </div>

        {/* Search Bar - Clean Minimalist Input Block */}
        <div className="mb-6 relative">
          <svg 
            className="absolute left-3 top-3 w-4 h-4 text-zinc-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#121214] border border-zinc-800/80 rounded-xl pl-9 pr-4 py-2 text-xs text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-700"
            disabled
          />
        </div>

        {/* Navigation - Main Section */}
        <div className="space-y-1">
          <span className="block text-[10px] font-mono font-semibold tracking-wider text-zinc-600 px-4 mb-2">
            MAIN MENU
          </span>
          <nav className="flex flex-col gap-1">
            {mainMenuItems.map(renderLink)}
          </nav>
        </div>

        {/* Navigation - Others Section */}
        <div className="space-y-1 mt-6">
          <span className="block text-[10px] font-mono font-semibold tracking-wider text-zinc-600 px-4 mb-2">
            OTHERS
          </span>
          <nav className="flex flex-col gap-1">
            {otherItems.map(renderLink)}
          </nav>
        </div>
      </div>

      {/* User Info Profile Widget Card */}
      <div className="bg-[#121214] border border-zinc-800/60 p-3 rounded-xl flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#f96232]/10 border border-[#f96232]/20 flex items-center justify-center text-[#f96232] font-semibold text-xs shrink-0">
          AD
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-semibold text-white truncate">Admin User</span>
          <span className="text-[10px] text-zinc-500 truncate">admin@vetra.com</span>
        </div>
      </div>

    </div>
  );
}