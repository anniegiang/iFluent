import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllUsers, fetchUser } from './util/users_api_util';
import { fetchAllLanguages, fetchTeachersByLanguage } from './util/languages_api_util';
import { fetchTeacher, fetchAllTeachers } from './util/teachers_api_util';

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
  
  // testing
  window.state = store.getState();
  window.fetchAllUsers = fetchAllUsers;
  window.fetchUser = fetchUser;
  window.fetchAllLanguages = fetchAllLanguages;
  window.fetchTeachersByLanguage = fetchTeachersByLanguage;
  window.fetchAllTeachers = fetchAllTeachers;
  window.fetchTeacher = fetchTeacher;
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});