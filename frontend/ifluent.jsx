import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllTeacherDetails, fetchTeacherDetail } from './util/teacher_details';

document.addEventListener('DOMContentLoaded', () => {
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

  window.fetchAllTeacherDetails = fetchAllTeacherDetails;
  window.fetchTeacherDetail = fetchTeacherDetail;
  window.state = store.getState();

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});