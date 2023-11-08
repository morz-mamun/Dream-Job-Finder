import React from "react";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import HelpToConnect from "./HelpToConnect";
import MoreExplore from "./MoreExplore";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <HelpToConnect></HelpToConnect>
      <MoreExplore></MoreExplore>
    </div>
  );
};

export default Home;
