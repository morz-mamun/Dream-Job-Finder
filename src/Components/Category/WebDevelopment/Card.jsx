import React from "react";
import { Link } from "react-router-dom";

const Card = ({ job }) => {
  const {
    _id,
    email,
    jobTitle,
    deadline,
    description,
    minimumPrice,
    maximumPrice,
    category,
  } = job;
  return (
    <div className="card rounded-lg hover:bg-gray-600 hover:text-white rounded-t-md border-2 border-black border-s-fuchsia-300 h-full bg-pink-50">
       <div className="card-body">
          <h2 className="card-title font-bold border-b-4 border-red-600 w-fit uppercase">
            {category}
          </h2>
          <h1 className=""><span className="font-bold">Job Title:</span> {jobTitle}</h1>
          <h1 className=""><span className="font-bold">Deadline:</span> {deadline}</h1>
          <h1 className="">
            <span className="font-bold">Price Range: </span>{minimumPrice} - {maximumPrice}
          </h1>
          <h1 className="">
           <span className="font-bold"> Description:</span> <span className="">{description}</span>{" "}
          </h1>
        </div>
        <div className="text-center mb-5">
        <Link to={`/${category}/${_id}`}> <button className="btn btn-secondary text-black">Bid Now</button></Link>
     </div>
    </div>
  );
};

export default Card;
