import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseurl = apiKeys.firebaseKeys.databaseURL;

const sortPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseurl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const allPins = response.data;
      console.log(response.data);
      const pins = [];
      console.log({ pins });
      Object.keys(allPins).forEach((fbId) => {
        allPins[fbId].id = fbId;
        pins.push(allPins[fbId]);
      });
      resolve(pins);
    })
    .catch((error) => reject(error));
});

export default { sortPinsByBoardId };
