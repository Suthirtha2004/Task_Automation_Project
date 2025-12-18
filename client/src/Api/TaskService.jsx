import api from "./Api"


export const getEmployeeTask=() =>{
    return api.get("/task/employee/taskview");
}

export const getAdminTask = ()=>{
    return api.get("/task/admin/taskview");
}

export const postTask = (taskData)=>{
    return api.post("/task/admin/createTask",taskData)
}