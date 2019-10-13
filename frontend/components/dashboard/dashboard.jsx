import React from "react";
import DashboardHero from "./dashboard_hero";
import DashboardBookings from "./dashboard_bookings";
import LandingNavBarContainer from "../navbar/landing_navbar_container";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBookings();
    debugger;
  }

  render() {
    if (!this.props.bookings) {
      return;
    }
    debugger;
    return (
      <div className="flex-container">
        <div style={{ position: "static", zIndex: "inherit" }}>
          <LandingNavBarContainer />
          <div className="dashboard">
            <DashboardHero
              bookings={this.props.bookings}
              currentUser={this.props.currentUser}
            />
            <DashboardBookings bookings={this.props.bookings} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
