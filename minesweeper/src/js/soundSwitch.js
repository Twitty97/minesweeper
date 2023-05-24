export default {
  soundElements: {
    soundSwitchBtn: null,
    soundIcon: null
  },
  soundMode: true,
  regulateSound() {
    this.soundElements.soundSwitchBtn = document.querySelector('.sound-btn');
    this.soundElements.soundIcon = document.querySelector('.fa-volume-high');
    const clicksound = new Audio('src/assets/click.mp3');
    this.soundElements.soundSwitchBtn.addEventListener('click', (event) => {
      this.soundMode = !this.soundMode;
      if(this.soundMode) {
        clicksound.play();
      }
      if (this.soundElements.soundIcon.classList.contains('fa-volume-high')) {
        this.soundElements.soundIcon.classList.remove('fa-volume-high');
        this.soundElements.soundIcon.classList.add('fa-volume-xmark');
      } else {
        this.soundElements.soundIcon.classList.remove('fa-volume-xmark');
        this.soundElements.soundIcon.classList.add('fa-volume-high');
      }
    });
  }
}