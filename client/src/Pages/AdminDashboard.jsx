import { useEffect, useState } from "react";
import {
  deleteTask,
  editTask,
  getAdminTask,
  postTask,
} from "../Api/TaskService";

import { TaskChatbot } from "../Components/chatbotInterface";
import { Navigate, NavLink } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { getAdminDashboard, getEmpoyeeList } from "../Api/DashboardService";
import AdminDashboardCard from "../Components/AdminDashboardCard";
import { TaskTable } from "../Components/TaskTables";
import { logoutUser } from "../Api/AuthService";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const [taskList, setTaskList] = useState([]);
  const [prio, setPrio] = useState("low");
  const [status, setStatus] = useState("pending");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [dashboardData, setdashboardData] = useState({});
  const [employees , setemployees] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    }
    catch(error){
      console.log(error.message);
    }
  }

  const getEmployeeTables = async()=>{
    try{
      const res = await getEmpoyeeList();
      setemployees(res.data.employeeData);
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
        setIsFormOpen(false);
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
      setIsFormOpen(true);
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
      setIsFormOpen(false);
    } else {
      postTaskData();
    }
    getTaskAssigned();
  };

  const navigate = useNavigate();

  const logoutFunc = async()=>{
    try{
      const res = await logoutUser();
      if(res.status === 201 || res.status === 200){
        console.log("User Logged out Successfully");
      }
      navigate('/teamflow');
      localStorage.removeItem("token");
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(() => {
    getTaskAssigned();
    getDashboardData();
    getEmployeeTables();
  }, []);

  return (
    // 1. Changed background to a slightly softer deep gray canvas so nested boxes pop out
    <div className="min-h-screen bg-zinc-900 flex text-zinc-200 font-sans antialiased">
      <Sidebar />

      {/* Workspace Wrapper */}
      <div className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8 overflow-y-auto">
        
        {/* Page Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-700/60 pb-5">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Admin Dashboard</h1>
            <p className="text-sm text-zinc-400 mt-0.5">Manage tasks, team allocation, and project status metrics.</p>
          </div>
          <button
              onClick={() => logoutFunc()}
              className="sm:self-center bg-[#f96232] hover:bg-[#e05328] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 h-11 shrink-0"
            >
              Log Out
            </button>
          
          {!isFormOpen && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="sm:self-center bg-[#f96232] hover:bg-[#e05328] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 h-11 shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Create Task
            </button>
          )}
        </div>

        {/* Analytics Summary Row */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AdminDashboardCard title="Completed Tasks" value={dashboardData.completedTasks} change="Verified" statusType="success" />
            <AdminDashboardCard title="In Progress" value={dashboardData.progressTasks} change="Active" statusType="info" />
            <AdminDashboardCard title="Pending Queue" value={dashboardData.pendingTasks} change="Idle" statusType="warning" />
            <AdminDashboardCard title="High Priority" value={dashboardData.highPriority} change="Escalated" statusType="danger" />
          </div>
        </section>

        {/* Team Section Component Container */}
        {/* 2. Isolated the table section inside a clean, defined background container */}
        <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-sm">
          <h2 className="text-sm font-bold text-white tracking-wide uppercase text-zinc-400">Team Allocation</h2>
          <div className="rounded-lg overflow-hidden border border-zinc-800">
            <TaskTable data={employees}/>
          </div>
        </section>

        {/* Workspace Dual Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Workload Stream Block */}
          <div className={`${isFormOpen ? "lg:col-span-7" : "lg:col-span-12"} space-y-4 transition-all duration-200`}>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-white tracking-wide uppercase text-zinc-400">Assigned Tasks</h2>
              <span className="text-xs bg-zinc-950 border border-zinc-700 text-white px-2.5 py-0.5 rounded-full font-semibold">
                {taskList.length}
              </span>
            </div>

            {/* 3. Changed task card background to bg-zinc-950 (pure deep pitch) to cleanly contrast against the main bg-zinc-900 canvas */}
            <ul className={`grid grid-cols-1 ${isFormOpen ? "sm:grid-cols-1 xl:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} gap-4`}>
              {taskList.map((task) => (
                <li
                  key={task._id}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between transition hover:border-zinc-700 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-semibold text-white tracking-tight text-sm line-clamp-1">{task.title}</h3>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border capitalize tracking-wide whitespace-nowrap
                        ${
                          task.priority === "high"
                            ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                            : task.priority === "medium"
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        }
                      `}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-normal line-clamp-2 leading-relaxed mb-4">{task.description}</p>
                  </div>

                  <div className="border-t border-zinc-800/80 pt-3.5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-300 bg-zinc-900 px-2.5 py-1 border border-zinc-800 rounded-md capitalize">
                      {task.status}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(task._id)}
                        className="px-3 py-1.5 text-xs font-semibold bg-zinc-900 border border-zinc-700 text-zinc-200 rounded-lg hover:text-white hover:bg-zinc-800 transition shadow-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="px-3 py-1.5 text-xs font-semibold bg-zinc-900/40 border border-zinc-800 text-zinc-400 rounded-lg hover:text-rose-400 hover:border-rose-900/40 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Action Section Container */}
          {/* 4. Highlighted the form module card with an explicit white border contrast element */}
          <div className={`${isFormOpen ? "lg:col-span-5 block" : "hidden"} w-full`}>
            <div className="bg-zinc-950 border-2 border-zinc-700/80 rounded-xl p-5 sticky top-6 shadow-xl">
              
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-zinc-800">
                <h2 className="text-sm font-bold text-white tracking-tight">
                  {editingTaskId ? "✏️ Edit Task Details" : "✨ Create New Task"}
                </h2>
                <button 
                  onClick={() => {
                    setIsFormOpen(false);
                    setEditingTaskId(null);
                  }}
                  className="text-zinc-400 hover:text-white text-xs border border-zinc-700 bg-zinc-900 px-3 py-1 rounded-lg transition font-medium"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Title</label>
                  <input
                    name="title"
                    value={taskData.title}
                    onChange={handleInputChange}
                    placeholder="Provide a clear, brief task title"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500 placeholder-zinc-500 transition font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Description</label>
                  <textarea
                    name="description"
                    value={taskData.description}
                    onChange={handleInputChange}
                    placeholder="Outline the goals and deliverables..."
                    rows={3}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500 placeholder-zinc-500 transition resize-none font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Assignee Email</label>
                  <input
                    name="assignedTo"
                    value={taskData.assignedTo}
                    onChange={handleInputChange}
                    placeholder="team-member@company.com"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500 placeholder-zinc-500 transition font-medium"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Status</label>
                    <select
                      value={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                        setTaskData((p) => ({ ...p, status: e.target.value }));
                      }}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 font-semibold transition"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <div className="w-1/2">
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Priority</label>
                    <select
                      value={prio}
                      onChange={(e) => {
                        setPrio(e.target.value);
                        setTaskData((p) => ({ ...p, priority: e.target.value }));
                      }}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 font-semibold transition"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Due Date</label>
                  <input
                    type="date"
                    name="deadline"
                    value={taskData.deadline}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 font-semibold transition color-scheme-dark"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f96232] hover:bg-[#e05328] text-white py-3 rounded-lg text-sm font-bold tracking-wider uppercase transition shadow-md mt-2"
                >
                  {editingTaskId ? "Save System Changes" : "Publish Active Task"}
                </button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Floating Copilot Overlay Portal Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <NavLink to="/teamflow/admin/chatbot">
            <button className="bg-[#f96232] hover:bg-[#e05328] p-4 rounded-full shadow-lg transition transform hover:scale-105">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};