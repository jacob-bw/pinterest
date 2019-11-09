import $ from 'jquery';

import boardsData from '../../helpers/data/boardsData';
import utilities from '../../helpers/utilities';
import pinData from '../../helpers/data/pinData';

import './boards.scss';

const showAllBoards = (uid) => {
  boardsData.getBoardsById(uid)
    .then((boards) => {
      let domString = '';
      boards.forEach((board) => {
        domString += '<div class="myBoards" class="d-flex flex-wrap">';
        domString += `
        <div class="card col-4" id="${board.id}">
          <p>${board.description}</p>
          <button type="button" class="btn btn-primary expandBoard" id="${board.id}" data-toggle="modal" data-target="#exampleModal">View Full Board</button>
        </div>
        `;
        domString += '</div>';
      });
      utilities.printToDom('boards', domString);
      $('.myBoards').on('click', '.expandBoard', pinData.getboardId);
    })
    .catch((error) => console.error(error));
};

export default { showAllBoards };
