import $ from 'jquery';

import firebase from 'firebase/app';
import 'firebase/auth';

import pinData from '../../helpers/data/pinData';

import utilities from '../../helpers/utilities';


const closeBoard = () => {
  const { uid } = firebase.auth().currentUser;
  $(document).click((e) => {
    const buttonId = e.target.id;
    if (buttonId === 'closeBoardButton') {
      console.log('ahoy');
      console.log(document.getElementById('boards').innerHTML);
      // eslint-disable-next-line no-undef
      showAllBoards(uid);
      console.log(document.getElementById('boards').innerHTML);
    }
  });
};


const printPinsToSingleBoard = (boardId) => {
  console.log('singleboard.js');
  pinData.sortPinsByBoardId(boardId)
    .then((pins) => {
      let domString = '';
      domString += '<div class="card">';
      domString += '<button class="btn btn-dark closeBoard" id="closeBoardButton">Close Board</button></div>';
      pins.forEach((pin) => {
        domString += `
          <div class="card">
            <div class="card-body">
              <img src=${pin.imgUrl}></img>
              <p>${pin.description}</p>
              <button class="btn btn-warning deletePin" id="deletePinButton">Delete Pin</button>
              </div>
           </div> 
          `;
      });
      utilities.printToDom('boards', domString);
      // eslint-disable-next-line no-undef
      $('.card').on('click', '#closeBoardButton', closeBoard);
    })
    .catch((error) => console.error(error));
};

export default { printPinsToSingleBoard };
