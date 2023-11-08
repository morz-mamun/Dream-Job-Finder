import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WebDevelopment from "../../Category/WebDevelopment/WebDevelopment";
import DigitalMarketing from "../../Category/DigitalMarketing/DigitalMarketing";
import GraphicsDesign from "../../Category/GraphicsDesign/GraphicsDesign";


const JobCategory = () => {

  return (
    <div className="max-w-7xl mx-auto my-20">
      <p className="text-5xl text-center mb-10 border-b-4 uppercase border-secondary w-fit mx-auto">Job Category</p>
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
         <WebDevelopment></WebDevelopment>
        </TabPanel>
        <TabPanel>
          <DigitalMarketing></DigitalMarketing>
        </TabPanel>
        <TabPanel>
          <GraphicsDesign></GraphicsDesign>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
