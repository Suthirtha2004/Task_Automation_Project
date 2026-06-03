import { useEffect, useState } from "react";
import {
  deleteTask,
  editTask,
  getAdminTask,
  postTask,
} from "../Api/TaskService";

import { TaskChatbot } from "../Components/chatbotInterface";
import { NavLink } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { getAdminDashboard, getEmpoyeeList } from "../Api/DashboardService";
import AdminDashboardCard from "../Components/AdminDashboardCard";

export const AdminDashboard = () => {
  const [taskList, setTaskList] = useState([]);
  const [prio, setPrio] = useState("low");
  const [status, setStatus] = useState("pending");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [dashboardData, setdashboardData] = useState({});
  const [employeeData , setemployeeData] = useState([]);

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    priority: prio,
    status: status,
    deadline: "",
  });

  const getDashboardData = async()=>{
    try{
        const res = await getAdminDashboard();
        setdashboardData(res.data);
        console.log(res.data);

    }
    catch(error){
      console.log(error.message);
    }
  }

  const getEmployeeTables = async()=>{
    try{
      const res = await getEmpoyeeList();
      console.log(res.data);
    }catch(error){
      console.log(error.message);
    }
  }

  const getTaskAssigned = async () => {
    try {
      const res = await getAdminTask();
      setTaskList(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postTaskData = async () => {
    try {
      const res = await postTask(taskData);
      if (res.status === 200 || res.status === 201) {
        getTaskAssigned();
        setTaskData({
          title: "",
          description: "",
          assignedTo: "",
          deadline: "",
          priority: prio,
          status: status,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    getTaskAssigned();
  };

  const handleEdit = (id) => {
    const task = taskList.find((t) => t._id === id);
    if (task) {
      setTaskData(task);
      setEditingTaskId(id);
      setPrio(task.priority);
      setStatus(task.status);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTaskId) {
      await editTask(editingTaskId, taskData);
      setEditingTaskId(null);
    } else {
      postTaskData();
    }
    getTaskAssigned();
  };

  useEffect(() => {
    getTaskAssigned();
    getDashboardData();
    getEmployeeTables();
  }, []);

  return (
     
    <div className="min-h-screen bg-[#09090b] flex text-gray-300 font-sans relative overflow-x-hidden">
      {/* Background Micro-Grid & Glow Architecture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Sidebar />

      {/* Main Content Workspace Wrapper */}
      <div className="flex-1 p-6 lg:p-8 relative z-10 max-w-7xl mx-auto">
        
        {/* Modern Flat Page Header */}
        <div className="mb-10 flex justify-between items-center border-b border-[#1f1f23] pb-6">
          <div>
            <h1 className="text-2xl font-light text-white tracking-tight">
              Admin <span className="font-semibold text-teal-400">Dashboard</span>
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-1">Operational Control Center</p>
          </div>
        </div>

        {/* Dynamic Telemetry Banner Section */}
        <section className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AdminDashboardCard 
              title="Completed Tasks" 
              value={dashboardData.completedTasks} 
              change="Verified" 
              statusType="success" 
            />
            <AdminDashboardCard 
              title="In Progress" 
              value={dashboardData.progressTasks} 
              change="Active Sync" 
              statusType="info" 
            />
            <AdminDashboardCard 
              title="Pending Queue" 
              value={dashboardData.pendingTasks} 
              change="Idle" 
              statusType="warning" 
            />
            <AdminDashboardCard 
              title="High Priority" 
              value={dashboardData.highPriority} 
              change="Escalated" 
              statusType="danger" 
            />
          </div>
        </section>

        {/* Master Management Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column A: Task Overview Panel (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-mono uppercase tracking-wider text-gray-400">
                Assigned Workloads
              </h2>
              <span className="text-xs font-mono bg-[#141416] border border-[#1f1f23] px-2.5 py-0.5 rounded text-gray-500">
                Total: {taskList.length}
              </span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {taskList.map((task) => (
                <li
                  key={task._id}
                  className="bg-[#141416]/50 border border-[#1f1f23] rounded-xl p-5 flex flex-col justify-between backdrop-blur-sm transition-all duration-200 hover:border-[#27272a]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium text-white tracking-tight text-base line-clamp-1">
                        {task.title}
                      </h3>
                      <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded border tracking-wide whitespace-nowrap
                        ${
                          task.priority === "high"
                            ? "bg-rose-500/5 text-rose-400 border-rose-500/20"
                            : task.priority === "medium"
                            ? "bg-amber-500/5 text-amber-400 border-amber-500/20"
                            : "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
                        }
                      `}>
                        {task.priority}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed mb-4">
                      {task.description}
                    </p>
                  </div>

                  <div className="border-t border-[#1f1f23]/60 pt-3 mt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gray-500 lowercase bg-[#09090b] px-2 py-0.5 border border-[#1f1f23] rounded">
                      {task.status}
                    </span>
                    
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleEdit(task._id)}
                        className="px-2.5 py-1 text-[11px] font-medium bg-[#1c1c1f] border border-[#27272a] text-gray-300 rounded-md hover:text-white hover:bg-[#27272a] transition duration-150"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="px-2.5 py-1 text-[11px] font-medium bg-rose-950/20 border border-rose-500/20 text-rose-400 rounded-md hover:bg-rose-500/20 transition duration-150"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column B: Task Factory Form Control (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="bg-[#141416]/40 border border-[#1f1f23] rounded-xl p-6 backdrop-blur-sm sticky top-6">
              <h2 className="text-sm font-mono uppercase tracking-wider text-white mb-6 pb-2 border-b border-[#1f1f23]">
                {editingTaskId ? "Modify Node Sequence" : "Initialize Task Node"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Task Title</label>
                  <input
                    name="title"
                    value={taskData.title}
                    onChange={handleInputChange}
                    placeholder="Provide micro-system identifier..."
                    className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-teal-500/40 placeholder-gray-600 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Description Framework</label>
                  <textarea
                    name="description"
                    value={taskData.description}
                    onChange={handleInputChange}
                    placeholder="Detail explicit pipeline operational objectives..."
                    rows={3}
                    className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-teal-500/40 placeholder-gray-600 transition resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Assigned Target Signature</label>
                  <input
                    name="assignedTo"
                    value={taskData.assignedTo}
                    onChange={handleInputChange}
                    placeholder="User token or identity identifier..."
                    className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-teal-500/40 placeholder-gray-600 transition"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">State Flow</label>
                    <select
                      value={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                        setTaskData((p) => ({ ...p, status: e.target.value }));
                      }}
                      className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-teal-500/40 transition"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <div className="w-1/2">
                    <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Priority Core</label>
                    <select
                      value={prio}
                      onChange={(e) => {
                        setPrio(e.target.value);
                        setTaskData((p) => ({ ...p, priority: e.target.value }));
                      }}
                      className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-teal-500/40 transition"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Execution Milestone Window</label>
                  <input
                    type="date"
                    name="deadline"
                    value={taskData.deadline}
                    onChange={handleInputChange}
                    className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2 text-sm text-gray-300 focus:outline-none focus:border-teal-500/40 transition"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-400 text-[#09090b] py-2.5 rounded-lg text-sm font-medium hover:bg-teal-300 shadow-[0_4px_20px_rgba(45,212,191,0.15)] transition-all duration-200 mt-2"
                >
                  {editingTaskId ? "Commit Node Deployment" : "Execute Target Sequence"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Global Copilot Floating Vector */}
        <div className="fixed bottom-6 right-6 z-50">
          <NavLink to="/teamflow/admin/chatbot">
            <button className="bg-teal-400 p-4 rounded-full shadow-[0_8px_24px_rgba(45,212,191,0.3)] hover:bg-teal-300 hover:scale-105 transition-all duration-200 group">
              <svg className="w-6 h-6 text-[#09090b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};
