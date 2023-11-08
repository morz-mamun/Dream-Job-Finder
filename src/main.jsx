import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./Components/Pages/Login/Login.jsx";
import Registration from "./Components/Pages/Registration/Registration.jsx";
import AddJobs from "./Components/Pages/AddJobs/AddJobs.jsx";
import JobDetails from "./Components/Pages/JobDetails/JobDetails.jsx";
import MyBid from "./Components/Pages/MyBid/MyBid.jsx";
import MyPostedJobs from "./Components/Pages/MyPostedJobs/MyPostedJobs.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Update from "./Components/Pages/Update/Update.jsx";
import BidRequest from "./Components/Pages/BidRequest/BidRequest.jsx";
import Error from "./Components/Pages/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addjobs",
        element: (
          <PrivateRoute>
            <AddJobs></AddJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/:category/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` https://dream-job-finder-server-ahb4czqop-mamuns-projects.vercel.app/${params.category}/${params.id}`),
      },
      {
        path: "/mybids",
        element: (
          <PrivateRoute>
            <MyBid></MyBid>
          </PrivateRoute>
        ),
      },
      {
        path: "/mypostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
        // loader: () => fetch(' https://dream-job-finder-server-ahb4czqop-mamuns-projects.vercel.app/addjobs')
      },
      {
        path: "/bidRequest",
        element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>

      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(` https://dream-job-finder-server-ahb4czqop-mamuns-projects.vercel.app/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
