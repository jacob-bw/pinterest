import firebase from 'firebase';

import auth from './components/Auth/auth';
import logout from './components/myNavbar/myNavbar';
import loggedin from './helpers/data/authData';

import apiKeys from './helpers/data/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  logout.logoutEvent();
  loggedin.loginStatus();
};

init();
