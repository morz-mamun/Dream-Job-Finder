import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const JobCategory = () => {
  return (
    <div className="max-w-7xl mx-auto my-20"> 
        <p className="text-5xl text-center mb-10">Job Category</p>
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
