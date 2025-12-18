import { useEffect, useState } from "react";
import { getEmployeeTask } from "../Api/TaskService"

export const UserDashboard = ()=>{

    const[taskData,settaskData] = useState([]);

    
    const getTaskList = async()=>{
        try{
             const res = await getEmployeeTask();
             if(res.status === 201 || res.status === 200){
                console.log(res.data);
                settaskData(res.data);
             }else{
                console.log("data not found");
             }
        }catch(error){
                console.log(error.message);
        }
    }

    useEffect(()=>{
        getTaskList();
    },[])
    return (
        <>
        Hello Employee !
        <h2>TASK DETAILS</h2>
        <ol>
        {taskData.map(task=>(
            <li key = {task._id}>
                <p>{task._id}</p>
                <p>{task.description}</p>
                <p>{task.title}</p>
            </li>
            
    ))}
        </ol>
        </>
    )
}