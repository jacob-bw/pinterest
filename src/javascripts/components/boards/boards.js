import boardsData from '../../helpers/data/boardsData';
import utilities from '../../helpers/utilities';
import pinData from '../../helpers/data/pinData';

import './boards.scss';

const showAllBoards = (uid) => {
  boardsData.getBoardsById(uid)
    .then((boards) => {
      let domString = '';
      boards.forEach((board) => {
        domString += '<div id="myBoards" class="d-flex flex-wrap">';
        domString += `
        <div class="card col-4" id="${board.id}">
          <p>${board.description}</p>
          <button class="btn btn-primary expandBoard">View Full Board</button>
        </div>
        `;
        domString += '</div>';
      });
      utilities.printToDom('boards', domString);
      $('#myBoards').on('click', '.expandBoard', pinData.sortPinsByBoardId);
    })
    .catch((error) => console.error(error));
};

// const printPinsToBoards = (pinBoardId) => {
//   pinData.sortPinsByBoardId(pinBoardId)
//     .then((pins) => {
//       let domString = '';
//       domString += '<div class="card"></div>';
//       pins.forEach((pin) => {
//         domString += `<div class="card">
//           <div class="card-body">
//           <img src=${pin.imgUrl}></img>
//           </div>
//           </div>
//           `;
//       });
//       utilities.printToDom('pins', domString);
//     })
//     .catch((error) => console.error(error));
//   console.log(printPinsToBoards);
// };


export default { showAllBoards };
