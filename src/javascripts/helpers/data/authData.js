import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbarLogoutButton');
const boardsDiv = $('#boards');

const loginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      boardsDiv.removeClass('hide');
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
    } else {
      boardsDiv.addClass('hide');
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { loginStatus };
