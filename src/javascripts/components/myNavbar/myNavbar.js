import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbarLogoutButton');
const boardsDiv = $('#boards');

const logoutEvent = () => {
  logoutButton.click((e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        authDiv.classlist.add('hide');
        logoutButton.classlist.add('hide');
        boardsDiv.classlist.add('hide');
      }).catch((err) => console.error('you are still logged in', err));
  });
};

export default { logoutEvent };
