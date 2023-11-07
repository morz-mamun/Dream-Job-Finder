import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../WebDevelopment/Card";

const GraphicsDesign = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/addjobs/Graphics%20Design")
      .then((res) => {
        setAllJobs(res.data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 place-items-center">
      {allJobs.map((job) => (
        <Card key={job._id} job={job}></Card>
      ))}
    </div>
  );
};

export default GraphicsDesign;
