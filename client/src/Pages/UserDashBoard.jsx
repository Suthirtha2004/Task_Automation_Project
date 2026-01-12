import { useEffect, useState } from "react";
import { editTaskStatus, getEmployeeTask } from "../Api/TaskService";

export const UserDashboard = () => {
  const [taskData, setTaskData] = useState([]);
  const [statusEdit,setStatusEdit] = useState({});

  const getTaskList = async () => {
    try {
      const res = await getEmployeeTask();
      if (res.status === 200 || res.status === 201) {
        setTaskData(res.data);
      } else {
        console.log("Data not found");
      }
    } catch (error) {
      console.log(error.message);
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
        const res = await editTaskStatus(id,newStatus);
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
    handleEditfunc();
    getTaskList();

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-center mb-8">
        <div className="bg-indigo-600 px-6 py-3 rounded-2xl shadow-lg">
          <h1 className="text-white text-xl font-semibold">
            Hello Employee 👋
          </h1>
        </div>
      </div>

      {/* Task Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl p-4 mb-6 shadow">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Task Details
          </h2>
        </div>

        {/* Tasks Grid */}
        {taskData.length === 0 ? (
          <p className="text-center text-gray-500">
            No tasks assigned yet.
          </p>
        ) : (
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskData.map((task) => (
              <li
                key={task._id}
                className="bg-white rounded-xl shadow-md p-5 flex flex-col
                           hover:shadow-xl transition-shadow duration-200"
              >
                <p className="text-xs text-gray-400 mb-1">
                  Task ID: {task._id}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {task.title}
                </h3>

                <p className="text-gray-600 text-sm flex-grow">
                  {task.description}
                </p>

                <p className="text-gray-600 text-sm flex-grow">
                  {task.status}
                </p>

                {/* Priority Badge */}
                <span
                  className={`mt-4 inline-block px-3 py-1 text-sm rounded-full font-medium w-fit
                    ${
                      task.priority === "high"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }
                  `}
                >
                  {task.priority.toUpperCase()} PRIORITY
                </span>
                <p>
                    <button onClick={()=>handleEditfunc(task._id)}>Edit Status</button>
                    <input 
                     name = "status"
                     value={statusEdit[task._id] || ""}
                     onChange={(e)=>handleEditStatus(task._id,e.target.value)}
                     placeholder="Change status"/>

                </p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};
