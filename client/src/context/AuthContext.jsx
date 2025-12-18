import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../Api/AuthService";


export const useAuth =()=> useContext(AuthContext);
export const AuthContext = createContext();

export const AuthContextProvider = (props)=>{

    const [isLoggedIn , setisLoggedIn] = useState(false)
    const [userData , setuserData] = useState({});

    const getUserData = async()=>{
        try{
            const res=await getUser();
            if(res.status===201 || res.status===200){
                
                setuserData(res.data);
                setisLoggedIn(true);
                
            }else{
                console.log("User not authorized");
                setisLoggedIn(false);
            }
            
        }catch(error){
                console.log(error.message);
                setisLoggedIn(false);
        }
    }
    const value = {
        userData,setuserData,
        isLoggedIn,setisLoggedIn,
        getUserData
    }

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            getUserData();
        }else{
            setisLoggedIn(false);
        }
    },[])
    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
