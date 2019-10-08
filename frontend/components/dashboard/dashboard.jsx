import React from "react";
import DashboardHero from "./dashboard_hero";
import LandingNavBarContainer from "../navbar/landing_navbar_container";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-container">
        <div style={{ position: "static", zIndex: "inherit" }}>
          <LandingNavBarContainer />
          <div className="dashboard">
            <DashboardHero
              lessons={this.props.lessons}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
