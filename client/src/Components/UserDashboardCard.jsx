import React from 'react';

const UserDashboardCard = ({ c, pd, pg, hp }) => {
  const metrics = [
    { label: "Completed", value: c },
    { label: "Pending", value: pd },
    { label: "In Progress", value: pg },
    { label: "High Priority", value: hp }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {metrics.map((item, idx) => (
        <div 
          key={idx} 
          className="bg-[#141416]/40 border border-[#1f1f23] rounded-xl p-4 flex flex-col justify-between"
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
            {item.label}
          </span>
          <span className="text-2xl font-light font-mono text-white mt-1">
            {item.value ?? 0}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserDashboardCard;