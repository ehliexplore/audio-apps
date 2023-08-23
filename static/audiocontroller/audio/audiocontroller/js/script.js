let theme = localStorage.getItem('theme') || 'dark';
let selectedPreset = localStorage.getItem('selectedPreset') || 'preset1';

console.log(selectedPreset);
console.log(theme);

const soundMap = {
  // pads line 1
  kickButton: 'static/audiocontroller/audio/preset1-kick.mp3',
  
  snareButton: 'audio-files/preset1-snare.mp3',
  hatButton: 'audio-files/preset1-hat.mp3',
  openhatButton: 'audio-files/preset1-openhat.mp3',

  // pads line 2
  button808: 'audio-files/preset1-808.mp3',
  clapButton: 'audio-files/preset1-clap.mp3',
  congaButton: 'audio-files/preset1-conga.mp3',
  metalshakeButton: 'audio-files/preset1-metal-shake.mp3',

  // melody 
  doButton: 'audio-files/preset1-c.mp3',
  reButton: 'audio-files/preset1-d.mp3',
  miButton: 'audio-files/preset1-e.mp3',
  faButton: 'audio-files/preset1-f.mp3',
  solButton: 'audio-files/preset1-g.mp3',
  laButton: 'audio-files/preset1-a.mp3',
  siButton: 'audio-files/preset1-b.mp3'
};


const keyMap = {
  // pads line 1 
  'q': 'kickButton',
  'w': 'snareButton',
  'o': 'hatButton',
  'p': 'openhatButton',

  // pads line 2
  'a': 'button808',
  's': 'clapButton',
  'k': 'congaButton',
  'l': 'metalshakeButton',

  // melody 
  'z': 'doButton',
  'x': 'reButton',
  'c': 'miButton',
  'v': 'faButton',
  'b': 'solButton',
  'n': 'laButton',
  'm': 'siButton'
};

function playSound(event) {
  const buttonId = event.target.id;
  const soundFile = soundMap[buttonId];

  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
};

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();
  const buttonId = keyMap[key];

  if (buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
    // Add a class to the button 
      button.classList.add(`active-${buttonId}`);

      // Trigger button click event
      button.click();
    }
  }
});

document.addEventListener('keyup', function(event) {
  const key = event.key.toLowerCase();
  const buttonId = keyMap[key];

  if (buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      // Remove the class from the button whe released
      button.classList.remove(`active-${buttonId}`);
    }
  }
});


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playSound);
});

