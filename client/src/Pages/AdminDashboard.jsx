import { useEffect, useState } from "react";
import {
  deleteTask,
  editTask,
  getAdminTask,
  postTask,
} from "../Api/TaskService";

import { TaskChatbot } from "../Components/chatbotInterface";
import { NavLink } from "react-router-dom";

export const AdminDashboard = () => {
  const [taskList, setTaskList] = useState([]);
  const [prio, setPrio] = useState("low");
  const [status, setStatus] = useState("pending");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    priority: prio,
    status: status,
    deadline: "",
  });

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
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8 flex justify-center">
        <div className="bg-indigo-600 text-white px-8 py-3 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold">Admin Dashboard 🛠️</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Task List */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Assigned Tasks
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {taskList.map((task) => (
              <li
                key={task._id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {task.description}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {task.status}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        task.priority === "high"
                          ? "bg-red-100 text-red-600"
                          : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }
                    `}
                  >
                    {task.priority}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(task._id)}
                      className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Task Form */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            {editingTaskId ? "Edit Task" : "Create Task"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="title"
              value={taskData.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="w-full border rounded-lg px-3 py-2"
              required
            />

            <textarea
              name="description"
              value={taskData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full border rounded-lg px-3 py-2"
              required
            />

            <input
              name="assignedTo"
              value={taskData.assignedTo}
              onChange={handleInputChange}
              placeholder="Assigned To"
              className="w-full border rounded-lg px-3 py-2"
              required
            />

            <div className="flex gap-4">
              <select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  setTaskData((p) => ({ ...p, status: e.target.value }));
                }}
                className="w-1/2 border rounded-lg px-3 py-2"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>

              <select
                value={prio}
                onChange={(e) => {
                  setPrio(e.target.value);
                  setTaskData((p) => ({ ...p, priority: e.target.value }));
                }}
                className="w-1/2 border rounded-lg px-3 py-2"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <input
              type="date"
              name="deadline"
              value={taskData.deadline}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700"
            >
              {editingTaskId ? "Update Task" : "Create Task"}
            </button>
          </form>
        </div>
      </div>
      <div class="fixed bottom-6 right-6 z-50">
        <NavLink to = "/teamflow/admin/chatbot">
  <button class="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
    </svg>
  </button>
  </NavLink>
</div>
    </div>
  );
};
