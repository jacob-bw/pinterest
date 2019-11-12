import $ from 'jquery';

import firebase from 'firebase/app';
import 'firebase/auth';

import pinData from '../../helpers/data/pinData';
import boardsData from '../../helpers/data/boardsData';
import utilities from '../../helpers/utilities';
// import singleboard from '../singleBoard/singleBoard';


import './boards.scss';


const getboardId = (e) => {
  console.log('getboardid running');
  const boardId = e.target.id;
  // eslint-disable-next-line no-use-before-define
  printPinsToSingleBoard(boardId);
};

const showAllBoards = (uid) => {
  boardsData.getBoardsById(uid)
    .then((boards) => {
      let domString = '';
      boards.forEach((board) => {
        domString += '<div class="myBoards" class="d-flex flex-wrap">';
        domString += `
        <div class="card col-4" id="${board.id}">
          <p>${board.description}</p>
          <button type="button" class="btn btn-primary expandBoard" id="${board.id}">View Full Board</button>
        </div>
        `;
        domString += '</div>';
      });
      utilities.printToDom('boards', domString);
      $('.myBoards').on('click', '.expandBoard', getboardId);
    })
    .catch((error) => console.error(error));
};

const closeBoard = () => {
  const { uid } = firebase.auth().currentUser;
  $(document).click((e) => {
    const buttonId = e.target.id;
    if (buttonId === 'closeBoardButton') {
      // eslint-disable-next-line no-undef
      showAllBoards(uid);
    }
  });
};

const printPinsToSingleBoard = (boardId) => {
  console.log('boards.js');
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

export default { showAllBoards };
