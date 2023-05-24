import boardLayout from './createLayout.js';
import themeMode from './changeTheme.js';
import levelSwitch from './levelSwitch.js';
import renderBoard from './renderBoard.js';
import newGame from './newGame.js';
import storeResult from './storeResult.js';
import soundSwitch from './soundSwitch.js';

window.addEventListener('DOMContentLoaded', () => {
  boardLayout.init();
  themeMode.switchTheme();
  levelSwitch.switchLevel();
  GameBoard.initBoardSize();
  newGame.clearStorage();
  soundSwitch.regulateSound();
  createGame();
  clickersLoad();
  storeResult.tableGenerate();
});

export const GameBoard = {
  boardSize: {
    rows: 10,
    cols: 10,
    mines: 10
  },
  initBoardSize () {
    if (!localStorage.getItem('boardSize')) {
      localStorage.setItem('boardSize', JSON.stringify(this.boardSize));
    } else {
      this.boardSize = JSON.parse(localStorage.getItem('boardSize'));
    }
    renderBoard.render();
  }
};

export class MinesweeperGame {
  constructor () {
    let savedGameObject = {};
    if (localStorage.getItem('data')) {
      savedGameObject = JSON.parse(localStorage.getItem('data'));
    }
    Object.assign(
      this,
      {
        grid: [],
        cellContainer: null,
        gameStatus: 'Ongoing...',
        playing: true,
        movesNum: 0,
        foundMines: 0,
        flagCounter: 0,
        gameTimer: null,
        timeLapse: '00:00:00',
        lastSavedHour: 0,
        lastSavedMinute: 0,
        lastSavedSecond: 0,
        firstReveal: false,
        assignBoard: {
          rows: GameBoard.boardSize.rows,
          cols: GameBoard.boardSize.cols,
          mines: GameBoard.boardSize.mines
        }
      },
      savedGameObject
    );
  }

  initGame () {
    game.cellContainer = document.querySelectorAll('.cell');

    for (let r = 0; r < game.assignBoard.rows; r++) {
      game.grid[r] = [];
      for (let c = 0; c < game.assignBoard.cols; c++) {
        cell = new Cell({ x: r, y: c });
        game.grid[r].push(cell);
      }
    }
    cell.renderCell();
    game.renderText();
    game.startTimer();
    game.checkSavedResults();

  };

  checkSavedResults() {
    if(localStorage.getItem('array') !== null) {
      storeResult.tableGenerate();
      storeResult.loadSavedTable();
    } else {
      storeResult.tableGenerate();
    }
  };

  populateMines(argCell) {
    let setMines = 0;
    while (setMines < game.assignBoard.mines) {
      const xIndex = Math.floor(Math.random() * game.assignBoard.rows);
      const yIndex = Math.floor(Math.random() * game.assignBoard.cols);
      const cell = game.grid[xIndex][yIndex];
      if (!cell.isMine && cell !== argCell) {
        cell.isMine = true;
        cell.value = 'M';
        setMines++;
      }
    }
  };

  calculateAdjacent() {
    for (let i = 0; i < game.grid.length; i++) {
      for (let j = 0; j < game.grid[i].length; j++) {
        if (game.grid[i][j].value !== 'M') {
          let counter = 0;
          const adjCells = game.calculateMines(i, j);
          for (let i = adjCells.length; i--;) {
            if (adjCells[i].isMine) {
              counter++;
            }
          }
          game.grid[i][j].value = counter;
        }
      }
    }
  };

  loadSavedGame () {
    game.cellContainer = document.querySelectorAll('.cell');
    for (let r = 0; r < game.assignBoard.rows; r++) {
      for (let c = 0; c < game.assignBoard.cols; c++) {
        cell = new Cell(this.grid[r][c]);
        game.grid[r][c] = cell;
      }
    }
    cell.renderLoadedCell();
    game.renderText();
    game.startTimer();
    game.checkSavedResults();
  };

  firstClickCheckReveal() {
    let revealCounter = 0;
    for (let i = 0; i < game.grid.length; i++) {
      for (let j = 0; j < game.grid[i].length; j++) {
        if(game.grid[i][j].isRevealed) {
          revealCounter++;
        }
      }
    }
    if (revealCounter > 0) {
      game.firstReveal = true;
    } else {
      game.firstReveal = false;
    }
  };

