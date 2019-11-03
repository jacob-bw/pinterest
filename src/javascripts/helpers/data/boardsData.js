import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseurl = apiKeys.firebaseKeys.databaseURL;

// function that imports boards object from data and converts into array - done
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseurl}/boards.json`)
    .then((response) => {
      const demBoards = response.data;
      const boards = [];
      Object.keys(demBoards).forEach((fbId) => {
        demBoards[fbId].id = fbId;
        boards.push(demBoards[fbId]);
      });
      resolve(boards);
      console.log(boards);
    })
    .catch((error) => reject(error));
});

export default { getBoards };
