export default {
  elements: {
    dropdownButton: null,
    dropdownContent: null,
    contentWrapper: null,
    wrapperTitle: null,
    closeIcon: null,
    contentLine: null,
  },
  store: {
    counter: 0,
    arraySaved: [],
    current: ''
  },

  tableGenerate () {
    this.elements.dropdownButton = document.querySelector('.table-btn');
    this.elements.closeIcon = document.querySelector('.fa-x');
    this.elements.dropdownContent = document.querySelector('.dropdown__content');
    this.elements.bodyElement = document.querySelector('.body');

    this.elements.dropdownButton.addEventListener('click', (event) => {
      this.elements.dropdownContent.classList.add('show-content');
    });

    this.elements.closeIcon.addEventListener('click', (event) => {
      this.elements.dropdownContent.classList.remove('show-content');
    });
  },

  loadSavedTable() {
    if(!localStorage.getItem('counter')) {
      this.store.counter = 0;
      localStorage.setItem('counter', this.store.counter);
    } else {
       this.store.counter = parseInt(localStorage.getItem('counter'));
    }

    if(!localStorage.getItem('array')) {
      this.store.arraySaved = [];
      localStorage.setItem('array', JSON.stringify(this.store.arraySaved));
    } else {
      this.store.arraySaved = JSON.parse(localStorage.getItem('array'));
    }

      for (let i = 0; i < this.store.counter; i++) {
      this.elements.contentLine = document.createElement('span');
      this.elements.contentLine.classList.add('content__line');
      this.elements.contentLine.textContent = this.store.arraySaved[i];
      this.elements.dropdownContent.appendChild(this.elements.contentLine);
    }

  },

  populateTable (statusMessage) {
    console.log('populate table');

    if (this.store.counter < 10) {
      this.store.arraySaved.push(statusMessage);
      this.store.counter++;
    } else {
      this.store.arraySaved.shift();
      this.store.arraySaved.push(statusMessage);
    }

    localStorage.setItem('array', JSON.stringify(this.store.arraySaved));
    localStorage.setItem('counter', this.store.counter);


    this.store.current = statusMessage;

    if (this.store.counter < 10) {
      this.elements.contentLine = document.createElement('span');
      this.elements.contentLine.classList.add('content__line');
      this.elements.contentLine.textContent = this.store.current;
      this.elements.dropdownContent.appendChild(this.elements.contentLine);
    } else {
      this.elements.dropdownContent.removeChild(this.elements.dropdownContent.children[1]);

      this.elements.contentLine = document.createElement('span');
      this.elements.contentLine.classList.add('content__line');
      this.elements.contentLine.textContent = this.store.current;
      this.elements.dropdownContent.appendChild(this.elements.contentLine);
    }
  }
};
