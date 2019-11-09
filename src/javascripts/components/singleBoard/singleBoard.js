import pinData from '../../helpers/data/pinData';

import utilities from '../../helpers/utilities';

const printPinsToSingleBoard = (boardId) => {
  pinData.sortPinsByBoardId(boardId)
    .then((pins) => {
      let domString = '';
      domString += '<div class="card"></div>';
      pins.forEach((pin) => {
        domString += `
          <div class="card">
            <div class="card-body">
              <img src=${pin.imgUrl}></img>
              <p>${pin.description}</p>
             </div>
           </div>
          `;
        console.log(pin);
      });
      utilities.printToDom('boards', domString);
    })
    .catch((error) => console.error(error));
};

export default { printPinsToSingleBoard };
