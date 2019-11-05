// create a function that displays all pins sorted by boardId

// first
// create boardsData.json file within src/javascripts/helpers/data folder - DONE
// import api keys + axios - DONE
// set baseurl variable - DONE

// build a dom string
// h2 that says MY BOARDS
// div with an id = myBoards, class=d-flex flex-wrap
// should print a bootstrap card for each board displaying board name and description (title img to follow)
// when single board is clicked, clicked board should expand to display all connected pins and hide all else.
// expanded board card should have option to close expanded version and go back to View All Boards

import boardsData from '../../helpers/data/boardsData';
import utilities from '../../helpers/utilities';

const showAllBoards = () => {
  let domString = '<h2>MY BOARDS</h2>';
  domString += `${boardsData.getBoards()}`;
  // // print boards
  console.log(boardsData.getBoards());
  utilities.printToDom('boards', domString);
};

export default { showAllBoards };
