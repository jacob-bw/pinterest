import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseurl = apiKeys.firebaseKeys.databaseURL;

// function that imports boards object from data and converts into array - done
const getBoardsById = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseurl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demBoards = response.data;
      const boards = [];
      Object.keys(demBoards).forEach((fbId) => {
        demBoards[fbId].id = fbId;
        boards.push(demBoards[fbId]);
      });
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const deleteBoardById = (boardIdToDelete) => axios.delete(`${baseurl}/boards/${boardIdToDelete}.json`);

export default { getBoardsById, deleteBoardById };
