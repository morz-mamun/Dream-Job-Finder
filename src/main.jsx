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
import MyBid from './Components/Pages/MyBid/MyBid.jsx';
import MyPostedJobs from './Components/Pages/MyPostedJobs/MyPostedJobs.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Update from './Components/Pages/Update/Update.jsx';

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
        path: "/:category/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/${params.category}/${params.id}`)
      },
      {
        path: '/mybids',
        element: <PrivateRoute>
          <MyBid></MyBid>
        </PrivateRoute>
      },
      {
        path: '/mypostedJobs',
        element: <PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>,
        // loader: () => fetch('http://localhost:5000/addjobs')
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
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
