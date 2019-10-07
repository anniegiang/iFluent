import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const TeacherCardRight = props => {
  return (
    <Tabs className="search-teacher-card_right">
      <TabList>
        <Tab>Video</Tab>
        <Tab>Intro</Tab>
        <Tab>Calendar</Tab>
      </TabList>

      <TabPanel>
        <iframe src={props.teacher.videoUrl}></iframe>
      </TabPanel>

      <TabPanel>
        <p>{props.teacher.aboutMe}</p>
      </TabPanel>

      <TabPanel>
        <p>Calendar goes here</p>
      </TabPanel>
    </Tabs>
  );
};

export default TeacherCardRight;
