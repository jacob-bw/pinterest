import pinData from '../../helpers/data/pinData';

import utilities from '../../helpers/utilities';

const printPinsToSingleBoard = (pinBoardId) => {
  pinData.sortPinsByBoardId(pinBoardId)
    .then((pins) => {
      let domString = '';
      domString += '<div class="card"></div>';
      pins.forEach((pin) => {
        domString += `<div class="card">
          <div class="card-body">
          <img src=${pin.imgUrl}></img>
          </div>
          </div>
          `;
      });
      utilities.printToDom('boards', domString);
    })
    .catch((error) => console.error(error));
};

export default { printPinsToSingleBoard };
