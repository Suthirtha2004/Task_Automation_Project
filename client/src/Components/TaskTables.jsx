import React from "react";

export const TaskTable = ({ data = [] }) => {
  return (
    <div className="w-full bg-[#111113] border border-[#1e1e21] rounded-2xl overflow-hidden shadow-2xl">
      {/* Table Wrapper for Horizontal Scrolling on Small Screens */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          
          {/* Table Head */}
          <thead>
            <tr className="border-b border-[#1e1e21] bg-[#070708]/50">
              <th className="p-4 text-[11px] font-mono uppercase tracking-widest text-gray-400">Team Member</th>
              <th className="p-4 text-[11px] font-mono uppercase tracking-widest text-gray-400">Routing Email</th>
              <th className="p-4 text-[11px] font-mono uppercase tracking-widest text-gray-400 text-center">Total Tasks</th>
              <th className="p-4 text-[11px] font-mono uppercase tracking-widest text-gray-400 text-center">Completed</th>
              <th className="p-4 text-[11px] font-mono uppercase tracking-widest text-gray-400 text-right">Efficiency State</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#1e1e21]/60">
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-8 text-center text-sm text-gray-500 font-mono">
                  No active operational nodes found in table array.
                </td>
              </tr>
            ) : (
              data.map((row, index) => {
                // Calculate real-time completion percentage safely
                const completionRate = row.totalTasks > 0 
                  ? Math.round((row.completedTasks / row.totalTasks) * 100) 
                  : 0;

                return (
                  <tr 
                    key={index} 
                    className="hover:bg-[#18181b]/40 transition-colors duration-150 group"
                  >
                    {/* Name */}
                    <td className="p-4 text-sm font-medium text-white tracking-tight">
                      {row.name}
                    </td>

                    {/* Email */}
                    <td className="p-4 text-sm text-gray-400 font-normal">
                      {row.email}
                    </td>

                    {/* Total Tasks */}
                    <td className="p-4 text-sm text-gray-200 font-mono text-center">
                      {row.totalTasks}
                    </td>

                    {/* Completed Tasks */}
                    <td className="p-4 text-sm text-emerald-400 font-mono text-center">
                      {row.completedTasks}
                    </td>

                    {/* Completion Progress Metric Visualizer */}
                    <td className="p-4 text-right">
                      <div className="inline-flex items-center space-x-3">
                        {/* Numerical readout */}
                        <span className="text-xs font-mono font-medium text-[#f96232]">
                          {completionRate}%
                        </span>
                        {/* Micro progress capsule track */}
                        <div className="w-16 h-1.5 bg-[#070708] rounded-full overflow-hidden border border-[#1e1e21]">
                          <div 
                            className="h-full bg-gradient-to-r from-[#f96232] to-amber-400 rounded-full transition-all duration-500"
                            style={{ width: `${completionRate}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};