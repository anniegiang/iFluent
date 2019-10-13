import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login, signup, logout } from "./util/session_api_util";
import { fetchAllBookings, fetchBooking } from "./util/bookings_api_util";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.fetchAllBookings = fetchAllBookings;
  window.fetchBooking = fetchBooking;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
