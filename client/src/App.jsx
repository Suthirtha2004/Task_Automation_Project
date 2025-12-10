import { useState } from 'react'
import './App.css'
import { Login } from './Pages/Login'
import { SignUp } from './Pages/SignUp'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { WebLayout } from './Components/Layout/WebLayout'
import { Home } from './Pages/Home'

function App() {

  const router = createBrowserRouter([
    {
      path : "/teamflow",
      element : <WebLayout/>,
      children : [
        {
          path : '/teamflow',
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
      ]
    },

  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
