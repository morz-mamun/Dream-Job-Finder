import { useState } from "react";
import useAuthProvider from "../../../CustomHooks/useAuthProvider";
import { useEffect } from "react";
import axios from "axios";
import MyBidRow from "./MyBidRow";
import { Helmet } from "react-helmet";

const MyBid = () => {
  const { user } = useAuthProvider();

  const [bidProjects, setBidProjects] = useState([]);

  const url = `http://localhost:5000/bidprojects?email=${user?.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setBidProjects(res.data);
    });
  }, []);

  return (
   <div>
    <Helmet>
      <title>Dream Job | MyBids</title>
    </Helmet>
     <div className="max-w-7xl mx-auto my-10 min-h-screen">
        <h1 className="text-3xl font-bold text-center border-b-4 border-secondary w-fit mx-auto mb-5">All Bid Projects</h1>
      <div className="overflow-x-aut">
        <table className="table">
          {/* head */}
          <thead className="text-black text-lg" >
            <tr>
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           
           {
            bidProjects.map(project => <MyBidRow key={project._id} project={project}></MyBidRow>)
           }
            
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
};

export default MyBid;
