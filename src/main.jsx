import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Registration from './Components/Pages/Registration/Registration.jsx';
import AddJobs from './Components/Pages/AddJobs/AddJobs.jsx';
import JobDetails from './Components/Pages/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addjobs',
        element: <AddJobs></AddJobs>
      },
      {
        path: "jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
