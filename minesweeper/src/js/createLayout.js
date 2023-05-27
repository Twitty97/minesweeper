export default {
  elements: {
    main: null,
    container: null,
    infoSection: null,
    infoTitle: null,
    infoRules: null,
    infoWrapper: null,
    resetButton: null,
    dropdownContainer: null,
    dropdownButton: null,
    dropdownContent: null,
    contentWrapper: null,
    wrapperTitle: null,
    closeIcon: null,
    gameBoard: null,
    gameBoardContainer: null,
    containerFill: null,
    fillClicks: null,
    fillTime: null,
    spanClicks: null,
    spanTime: null,
    functionalitySection: null,
    functionalityTheme: null,
    themeSwitch: null,
    themeSwitchInput: null,
    themeSwitchLabel: null,
    switchSunImg: null,
    switchMoonImg: null,
    functionalityLevel: null,
    levelSwitch: null,
    levelSwitchInputEasy: null,
    levelSwitchLabelEasy: null,
    levelSwitchInputMid: null,
    levelSwitchLabelMid: null,
    levelSwitchInputHard: null,
    levelSwitchLabelHard: null,
    switchIndicator: null,
    gameResultContainer: null,
    resultTitle: null,
    resultScore: null,
    buttonSoundIcon: null,
    soundIcon: null,
  },

  checkLevel: {
    level: 'easy'
  },

  mode: false,

  init () {
    // create elements
    if (!localStorage.getItem('level')) {
      localStorage.setItem('level', 'easy');
      this.checkLevel.level = 'easy';
    } else {
      this.checkLevel.level = localStorage.getItem('level');
    }

    if (!localStorage.getItem('mode')) {
      localStorage.setItem('mode', false);
      this.mode = false;
    } else {
      this.mode = JSON.parse(localStorage.getItem('mode'));
    }

    this.elements.main = document.createElement('main');
    document.body.appendChild(this.elements.main);
    this.elements.container = document.createElement('container');
    this.elements.main.appendChild(this.elements.container);
    this.elements.infoSection = document.createElement('section');
    this.elements.container.appendChild(this.elements.infoSection);
    this.elements.infoTitle = document.createElement('h3');
    this.elements.infoRules = document.createElement('h4');
    this.elements.infoSection.appendChild(this.elements.infoTitle);
    this.elements.infoSection.appendChild(this.elements.infoRules);
    this.elements.infoWrapper = document.createElement('div');
    this.elements.infoSection.appendChild(this.elements.infoWrapper);
    this.elements.resetButton = document.createElement('button');
    this.elements.infoWrapper.appendChild(this.elements.resetButton);
    this.elements.dropdownContainer = document.createElement('div');
    this.elements.infoWrapper.appendChild(this.elements.dropdownContainer);
    this.elements.dropdownButton = document.createElement('button');
    this.elements.dropdownContainer.appendChild(this.elements.dropdownButton);
    this.elements.dropdownContent = document.createElement('div');
    this.elements.dropdownContainer.appendChild(this.elements.dropdownContent);
    this.elements.contentWrapper = document.createElement('div');
    this.elements.dropdownContent.appendChild(this.elements.contentWrapper);
    this.elements.wrapperTitle = document.createElement('strong');
    this.elements.contentWrapper.appendChild(this.elements.wrapperTitle);
    this.elements.buttonSoundIcon = document.createElement('button');
    this.elements.infoWrapper.appendChild(this.elements.buttonSoundIcon);
    this.elements.closeIcon = document.createElement('i');
    this.elements.contentWrapper.appendChild(this.elements.closeIcon);
    this.elements.soundIcon = document.createElement('i');
    this.elements.buttonSoundIcon.appendChild(this.elements.soundIcon);

    this.elements.gameBoard = document.createElement('section');
    this.elements.container.appendChild(this.elements.gameBoard);
    this.elements.gameBoardContainer = document.createElement('div');
    this.elements.gameBoard.appendChild(this.elements.gameBoardContainer);

    this.elements.functionalitySection = document.createElement('div');
    this.elements.infoSection.appendChild(this.elements.functionalitySection);
    this.elements.functionalityTheme = document.createElement('div');
    this.elements.functionalitySection.appendChild(this.elements.functionalityTheme);
    this.elements.themeSwitch = document.createElement('div');
    this.elements.functionalityTheme.appendChild(this.elements.themeSwitch);
    this.elements.themeSwitchInput = document.createElement('input');
    this.elements.themeSwitchLabel = document.createElement('label');
    this.elements.themeSwitch.appendChild(this.elements.themeSwitchInput);
    this.elements.themeSwitch.appendChild(this.elements.themeSwitchLabel);
    this.elements.switchSunImg = document.createElement('img');
    this.elements.switchMoonImg = document.createElement('img');
    this.elements.themeSwitchLabel.appendChild(this.elements.switchSunImg);
    this.elements.themeSwitchLabel.appendChild(this.elements.switchMoonImg);

    this.elements.functionalityLevel = document.createElement('div');
    this.elements.functionalitySection.appendChild(this.elements.functionalityLevel);
    this.elements.levelSwitch = document.createElement('div');
    this.elements.functionalityLevel.appendChild(this.elements.levelSwitch);
    this.elements.levelSwitchInputEasy = document.createElement('input');
    this.elements.levelSwitchLabelEasy = document.createElement('label');
    this.elements.levelSwitch.appendChild(this.elements.levelSwitchInputEasy);
    this.elements.levelSwitch.appendChild(this.elements.levelSwitchLabelEasy);
    this.elements.levelSwitchInputMid = document.createElement('input');
    this.elements.levelSwitchLabelMid = document.createElement('label');
    this.elements.levelSwitch.appendChild(this.elements.levelSwitchInputMid);
    this.elements.levelSwitch.appendChild(this.elements.levelSwitchLabelMid);
    this.elements.levelSwitchInputHard = document.createElement('input');
    this.elements.levelSwitchLabelHard = document.createElement('label');
    this.elements.levelSwitch.appendChild(this.elements.levelSwitchInputHard);
    this.elements.levelSwitch.appendChild(this.elements.levelSwitchLabelHard);
    this.elements.switchIndicator = document.createElement('div');
    this.elements.levelSwitch.appendChild(this.elements.switchIndicator);
    this.elements.containerFill = document.createElement('div');
    this.elements.gameBoard.appendChild(this.elements.containerFill);
    this.elements.fillClicks = document.createElement('span');
    this.elements.spanClicks = document.createElement('span');
    this.elements.fillTime = document.createElement('span');
    this.elements.spanTime = document.createElement('span');
    this.elements.containerFill.appendChild(this.elements.fillClicks);
    this.elements.containerFill.appendChild(this.elements.spanClicks);
    this.elements.containerFill.appendChild(this.elements.fillTime);
    this.elements.containerFill.appendChild(this.elements.spanTime);

    this.elements.gameResultContainer = document.createElement('div');
    this.elements.infoSection.appendChild(this.elements.gameResultContainer);
    this.elements.resultTitle = document.createElement('span');
    this.elements.resultScore = document.createElement('span');
    this.elements.gameResultContainer.appendChild(this.elements.resultTitle);
    this.elements.gameResultContainer.appendChild(this.elements.resultScore);

    // add classes to the elements

    this.elements.main.classList.add('main');
    this.elements.container.classList.add('container');
    this.elements.infoSection.classList.add('info');
    this.elements.infoTitle.classList.add('info__title');
    this.elements.infoRules.classList.add('info__rules');
    this.elements.infoWrapper.classList.add('info__wrapper');
    this.elements.resetButton.classList.add('wrapper__btn', 'reset-btn');
    this.elements.dropdownContainer.classList.add('wrapper__btn', 'dropdown');
    this.elements.dropdownButton.classList.add('dropdown__btn', 'table-btn');
    this.elements.buttonSoundIcon.classList.add('wrapper__btn', 'sound-btn');
    this.elements.dropdownContent.classList.add('dropdown__content');
    this.elements.contentWrapper.classList.add('content__wrapper');
    this.elements.wrapperTitle.classList.add('wrapper__title');
    this.elements.closeIcon.classList.add('fa-solid', 'fa-x');
    this.elements.soundIcon.classList.add('fa-solid', 'fa-volume-high');

    this.elements.gameBoard.classList.add('gameboard');
    this.elements.gameBoardContainer.classList.add('gameboard__container');
    this.elements.containerFill.classList.add('container__fill-in');
    this.elements.fillClicks.classList.add('fill-in__clicks');
    this.elements.fillTime.classList.add('fill-in__time');
    this.elements.spanClicks.classList.add('clicks-counter');
    this.elements.spanTime.classList.add('game-duration');

    this.elements.functionalitySection.classList.add('functionality');
    this.elements.functionalityTheme.classList.add('functionality__theme');
    this.elements.themeSwitch.classList.add('theme__switch');
    this.elements.themeSwitchInput.setAttribute('id', 'switch__input-darkmode');
    this.elements.themeSwitchInput.setAttribute('type', 'checkbox');
    this.elements.themeSwitchLabel.classList.add('switch__label-darkmode');
    this.elements.themeSwitchLabel.setAttribute('for', 'switch__input-darkmode');
    this.elements.switchSunImg.classList.add('switch__sun-img');
    this.elements.switchSunImg.setAttribute('src', './src/assets/sun.svg');
    this.elements.switchMoonImg.classList.add('switch__moon-img');
    this.elements.switchMoonImg.setAttribute('src', './src/assets/moon.svg');

    this.elements.functionalityLevel.classList.add('functionality__level');
    this.elements.levelSwitch.classList.add('level__switch');
    this.elements.levelSwitchInputEasy.classList.add('switch__input');
    this.elements.levelSwitchInputEasy.setAttribute('id', 'level-easy');
    this.elements.levelSwitchInputEasy.setAttribute('type', 'radio');
    this.elements.levelSwitchInputEasy.setAttribute('name', 'switch');
    this.elements.levelSwitchLabelEasy.classList.add('switch__label');
    this.elements.levelSwitchLabelEasy.setAttribute('id', 'label-level-easy');
    this.elements.levelSwitchLabelEasy.setAttribute('for', 'level-easy');

    this.elements.levelSwitchInputMid.classList.add('switch__input');
    this.elements.levelSwitchInputMid.setAttribute('id', 'level-medium');
    this.elements.levelSwitchInputMid.setAttribute('type', 'radio');
    this.elements.levelSwitchInputMid.setAttribute('name', 'switch');

    this.elements.levelSwitchLabelMid.classList.add('switch__label');
    this.elements.levelSwitchLabelMid.setAttribute('id', 'label-level-medium');
    this.elements.levelSwitchLabelMid.setAttribute('for', 'level-medium');

    this.elements.levelSwitchInputHard.classList.add('switch__input');
    this.elements.levelSwitchInputHard.setAttribute('id', 'level-hard');
    this.elements.levelSwitchInputHard.setAttribute('type', 'radio');
    this.elements.levelSwitchInputHard.setAttribute('name', 'switch');

    if (this.checkLevel.level === 'easy') {
      this.elements.levelSwitchInputEasy.setAttribute('checked', true);
    } else if (this.checkLevel.level === 'medium') {
      this.elements.levelSwitchInputMid.setAttribute('checked', true);
    } else if (this.checkLevel.level === 'hard') {
      this.elements.levelSwitchInputHard.setAttribute('checked', true);
    }

    this.elements.levelSwitchLabelHard.classList.add('switch__label');
    this.elements.levelSwitchLabelHard.setAttribute('id', 'label-level-hard');
    this.elements.levelSwitchLabelHard.setAttribute('for', 'level-hard');
    this.elements.switchIndicator.classList.add('switch__indicator');
    this.elements.gameResultContainer.classList.add('game__result');
    this.elements.resultTitle.classList.add('result__title');
    this.elements.resultScore.classList.add('result__score');

    // add text

    this.elements.infoTitle.textContent = 'Minesweeper';
    this.elements.infoRules.textContent = 'Instructions: use left click to reveal a cell, right click to flag a cell.';
    this.elements.resetButton.textContent = 'Reset Game';
    this.elements.dropdownButton.textContent = 'Results Table';
    this.elements.wrapperTitle.textContent = 'Latest scores';
    this.elements.levelSwitchLabelEasy.textContent = 'Easy';
    this.elements.levelSwitchLabelMid.textContent = 'Medium';
    this.elements.levelSwitchLabelHard.textContent = 'Hard';
    this.elements.fillClicks.textContent = 'Moves: ';
    this.elements.fillTime.textContent = 'Time: ';
    this.elements.resultTitle.textContent = 'Game Result: ';

    // switch theme

    const bg = document.querySelector('body');

    if (!this.mode) {
      bg.classList.add('bg-light');
      this.elements.infoTitle.classList.add('dark-text');
      this.elements.infoRules.classList.add('dark-text');
      this.elements.fillClicks.classList.add('dark-text');
      this.elements.fillTime.classList.add('dark-text');
      this.elements.resultTitle.classList.add('dark-text');
      this.elements.resultScore.classList.add('dark-text');
      this.elements.spanClicks.classList.add('dark-text');
      this.elements.spanTime.classList.add('dark-text');
      this.elements.resetButton.classList.add('bg-btn-blue');
      this.elements.dropdownButton.classList.add('bg-btn-blue');
      this.elements.gameBoardContainer.classList.add('bg-light');
      this.elements.buttonSoundIcon.classList.add('bg-btn-blue');
      this.elements.themeSwitchInput.removeAttribute('checked', true);
    } else {
      bg.classList.add('bg-dark');
      this.elements.infoTitle.classList.add('pink-text');
      this.elements.infoRules.classList.add('pink-text');
      this.elements.fillClicks.classList.add('light-text');
      this.elements.fillTime.classList.add('light-text');
      this.elements.resultTitle.classList.add('light-text');
      this.elements.resultScore.classList.add('light-text');
      this.elements.spanClicks.classList.add('light-text');
      this.elements.spanTime.classList.add('light-text');
      this.elements.resetButton.classList.add('bg-btn-pink');
      this.elements.dropdownButton.classList.add('bg-btn-pink');
      this.elements.gameBoardContainer.classList.add('board-grey');
      this.elements.buttonSoundIcon.classList.add('bg-btn-pink');
      this.elements.themeSwitchInput.setAttribute('checked', true);
    }
  }
};
