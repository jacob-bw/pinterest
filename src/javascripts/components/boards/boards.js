import boardsData from '../../helpers/data/boardsData';
import utilities from '../../helpers/utilities';

import './boards.scss';

const showAllBoards = (uid) => {
  boardsData.getBoardsById(uid)
    .then((boards) => {
      let domString = '';
      domString += '<div id="myBoards" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += `
        <div class="card col-4" id="${board.id}">
          <p>${board.description}</p>
        </div>
        `;
        utilities.printToDom('boards', domString);
      })
        .catch((error) => console.error(error));
    });
};

export default { showAllBoards };
