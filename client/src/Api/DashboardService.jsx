import api from "./Api";

export const getAdminDashboard=()=>{
    return api.get("/admin/dashboard");
}

export const getEmployeeDashboard=()=>{
    return api.get("/employee/dashboard");
}

export const getEmpoyeeList = () =>{
    return api.get("/admin/dashboard/employeeList");
}