import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../Api/AuthService";
import loginPic from '../Public/Assets/loginPic.jpg';


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
        <div className="min-h-screen flex">
          {/* Welcome Section */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-8" style={{ backgroundImage: `url(${loginPic})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome to Task Flow</h1>
              <p className="text-lg">Manage your tasks efficiently and collaborate with your team.</p>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8">
            <div className="w-full max-w-sm">
              <h2 className="text-center text-2xl font-bold text-white mb-8">Sign in to your account</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email address</label>
                  <div className="mt-2">
                    <input 
                      id="email" 
                      type="email" 
                      name="email" 
                      onChange={handleInputChange}
                      value={loginData.email}
                      required 
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-100">Password</label>
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
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
                    />
                    <button type="submit" className="w-full mt-4 rounded-md bg-blue-700 px-3 py-1.5 text-white hover:bg-blue-600">Sign in</button>
                  </div>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <NavLink to="/teamflow/signup">
                  <p className="font-semibold text-indigo-400 hover:text-indigo-300">Sign Up to access Team Flow</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
