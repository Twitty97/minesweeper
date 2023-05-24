import { GameBoard, createGame } from './index.js';
import createLayout from './createLayout.js';

export default {
  level: {
    easy: true,
    medium: false,
    hard: false
  },
  options: {
    easyOp: null,
    mediumOp: null,
    hardOp: null
  },
  switchLevel () {
    this.options.easyOp = document.getElementById('level-easy');
    this.options.mediumOp = document.getElementById('level-medium');
    this.options.hardOp = document.getElementById('level-hard');
    let counter = 0;
    let array = [];

    this.options.easyOp.addEventListener('click', () => {
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
      [this.level.easy, this.level.medium, this.level.hard] = [true, false, false];
      [GameBoard.boardSize.rows, GameBoard.boardSize.cols, GameBoard.boardSize.mines] = [10, 10, 10];
      localStorage.setItem('boardSize', JSON.stringify(GameBoard.boardSize));
      GameBoard.initBoardSize();
      createGame();
    });

    this.options.mediumOp.addEventListener('click', () => {
      if(localStorage.getItem('counter') !== null) {
        counter = parseInt(localStorage.getItem('counter'));
      }

      if(localStorage.getItem('array') !== null) {
        array = JSON.parse(localStorage.getItem('array'));
      }

      localStorage.clear();
      localStorage.setItem('level', 'medium');
      localStorage.setItem('counter', counter);
      localStorage.setItem('array', JSON.stringify(array));
      location.reload();
      createLayout.init();
      [this.level.easy, this.level.medium, this.level.hard] = [false, true, false];
      [GameBoard.boardSize.rows, GameBoard.boardSize.cols, GameBoard.boardSize.mines] = [15, 15, 15];
      localStorage.setItem('boardSize', JSON.stringify(GameBoard.boardSize));
      GameBoard.initBoardSize();
      createGame();
    });

    this.options.hardOp.addEventListener('click', () => {
      if(localStorage.getItem('counter') !== null) {
        counter = parseInt(localStorage.getItem('counter'));
      }

      if(localStorage.getItem('array') !== null) {
        array = JSON.parse(localStorage.getItem('array'));
      }

      localStorage.clear();
      localStorage.setItem('level', 'hard');
      localStorage.setItem('counter', counter);
      localStorage.setItem('array', JSON.stringify(array));
      location.reload();
      createLayout.init();
      [this.level.easy, this.level.medium, this.level.hard] = [false, false, true];
      [GameBoard.boardSize.rows, GameBoard.boardSize.cols, GameBoard.boardSize.mines] = [25, 25, 25];
      localStorage.setItem('boardSize', JSON.stringify(GameBoard.boardSize));
      GameBoard.initBoardSize();
      createGame();
    });
  }
};