  calculateMines (i, j) {
    const arrayOfcells = [];
    for (let iPos = i > 0 ? -1 : 0; iPos <= (i < game.assignBoard.rows - 1 ? 1 : 0); iPos++) {
      for (let jPos = j > 0 ? -1 : 0; jPos <= (j < game.assignBoard.cols - 1 ? 1 : 0); jPos++) {
        arrayOfcells.push(game.grid[i + iPos][j + jPos]);
      }
    }
    return arrayOfcells;
  };

  renderText () {
    const statusMsg = document.querySelector('.result__score');
    const movesText = document.querySelector('.clicks-counter');
    game.gameTimer = document.querySelector('.game-duration');
    statusMsg.textContent = game.gameStatus;
    movesText.textContent = game.movesNum;
    game.gameTimer.textContent = game.timeLapse;
  };

  startTimer = () => {
    game.gameTimer = document.querySelector('.game-duration');
    clearInterval(timeInterval);
    let second = game.lastSavedSecond;
    let minute = game.lastSavedMinute;
    let hour = game.lastSavedHour;
    timeInterval = setInterval(function () {
      if (game.playing) {
        game.timeLapse = (hour < 10 ? '0' + game.lastSavedHour : game.lastSavedHour) + ':' + (minute < 10 ? '0' + game.lastSavedMinute : game.lastSavedMinute) + ':' + (second < 10 ? '0' + game.lastSavedSecond : game.lastSavedSecond);
        second++;
        if (second === 60) {
          minute++;
          second = 0;
        }
        if (minute === 60) {
          hour++;
          minute = 0;
        }
        game.lastSavedHour = hour;
        game.lastSavedMinute = minute;
        game.lastSavedSecond = second;
        game.gameTimer.textContent = game.timeLapse;
        game.saveTheGame();
      }
    }, 1000);
  };

  revealCell (cell) {
    if (!cell.isRevealed && !cell.isFlagged && game.playing) {
      if (soundSwitch.soundMode) {
        clicksound.play();
      }
      const revealedCell = cell.getCell();
      cell.isRevealed = true;
      revealedCell.classList.add('revealed');

      if (cell.value === 1 && cell.isRevealed) {
        revealedCell.setAttribute('style', 'color: red');
      } else if (cell.value === 2 && cell.isRevealed) {
        revealedCell.setAttribute('style', 'color: blue');
      } else if (cell.value === 3 && cell.isRevealed) {
        revealedCell.setAttribute('style', 'color: green');
      } else if (cell.value === 4 && cell.isRevealed) {
        revealedCell.setAttribute('style', 'color: brown');
      }

      revealedCell.textContent = (!cell.isMine ? cell.value || '' : '');

      if (cell.isMine) {
        if (soundSwitch.soundMode) {
          losesound.play();
        }
        game.playing = false;
        game.gameStatus = `Game Over! You lost. ${game.movesNum} moves, ${game.timeLapse} time`;
        game.renderText();
        storeResult.tableGenerate();
        storeResult.populateTable(game.gameStatus);
        revealedCell.classList.add('mine');
      } else if (!cell.isFlagged && cell.value === 0) {
        const adjCells = game.calculateMines(cell.x, cell.y);
        for (let i = 0, len = adjCells.length; i < len; i++) {
          this.revealCell(adjCells[i]);
        }
      }
    }
    game.checkTheBoard();
  };

  flagCell (cell) {
    const flaggedCell = cell.getCell();
    if (flaggedCell.classList.contains('flagged')) {
      if (soundSwitch.soundMode) {
        clicksound.play();
      }
      flaggedCell.classList.remove('flagged');
      cell.isFlagged = false;
      game.flagCounter--;
      if(cell.isMine) {
        game.foundMines--;
        game.checkIfWon();
      }
    } else {
      if (game.flagCounter < game.assignBoard.mines) {
        if (soundSwitch.soundMode) {
          clicksound.play();
        }
        flaggedCell.classList.add('flagged');
        cell.isFlagged = true;
        game.flagCounter++;
        if(cell.isMine) {
          game.foundMines++;
          game.checkIfWon();
        }
      }
    }
  };

  checkIfWon () {
    if (game.foundMines === game.assignBoard.mines && game.foundMines === game.flagCounter) {
      if (soundSwitch.soundMode) {
        winsound.play();
      }
      game.playing = false;
      game.gameStatus = `You won! ${game.movesNum} moves, ${game.timeLapse} time`;
      game.renderText();
      storeResult.tableGenerate();
      storeResult.populateTable(game.gameStatus);
    }
  };

