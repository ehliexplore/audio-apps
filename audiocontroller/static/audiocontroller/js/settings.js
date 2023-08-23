function showConfig() {
  
    console.log(selectedPreset)
  
    cleanMain();
  
    const doneButton = document.querySelector('.js-done').innerHTML = '<button class="done-button-style" onclick="backMain()">Done</button>';
  
  
    if (document.body.style.backgroundColor === 'gold') {
      document.querySelector('.js-config').innerHTML = `
      <button class="dark-theme-button" onclick="changeTheme()">Dark theme</button>`;
    } else {
      document.querySelector('.js-config').innerHTML = `
      <button class="gold-theme-button" onclick="changeTheme()">Gold theme</button>`;
    }
  
    document.querySelector('.js-presets-buttons').innerHTML = '<button id="preset-1" class="preset-1-button" onclick="selectPreset1()">Preset 1</button> <button id="preset-2" class="preset-2-button" onclick="selectPreset2()">Preset 2</button>';
  
    if (selectedPreset === 'preset1') { 
      document.getElementById('preset-2').classList.remove('preset-2-button-clicked');
      document.getElementById('preset-1').classList.add('preset-1-button-clicked');
  
    } else if (selectedPreset === 'preset2') {
      document.getElementById('preset-1').classList.remove('preset-1-button-clicked');
      document.getElementById('preset-2').classList.add('preset-2-button-clicked');
  
    }
  }
  
  
  function selectPreset1() {
    document.getElementById('preset-1').classList.add('preset-1-button-clicked');
    document.getElementById('preset-2').classList.remove('preset-2-button-clicked');
  
  
    const presetSounds = {
      kickButton: 'audio-files/preset1-kick.mp3',
      snareButton: 'audio-files/preset1-snare.mp3',
      hatButton: 'audio-files/preset1-hat.mp3',
      openhatButton: 'audio-files/preset1-openhat.mp3',
      button808: 'audio-files/preset1-808.mp3',
      clapButton: 'audio-files/preset1-clap.mp3',
      congaButton: 'audio-files/preset1-conga.mp3',
      metalshakeButton: 'audio-files/preset1-metal-shake.mp3',
      doButton: 'audio-files/preset1-c.mp3',
      reButton: 'audio-files/preset1-d.mp3',
      miButton: 'audio-files/preset1-e.mp3',
      faButton: 'audio-files/preset1-f.mp3',
      solButton: 'audio-files/preset1-g.mp3',
      laButton: 'audio-files/preset1-a.mp3',
      siButton: 'audio-files/preset1-b.mp3'
    };
  }
  
  function updateSoundFiles(presetSounds) { 
    console.log("Updating sound files with preset:", presetSounds);
    for (const buttonId in presetSounds) {
      if (soundMap.hasOwnProperty(buttonId)) {
        console.log("Updating sound for button:", buttonId);
        soundMap[buttonId] = presetSounds[buttonId];
      }
    }
    console.log("Updated soundMap:", soundMap);
  }
  
  
  
  function selectPreset2() {
    document.getElementById('preset-2').classList.add('preset-2-button-clicked');
    document.getElementById('preset-1').classList.remove('preset-1-button-clicked'); 
  
  
    const presetSounds = {
      kickButton: 'audio-files/preset2-kick.mp3',
      snareButton: 'audio-files/preset2-snare.mp3',
      hatButton: 'audio-files/preset2-sword.mp3',
      openhatButton: 'audio-files/preset2-vib.mp3',
      button808: 'audio-files/preset2-808.mp3',
      clapButton: 'audio-files/preset2-clap.mp3',
      congaButton: 'audio-files/preset2-agogo-1.mp3',
      metalshakeButton: 'audio-files/preset2-agogo-2.mp3',
      doButton: 'audio-files/preset2-c.mp3',
      reButton: 'audio-files/preset2-d.mp3',
      miButton: 'audio-files/preset2-e.mp3',
      faButton: 'audio-files/preset2-f.mp3',
      solButton: 'audio-files/preset2-g.mp3',
      laButton: 'audio-files/preset2-a.mp3',
      siButton: 'audio-files/preset2-b.mp3'
    };
  
    updateSoundFiles(presetSounds);
    localStorage.setItem('selectedPreset', 'preset2');
    selectedPreset = localStorage.getItem('selectedPreset')
    console.log(selectedPreset)
  }
  
  
  function cleanMain() {
    const layoutContent = document.querySelector('.js-main').innerHTML = '';
  };
  
  function changeTheme() {
    if (document.body.style.backgroundColor === 'gold') {
      document.body.style.backgroundColor = 'black';
      document.querySelector('.js-config').innerHTML = `
      <button class="light-theme-button" onclick="changeTheme()">Light theme</button>`;
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.backgroundColor = 'lightgray';
      }
      showConfig();
      localStorage.setItem('theme', 'dark');
      
    } else {
      document.body.style.backgroundColor = 'gold';
      document.querySelector('.js-config').innerHTML = `
      <button class="dark-theme-button" onclick="changeTheme()">Dark theme</button>`;
      
      showConfig();
      localStorage.setItem('theme', 'gold');
    }
  }
  
  function backMain() { 
    document.querySelector('.js-config').innerHTML = '';
    document.querySelector('.js-done').innerHTML = '';
    document.querySelector('.js-presets-buttons').innerHTML = '';
  
    document.querySelector('.js-main').innerHTML = `
    <main class="main-style js-main">
    <button class="config-button" onclick="showConfig()">Settings</button>
  
    <div class="pads-div-1">
      <button id="kickButton" class="pad-style-1"></button>
      <button id="snareButton" class="pad-style-2"></button>
      <button id="hatButton" class="pad-style-3"></button>
      <button id="openhatButton" class="pad-style-4"></button>
    </div>
    <div class="pads-div-2">
      <button id="button808" class="pad-style-5"></button>
      <button id="clapButton" class="pad-style-6"></button>
      <button id="congaButton" class="pad-style-7"></button>
      <button id="metalshakeButton" class="pad-style-8"></button>
    </div>
  
    <div class="melody-div">
      <button id="doButton" class="melody-button-style-first"></button>
      <button id="reButton" class="melody-button-style-second"></button>
      <button id="miButton" class="melody-button-style"></button>
      <button id="faButton" class="melody-button-style-center"></button>
      <button id="solButton" class="melody-button-style"></button>
      <button id="laButton" class="melody-button-style-penultimate"></button>
      <button id="siButton" class="melody-button-style-last"></button>
    </div>
    </main>
  
    <div class="presets-div js-presets-buttons"></div>
    <div class="js-done done-button-div"></div>
    <div class="config-content js-config"></div>
    `;
  
  
  
    // Reattach event listeners 
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
      button.addEventListener('click', playSound);
    });
  
  }
  
  
  let allButtons = document.getElementsByTagName('button');
  
  
  function loadTheme() {
  
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'black';
      for (let i = 0; i < allButtons.length; i++) {
        document.querySelector('.config-button').style.backgroundColor = 'transparent';
        allButtons.classList.add(`pad-style-${i}`);
      }
      showConfig()
    
  
    } else {
      document.body.style.backgroundColor = 'gold';
      for (let i = 0; i < allButtons.length; i++) {
        document.querySelector('.config-button').style.backgroundColor = 'transparent';
        allButtons.classList.remove(`pad-style-${i}`);
      }
      showConfig();
  
    }
    
  }
  
  loadTheme();
  
  if (selectedPreset === 'preset1') {
    selectPreset1();
  } else if (selectedPreset === 'preset2') {
    selectPreset2();
  }
  