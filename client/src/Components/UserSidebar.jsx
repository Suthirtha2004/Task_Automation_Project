


import { Home, LayoutDashboard, Bot, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function UserSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={20} />,
    },
    {
      name: "Main Page",
      path: "/teamflow",
      icon: <ArrowLeft size={20} />,
    },
    {
      name: "Dashboard",
      path: "/teamflow/user",
      icon: <LayoutDashboard size={20} />,
    },
  ];

  return (
    <div className="h-screen w-64 bg-zinc-900 text-white flex flex-col p-4 shadow-xl">
      
      {/* Logo / Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-wide">
          My App
        </h1>
        <p className="text-sm text-zinc-400">
          Navigation Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
              ${
                isActive
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-zinc-800 text-zinc-300"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-zinc-800">
        <p className="text-xs text-zinc-500">
          Powered by AI
        </p>
      </div>
    </div>
  );
}