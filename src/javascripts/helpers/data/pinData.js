import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseurl = apiKeys.firebaseKeys.databaseURL;

const sortPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseurl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const allPins = response.data;
      console.log(allPins);
      const pins = [];
      Object.keys(allPins).forEach((fbId) => {
        allPins[fbId].id = fbId;
        pins.push(allPins[fbId]);
      });
      resolve(pins);
    })
    .catch((error) => reject(error));
  console.log(boardId);
});

const getboardId = (e) => {
  const boardId = e.target.id;
  console.log('this should be the board id for the button clicked', boardId);
  sortPinsByBoardId(boardId);
};

export default { sortPinsByBoardId, getboardId };
