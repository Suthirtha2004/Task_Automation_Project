import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../Api/AuthService";


export function Login(){
  const [loginData,setloginData] = useState({
    email : "",
    password: ""
  })

  const navigate = useNavigate();
  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setloginData(prev => ({
      ...prev,
      [name]:value
    }))
    console.log(loginData);
  }

  const LoginUser = async()=>{
      try{
        const response = await loginUser(loginData);
        if(response.data === 201 || response.data === 200){
          setloginData([...response.data,loginData]);
        }
        setloginData({email:"",password:""});
        localStorage.setItem("token",response.data.accessToken);
        navigate('/teamflow/home');
        console.log(response.data.accessToken);
      }catch(error){
        console.log("Login unsuccessful");
      }
    }
  const handleSubmit = (e)=>{
    e.preventDefault();
    LoginUser();
  }
    return(
        <>
        <h1>Login Page</h1>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-black">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-black">
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
        <div className="mt-2">
          <input 
          id="email" 
          type="email" 
          name="email" 
          onChange={handleInputChange}
          value = {loginData.email}
          required 
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
          <div className="text-sm">
            <NavLink to="/" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</NavLink>
          </div>
        </div>
        <div className="mt-2">
          <input 
          id="password" 
          type="password" 
          name="password" 
          onChange={handleInputChange}
          value={loginData.password}
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          
        <button type="submit" className="w-50 rounded-m px-3 py-1.5 m-3.5 rounded-4xl bg-blue-700 text-white">Sign in</button>
        </div>
      </div>

      
    </form>
    
      <NavLink to="/teamflow/signup">
      <p className="font-semibold text-indigo-400 hover:text-indigo-300">Sign Up to access Team Flow</p>
      </NavLink>
  </div>
</div>
        </>

    )
}
