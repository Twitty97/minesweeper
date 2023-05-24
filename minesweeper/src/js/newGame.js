import { GameBoard } from './index.js';
import createLayout from './createLayout.js';

export default {
  clearStorage () {
    let counter = 0;
    let array = [];
    const createNewGamebtn = document.querySelector('.reset-btn');
    createNewGamebtn.addEventListener('click', (event) => {

      if(localStorage.getItem('counter') !== null) {
        counter = parseInt(localStorage.getItem('counter'));
      }

      if(localStorage.getItem('array') !== null) {
        array = JSON.parse(localStorage.getItem('array'));
      }

      localStorage.clear();
      localStorage.setItem('level', 'easy');
      localStorage.setItem('counter', counter);
      localStorage.setItem('array', JSON.stringify(array));
      location.reload();
      createLayout.init();
      [GameBoard.boardSize.rows, GameBoard.boardSize.cols, GameBoard.boardSize.mines] = [10, 10, 10];
      localStorage.setItem('boardSize', JSON.stringify(GameBoard.boardSize));
      GameBoard.initBoardSize();
      createGame();
    });
  }
};
