import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const TeacherCardRight = props => {
  return (
    <Tabs className="search-teacher-card_right">
      <TabList>
        <Tab>Video</Tab>
        <Tab>Intro</Tab>
      </TabList>

      <div className="teacher-card-tab-active"></div>
      <TabPanel className="teacher-card-tab-body">
        <div className="teacher-card-video">
          <div className="iframe-video">
            <div className="video-player">
              {/* <video controls controlsList="nodownload">
                <source src={props.teacher.videoUrl} />
              </video> */}
              <iframe
                src={props.teacher.videoUrl}
                frameBorder="0"
                width="100%"
                height="422"
                title="video"
                allowFullScreen=""
              ></iframe>
              {/* <div className="video-poster-overlay">
                <i className="video-play-icon"></i>
              </div> */}
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel className="teacher-card-tab-body">
        <p className="teacher-card-intro">{props.teacher.aboutMe}</p>
      </TabPanel>
    </Tabs>
  );
};

export default TeacherCardRight;
