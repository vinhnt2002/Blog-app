import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './style.scss'


// setting layout for the firt path "/"
// Outlet like the father contain home, single,write pages
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },

]);

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}



export default App

