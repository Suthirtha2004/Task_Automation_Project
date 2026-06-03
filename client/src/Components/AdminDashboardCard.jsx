import React from 'react';

const AdminDashboardCard = ({ title, value, change, statusType }) => {
  // Configured structural design maps aligned with the master operational view
  const themes = {
    success: { 
      text: "text-emerald-400", 
      bg: "bg-emerald-500/5", 
      border: "border-emerald-500/10", 
      glow: "from-emerald-500/20" 
    },
    warning: { 
      text: "text-amber-400", 
      bg: "bg-amber-500/5", 
      border: "border-amber-500/10", 
      glow: "from-amber-500/20" 
    },
    info: { 
      text: "text-teal-400", 
      bg: "bg-teal-500/5", 
      border: "border-teal-500/10", 
      glow: "from-teal-500/20" 
    },
    danger: { 
      text: "text-rose-400", 
      bg: "bg-rose-500/5", 
      border: "border-rose-500/10", 
      glow: "from-rose-500/20" 
    }
  };

  // Fallback structure default configuration assignment
  const currentTheme = themes[statusType] || themes.info;

  return (
    <div className="relative overflow-hidden rounded-xl border border-[#1f1f23] bg-[#141416]/60 backdrop-blur-md p-5 shadow-lg transition-all duration-300 hover:border-[#27272a] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      
      {/* Top Accent Architectural Highlight Glow Strip */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${currentTheme.glow} via-transparent to-transparent`} />
      
      {/* Metric Title Segment Bar */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
          {title}
        </span>
        {change && (
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border tracking-wide ${currentTheme.bg} ${currentTheme.text} ${currentTheme.border}`}>
            {change}
          </span>
        )}
      </div>

      {/* Numerical Metrics Field display block */}
      <div className="flex items-baseline space-x-1.5">
        <span className="text-3xl font-light font-mono text-white tracking-tight">
          {value ?? 0}
        </span>
      </div>
    </div>
  );
};

export default AdminDashboardCard;