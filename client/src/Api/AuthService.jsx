import api from "./Api";

export const registerUser = (formData) =>{
    return api.post('/user/register',formData);
}

export const loginUser = (loginData) =>{
    return api.post('/user/login',loginData);
}

export const getUser = () =>{
    return api.get("/user/me");
}

export const logoutUser = ()=>{
    return api.get("/user/logout")
}