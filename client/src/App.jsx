import { useState } from 'react'
import './App.css'
import { Login } from './Pages/Login'
import { SignUp } from './Pages/SignUp'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { WebLayout } from './Components/Layout/WebLayout'
import { Home } from './Pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import { AdminDashboard } from './Pages/AdminDashboard'
import { UserDashboard } from './Pages/UserDashBoard'

function App() {

  const router = createBrowserRouter([
    {
      path : "/teamflow",
      element : <WebLayout/>,
      children : [
        {
          path : '/teamflow/home',
          element : <Home/>
        },
        {
          path : '/teamflow/signup',
          element :<SignUp/>
        },
        {
          path : '/teamflow/login',
          element : <Login/>
        },
        {
          path : '/teamflow/admin',
          element : <AdminDashboard/>
        },
        {
          path : '/teamflow/user',
          element : <UserDashboard/>
        }

      ]
    },

  ])

  return (
    <>
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
     
    </>
  )
}

export default App
