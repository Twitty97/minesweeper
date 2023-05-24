import { GameBoard } from './index.js';

export default {
  boardElements: {
    gContainer: null,
    row: null,
    col: null
  },
  clear () {
    this.boardElements.gContainer = document.querySelector('.gameboard__container');
    while (this.boardElements.gContainer.hasChildNodes()) {
      this.boardElements.gContainer.removeChild(this.boardElements.gContainer.firstChild);
    }
  },
  render () {
    // clear the board before adding
    this.clear();

    for (let i = 0; i < GameBoard.boardSize.rows; i++) {
      this.boardElements.row = document.createElement('div');
      this.boardElements.row.classList.add('row');
      this.boardElements.gContainer.appendChild(this.boardElements.row);
      for (let j = 0; j < GameBoard.boardSize.cols; j++) {
        this.boardElements.col = document.createElement('div');
        this.boardElements.col.classList.add('cell');
        this.boardElements.row.appendChild(this.boardElements.col);
      }
    }
  }
};
