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
      .get(`http://localhost:5000/bidprojects/${user?.email}`)
      .then((res) => {
        setAllBidProject(res.data);
      });
  }, []);


  const handleAccept = (id) => {
    
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
