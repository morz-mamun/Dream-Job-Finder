import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuthProvider from "../../../CustomHooks/useAuthProvider";
import BidRequestRow from "./BidRequestRow";

const BidRequest = () => {
  const { user } = useAuthProvider();
  const [allBidProject, setAllBidProject] = useState([]);

  useEffect(() => {
    axios
      .get(`  https://dream-job-finder-server-4g7fadbl0-mamuns-projects.vercel.app/bidprojects/${user?.email}`)
      .then((res) => {
        setAllBidProject(res.data);
      });
  }, []);


  const handleAccept = (id) => {
    fetch(`  https://dream-job-finder-server-4g7fadbl0-mamuns-projects.vercel.app/bidprojects/${user?.email}/${id}`, {
        method: "PATCH",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'In Progress'})
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            const remaining = allBidProject.filter(project => project._id !== id)
            const updated = allBidProject.find(project => project._id === id)
            updated.status = 'In Progress'
            const newAllBidProject = [updated, ...remaining]
            setAllBidProject(newAllBidProject)
        }
    })
  }

  const handleReject = (id) => {
    fetch(`  https://dream-job-finder-server-4g7fadbl0-mamuns-projects.vercel.app/bidprojects/${user?.email}/${id}`, {
        method: "PATCH",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'Canceled'})
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            const remaining = allBidProject.filter(project => project._id !== id)
            const updated = allBidProject.find(project => project._id === id)
            updated.status = 'Canceled'
            const newAllBidProject = [updated, ...remaining]
            setAllBidProject(newAllBidProject)
        }
    })
  }

  return (
    <div>
      <Helmet>
        <title>Dream Job | BidRequests</title>
      </Helmet>
      <div className="max-w-7xl mx-auto my-10 min-h-screen">
        <h1 className="text-3xl font-bold text-center border-b-4 border-secondary w-fit mx-auto mb-5 uppercase">
          All Bid Request
        </h1>
        <div className="overflow-x-aut">
          <table className="table">
            {/* head */}
            <thead className="text-black text-lg">
              <tr>
                <th className="font-bold">Job Title</th>
                <th>Email</th>
                <th>Deadline</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allBidProject.map((project) => (
                <BidRequestRow
                  key={project._id}
                  project={project}
                  handleAccept={handleAccept}
                  handleReject={handleReject}
                ></BidRequestRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidRequest;
