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

      <TabPanel className="teacher-card-tab-body">
        <div className="teacher-card-video">
          <div className="iframe-video">
            <div className="video-player">
              <iframe src={props.teacher.videoUrl}></iframe>
              <div className="video-poster-overlay">
                <i class="video-play-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel className="teacher-card-tab-body">
        <p className="teacher-card-intro">{props.teacher.aboutMe}</p>
      </TabPanel>

      <TabPanel className="teacher-card-tab-body">
        <p>Calendar goes here</p>
      </TabPanel>
    </Tabs>
  );
};

export default TeacherCardRight;
