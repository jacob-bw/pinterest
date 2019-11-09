import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseurl = apiKeys.firebaseKeys.databaseURL;

const sortPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseurl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const allPins = response.data;
      const pins = [];
      Object.keys(allPins).forEach((fbId) => {
        allPins[fbId].id = fbId;
        pins.push(allPins[fbId]);
      });
      resolve(pins);
      console.log('these are the pins for', boardId, pins);
    })
    .catch((error) => reject(error));
});


export default { sortPinsByBoardId };
