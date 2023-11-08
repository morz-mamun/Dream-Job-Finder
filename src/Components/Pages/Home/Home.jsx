import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory';
import HelpToConnect from './HelpToConnect';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <HelpToConnect></HelpToConnect>
        </div>
    );
};

export default Home;