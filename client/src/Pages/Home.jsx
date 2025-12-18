import { useContext, useEffect } from "react";
import { AuthContext, useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export const Home = () =>{
    const navigate = useNavigate();
    const {userData} = useAuth();

    const handleDashboard = ()=>{
        if(userData.role=='admin'){
            navigate('/teamflow/admin');
        }else if(userData.role == 'employee'){
            navigate('/teamflow/user');
        }
    }
    useEffect(()=>{

    },[userData]);
    return (
        <>
        
        <h1>Welcome to Team Flow</h1>
        <div>
            {userData && (
                <><h1>Hello {userData.name}</h1><p>Hello {userData.email}</p><p>Hello {userData.role}</p>
                
                
                
                </>
            )}
            <button onClick={handleDashboard}>Go to Dashboard</button>
        </div>

        </>
    )
}