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

export const deleteTask = (id)=>{
    return api.delete(`/task/admin/deleteTask/${id}`);
}

export const editTask = (id)=>{
    return api.put(`/task/admin/updateTask/${id}`);
}