  checkTheBoard () {
    let counter = 0;
    for (let i = 0; i < game.grid.length; i++) {
      for (let j = 0; j < game.grid[i].length; j++) {
        if (game.grid[i][j].isRevealed && !game.grid[i][j].isMine) {
          counter++;
        }
      }
    }

    if (counter + game.assignBoard.mines === game.assignBoard.mines * game.assignBoard.mines) {
      if (soundSwitch.soundMode) {
        winsound.play();
      }
      game.playing = false;
      game.gameStatus = `You won! ${game.movesNum} moves, ${game.timeLapse} time`;
      game.renderText();
      storeResult.tableGenerate();
      storeResult.populateTable(game.gameStatus);
    }
  };

  saveTheGame () {
    localStorage.setItem('data', JSON.stringify(this));
  }
}
export class Cell {
  constructor ({
    x,
    y,
    value = 0,
    isMine = false,
    isRevealed = false,
    isFlagged = false
  }) {
    Object.assign(this, {
      x,
      y,
      value,
      isMine,
      isRevealed,
      isFlagged
    });
  }

  renderCell () {
    let counter = 0;
    for (let i = 0; i < game.grid.length; i++) {
      for (let j = 0; j < game.grid[i].length; j++) {
        game.cellContainer[counter].setAttribute('data-x', game.grid[i][j].x);
        game.cellContainer[counter].setAttribute('data-y', game.grid[i][j].y);
        counter++;
      }
    }
  }

  renderLoadedCell () {
    console.log('trying to load saved');
    let counter = 0;
    for (let i = 0; i < game.grid.length; i++) {
      for (let j = 0; j < game.grid[i].length; j++) {
        game.cellContainer[counter].setAttribute('data-x', game.grid[i][j].x);
        game.cellContainer[counter].setAttribute('data-y', game.grid[i][j].y);
        cell = game.grid[i][j].getCell();

        if (game.grid[i][j].value === 1 && game.grid[i][j].isRevealed) {
          cell.setAttribute('style', 'color: red');
        } else if (game.grid[i][j].value === 2 && game.grid[i][j].isRevealed) {
          cell.setAttribute('style', 'color: blue');
        } else if (game.grid[i][j].value === 3 && game.grid[i][j].isRevealed) {
          cell.setAttribute('style', 'color: green');
        } else if (game.grid[i][j].value === 4 && game.grid[i][j].isRevealed) {
          cell.setAttribute('style', 'color: brown');
        }

        if (game.grid[i][j].isFlagged) {
          cell.classList.add('flagged');
        } else if (game.grid[i][j].isRevealed) {
          cell.classList.add('revealed');
          if (game.grid[i][j].isMine) {
            cell.classList.add('mine');
          } else {
            cell.textContent = (game.grid[i][j].value > 0) ? game.grid[i][j].value : ' ';
          }
        }
        counter++;
      }
    }
  }

  getCell () {
    return document.querySelector(
      `.cell[data-x="${this.x}"][data-y="${this.y}"]`
    );
  }
}

export function createGame () {
  game = new MinesweeperGame();
  if (!localStorage.getItem('data')) {
    game.initGame();
  } else {
    game.loadSavedGame();
  }
  game.saveTheGame();
}

function clickersLoad () {
  const gameBoardContainer = document.querySelector('.gameboard__container')

  gameBoardContainer.addEventListener('click', (event) => {
    game.firstClickCheckReveal();
    const clickedArea = event.target;
    if (clickedArea.classList.contains('cell')) {
      const xPos = clickedArea.getAttribute('data-x');
      const yPos = clickedArea.getAttribute('data-y');
      const cell = game.grid[xPos][yPos];

      if(!game.firstReveal) {
        game.firstReveal = true;
        game.populateMines(cell);
        game.calculateAdjacent();
      }
      
      if (!cell.isRevealed && !cell.isFlagged && game.playing) {
        game.movesNum++;
        game.renderText();
        game.revealCell(cell);
        game.saveTheGame();
      }
    }
  });

  gameBoardContainer.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // disable a context menu from showing up
    const clickedArea = event.target;
    if (clickedArea.classList.contains('cell')) {
      const xPos = clickedArea.getAttribute('data-x');
      const yPos = clickedArea.getAttribute('data-y');
      const cell = game.grid[xPos][yPos];
      if (!cell.isRevealed && game.playing) {
        game.movesNum++;
        game.renderText();
        game.flagCell(cell);
        game.saveTheGame();
      }
    }
  });
}

// global variables for creating a game, for setting a timer
let game;
let cell;
let timeInterval;
const losesound = new Audio('src/assets/fail.mp3');
const winsound = new Audio('src/assets/victory.mp3');
const clicksound = new Audio('src/assets/click.mp3');
