import firebase from 'firebase';

import auth from './components/Auth/auth';

import apiKeys from './helpers/data/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
};

init();
