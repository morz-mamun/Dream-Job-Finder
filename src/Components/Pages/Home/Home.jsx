import  { useEffect } from "react";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import HelpToConnect from "./HelpToConnect";
import MoreExplore from "./MoreExplore";
import { useLocation } from "react-router-dom";
import {Helmet} from "react-helmet";

const Home = () => {
    // const location = useLocation()

    // const routeName = location.pathname === '/' ? 'Home' : location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2)

    // useEffect(() => {
    //     document.title = `Dream Job/${routeName}`
    // },[routeName])
  return (
    <div>
        <Helmet>
            <title>Dream Job | Home</title>
        </Helmet>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <HelpToConnect></HelpToConnect>
      <MoreExplore></MoreExplore>
    </div>
  );
};

export default Home;
