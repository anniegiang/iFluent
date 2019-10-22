import React from "react";
import DashboardHero from "./dashboard_hero";
import DashboardBookings from "./dashboard_bookings";
import LandingNavBarContainer from "../navbar/landing_navbar_container";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchAllBookings();
  }

  render() {
    if (!this.props.bookings) {
      return;
    }
    const { bookings, currentUser } = this.props;
    return (
      <div className="flex-container">
        <div style={{ position: "static", zIndex: "inherit" }}>
          <LandingNavBarContainer />
          <div className="dashboard">
            <DashboardHero bookings={bookings} currentUser={currentUser} />
            <DashboardBookings bookings={bookings} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
