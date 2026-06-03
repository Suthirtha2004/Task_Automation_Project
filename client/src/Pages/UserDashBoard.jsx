import { useEffect, useState } from "react";
import { editTaskStatus, getEmployeeTask } from "../Api/TaskService";
import { logoutUser } from "../Api/AuthService";
import { useNavigate } from "react-router-dom";
import UserSidebar from "../Components/UserSidebar";
import { getEmployeeDashboard } from "../Api/DashboardService";
import UserDashboardCard from "../Components/UserDashboardCard";

export const UserDashboard = () => {
  const [taskData, setTaskData] = useState([]);
  const [statusEdit,setStatusEdit] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dashboardData,setdashboardData] = useState({});


  const navigate = useNavigate();
  const logoutFunc = async()=>{
    try{
      const res = await logoutUser();
      if(res.data === 201 || res.data === 200){
        console.log("User log out succesfully");
      }
      navigate('/teamflow');
      localStorage.removeItem("token");
    }
    catch(error){
      console.log(error.message);
    }
  }

  const getDashboardData = async()=>{
    try{
      const res = await getEmployeeDashboard();
      setdashboardData(res.data);
      console.log(res.data);
    }catch(error){
      console.log(error.message);
    }
  }
  const getTaskList = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getEmployeeTask();
      if (res.status === 200) {
          setTaskData(res.data);
        } else {
          setTaskData(res.data.tasks || []);
          setError("Failed to fetch tasks");
        }
      
    } catch (error) {
      setError(error.message || "Error fetching tasks");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditStatus = (taskId,value)=>{
    setStatusEdit((prev)=>({
        ...prev,
        [taskId]:value
    }));
  }

  const handleEditfunc = async(id)=>{
    const newStatus = statusEdit[id];
    try{
        const res = await editTaskStatus(id, newStatus);
        getTaskList();
        if(res.status === 200 || res.status === 201){
            console.log("Status updated");
        }else{
            console.log("Status not updated");
        }
    }catch(error){
        console.log(error.message);
    }
  }

  useEffect(() => {
    getTaskList();
    getDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-gray-300 flex font-sans">
      <UserSidebar />

      {/* Main Container */}
      <div className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto">
        
        {/* Simple Header */}
        <div className="mb-8 flex justify-between items-center border-b border-[#1f1f23] pb-5">
          <div>
            <h1 className="text-xl font-normal text-white tracking-tight">
              Hello Employee <span className="text-base">👋</span>
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-1">Workspace Node Console</p>
          </div>
          
          {/* Minimal Quick-Stats Counter */}
          <div className="text-xs font-mono bg-[#141416] border border-[#1f1f23] px-3 py-1 rounded-md text-gray-400">
            Active Workloads: {taskData.length}
          </div>
        </div>

        {/* Telemetry Count Row (Reusing your layout values mapping structure cleanly) */}
        <div className="mb-8">
          <UserDashboardCard
            c={dashboardData.completedTasks}
            pd={dashboardData.pendingTasks}
            pg={dashboardData.progressTasks}
            hp={dashboardData.highPriority}
          />
        </div>

        {/* Section Heading */}
        <div className="mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500">
            Your Assigned Tasks
          </h2>
        </div>

        {/* Tasks View State Rules */}
        {loading ? (
          <div className="text-center py-12 border border-dashed border-[#1f1f23] rounded-xl">
            <p className="text-sm text-gray-500 font-mono animate-pulse">Retrieving dynamic tasks...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 border border-dashed border-rose-500/20 rounded-xl bg-rose-500/5">
            <p className="text-sm text-rose-400 font-mono">{error}</p>
          </div>
        ) : taskData.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-[#1f1f23] rounded-xl">
            <p className="text-sm text-gray-500 font-mono">No assignments found in network pool.</p>
          </div>
        ) : (
          /* Clean Simple Cards Grid */
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {taskData.map((task) => (
              <li
                key={task._id}
                className="bg-[#141416]/60 border border-[#1f1f23] rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:border-[#27272a]"
              >
                <div>
                  {/* ID & Priority Badge */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono text-gray-600">
                      ID: {task._id.slice(-6)}...
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border tracking-wide uppercase
                        ${
                          task.priority === "high"
                            ? "bg-rose-500/5 text-rose-400 border-rose-500/20"
                            : task.priority === "medium"
                            ? "bg-amber-500/5 text-amber-400 border-amber-500/20"
                            : "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
                        }
                      `}
                    >
                      {task.priority} Prio
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-medium text-white tracking-tight mb-1.5 line-clamp-1">
                    {task.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-4 line-clamp-3">
                    {task.description}
                  </p>
                </div>

                {/* Status Indicator & Interactive Actions Form Element */}
                <div className="border-t border-[#1f1f23]/60 pt-4 mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-gray-500">Current State:</span>
                    <span className="text-[11px] font-mono text-teal-400 bg-teal-500/5 px-2 py-0.5 rounded border border-teal-500/10 lowercase">
                      {task.status}
                    </span>
                  </div>

                  {/* Clean Form Interactive Group */}
                  <div className="flex gap-2">
                    <input
                      name="status"
                      value={statusEdit[task._id] || ""}
                      onChange={(e) => handleEditStatus(task._id, e.target.value)}
                      placeholder="New status..."
                      className="flex-1 bg-[#09090b] border border-[#1f1f23] rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition"
                    />
                    <button
                      onClick={() => handleEditfunc(task._id)}
                      className="px-3 py-1.5 bg-[#1c1c1f] border border-[#27272a] hover:bg-[#27272a] text-gray-200 hover:text-white rounded-lg text-xs font-medium transition duration-150 whitespace-nowrap"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};
