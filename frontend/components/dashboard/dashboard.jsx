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
    const { bookings, currentUser, deleteBooking } = this.props;
    return (
      <div className="flex-container">
        <LandingNavBarContainer />
        <div className="dashboard">
          <DashboardHero bookings={bookings} currentUser={currentUser} />
          <DashboardBookings
            deleteBooking={deleteBooking}
            bookings={bookings}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
