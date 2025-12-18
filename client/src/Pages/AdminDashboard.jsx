import { useEffect, useState } from "react";
import { getAdminTask, postTask } from "../Api/TaskService"

export const AdminDashboard = ()=>{

    const [taskList,setTaskList] = useState([]);

    const [prio,setPrio] = useState("low");
    const [status,setStatus] = useState("pending");

    const [taskData,setTaskData] = useState({
        title:"",
        description:"",
        assignedTo : "",
        priority : prio,
        status : status,
        deadline: ""
    })
    const getTaskAssigned=async()=>{
        try{
            const res=await getAdminTask();
            console.log(res.data);
            setTaskList(res.data);
        }catch(error){
            console.log(error.message);
        }
    }

    const postTaskData = async() =>{
        try{
            const res = await postTask(taskData);
            if(res.status === 201 || res.status === 200){
              setTaskData([...res.data,taskData]);
              
            }
            setTaskData({title:"",description:"",assignedTo:"",deadline:""});
            console.log("Task Created Successfully;")
        }catch(error){
          console.log("Task not created",error.message);
        }
    }

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setTaskData(prev=>({
          ...prev,
          [name]:value
        }))
        console.log(taskData);
    }

    const handleSelectedStatus = (e)=>{
        const newStatus = e.target.value;
        setStatus(newStatus);
        setTaskData(prev=>({
            ...prev,
            status:newStatus
        }))
        console.log(newStatus);
    }

    const handleSelectedPrio = (e)=>{
      const newPrio = e.target.value;
      setPrio(newPrio);
      setTaskData(prev=>({
        ...prev,
        priority : newPrio
      }))
      console.log(newPrio);
    }
    const handleSubmit =async(event)=>{
        event.preventDefault();
        postTaskData();
    }

    useEffect(()=>{
        getTaskAssigned();
    },[])
    return(
        <>
        <div>
            <p>Hello Admin !</p>
            <h2>Task Assigned List</h2>
            <ul>
                {taskList.map(task=>(
                    <li key={task._id}>
                        <p>{task.description}</p>
                        <p>{task.title}</p>
                        <p>{task.priority}</p>
                    </li>
            ))}
            </ul>
        </div>
        <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-black">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-black">
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Create And Assign Task</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6">
        <div>
        <label htmlFor="title" className="block text-sm/6 font-medium text-gray-100">Title</label>
        <div className="mt-2">
          <input 
          id = "title"
          type="text" 
          name="title"
          onChange={handleInputChange}
          value = {taskData.title}
          required 
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm/6 font-medium text-gray-100">Description</label>
        <div className="mt-2">
          <input 
          id = "description"
          type="text" 
          name="description" 
          onChange={handleInputChange}
          value={taskData.description}
          required 
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="assignedTo" className="block text-sm/6 font-medium text-gray-100">Assigned To</label>
        </div>
        <div className="mt-2">
          <input 
          id ="assignedTo"
          type="text" 
          name="assignedTo"
          onChange={handleInputChange}
          value = {taskData.assignedTo}
          required 
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />

        </div>
      </div>
      <div>
        <label htmlFor="status" className="block text-sm/6 font-medium text-gray-100">Status</label>
        <div className="mt-2">
          <select 
          id="status"
          onChange={handleSelectedStatus}
          value={status}
          className="bg-white rounded-2xl">
              <option value="pending">Pending</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
        </select>
        </div>
      </div>
      <div>
        <label htmlFor="priority" className="block text-sm/6 font-medium text-gray-100">Priority</label>
        <div className="mt-2">
          <select 
          id="priority"
          onChange={handleSelectedPrio}
          value={prio}
          className="bg-white rounded-2xl">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
        </select>
        </div>
      </div>
       <div>
        <div className="flex items-center justify-between">
          <label htmlFor="deadline" className="block text-sm/6 font-medium text-gray-100">Deadline</label>
        </div>
        <div className="mt-2">
          <input 
          id ="deadline"
          type="date" 
          name="deadline"
          onChange={handleInputChange}
          value={taskData.deadline}
          required 
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />

        </div>
      </div>
      <button type="submit" className="w-50 rounded-m px-3 py-1.5 mt-5 rounded-4xl bg-blue-700 text-white">Submit Task</button>

      
    </form>

 
  </div>
 </div>
        
        </div>
        </>
    )
}