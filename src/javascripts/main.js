import firebase from 'firebase';

import auth from './components/Auth/auth';
import logout from './components/myNavbar/myNavbar';
import loggedin from './helpers/data/authData';
import boards from './components/boards/boards';
import apiKeys from './helpers/data/apiKeys.json';
import singleBoard from './components/singleBoard/singleBoard';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  logout.logoutEvent();
  loggedin.loginStatus();
  boards.showAllBoards();
  singleBoard.printPinsToSingleBoard();
};

init();
