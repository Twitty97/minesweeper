import createLayout from './createLayout.js';
import soundSwitch from './soundSwitch.js';

export default {
  switchTheme () {
    const switcher = document.getElementById('switch__input-darkmode');
    const bg = document.querySelector('.body');
    const heading = document.querySelector('.info__title');
    const info = document.querySelector('.info__rules');
    const resetBtn = document.querySelector('.reset-btn');
    const scoreBtn = document.querySelector('.table-btn');
    const board = document.querySelector('.gameboard__container');
    const resultTitle = document.querySelector('.result__title');
    const resultScore = document.querySelector('.result__score');
    const clicksTitle = document.querySelector('.fill-in__clicks');
    const timeTitle = document.querySelector('.fill-in__time');
    const clicksNum = document.querySelector('.clicks-counter');
    const timeNum = document.querySelector('.game-duration');
    const inputCheck = document.getElementById('switch__input-darkmode');
    const switchSoundOffOn = document.querySelector('.sound-btn');
    const clicksound = new Audio('src/assets/click.mp3');

    switcher.addEventListener('click', (event) => {
      if (soundSwitch.soundMode) {
        clicksound.play();
      }
      createLayout.mode = !createLayout.mode;
      localStorage.setItem('mode', createLayout.mode);
      if (!createLayout.mode) {
        bg.classList.add('bg-light');
        heading.classList.add('dark-text');
        info.classList.add('dark-text');
        resultTitle.classList.add('dark-text');
        resultScore.classList.add('dark-text');
        clicksTitle.classList.add('dark-text');
        timeTitle.classList.add('dark-text');
        clicksNum.classList.add('dark-text');
        timeNum.classList.add('dark-text');
        resetBtn.classList.add('bg-btn-blue');
        scoreBtn.classList.add('bg-btn-blue');
        switchSoundOffOn.classList.add('bg-btn-blue');
        board.classList.add('bg-light');

        bg.classList.remove('bg-dark');
        heading.classList.remove('pink-text');
        info.classList.remove('pink-text');
        resultTitle.classList.remove('light-text');
        resultScore.classList.remove('light-text');
        clicksTitle.classList.remove('light-text');
        timeTitle.classList.remove('light-text');
        clicksNum.classList.remove('light-text');
        timeNum.classList.remove('light-text');
        resetBtn.classList.remove('bg-btn-pink');
        scoreBtn.classList.remove('bg-btn-pink');
        switchSoundOffOn.classList.remove('bg-btn-pink');
        board.classList.remove('board-grey');

        inputCheck.removeAttribute('checked', true);
      } else {
        bg.classList.remove('bg-light');
        heading.classList.remove('dark-text');
        info.classList.remove('dark-text');
        resultTitle.classList.remove('dark-text');
        resultScore.classList.remove('dark-text');
        clicksTitle.classList.remove('dark-text');
        timeTitle.classList.remove('dark-text');
        clicksNum.classList.remove('dark-text');
        timeNum.classList.remove('dark-text');
        resetBtn.classList.remove('bg-btn-blue');
        scoreBtn.classList.remove('bg-btn-blue');
        switchSoundOffOn.classList.remove('bg-btn-blue');
        board.classList.remove('bg-light');

        bg.classList.add('bg-dark');
        heading.classList.add('pink-text');
        info.classList.add('pink-text');
        resultTitle.classList.add('light-text');
        resultScore.classList.add('light-text');
        clicksTitle.classList.add('light-text');
        timeTitle.classList.add('light-text');
        clicksNum.classList.add('light-text');
        timeNum.classList.add('light-text');
        resetBtn.classList.add('bg-btn-pink');
        scoreBtn.classList.add('bg-btn-pink');
        switchSoundOffOn.classList.add('bg-btn-pink');
        board.classList.add('board-grey');

        inputCheck.setAttribute('checked', true);
      }
    });
  }
};
