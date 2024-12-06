<script lang="ts">
    import { onDestroy } from 'svelte'; 

    // Declare variables
    let buttonEnregistrement :HTMLButtonElement;
    let humanVerif : HTMLDivElement;

    let box1 : HTMLButtonElement;
    let box2 :  HTMLButtonElement;
    let box3 :  HTMLButtonElement;
    let box4 :  HTMLButtonElement;
    let box5 :  HTMLButtonElement;
    let box6 :  HTMLButtonElement;
    let box7 :  HTMLButtonElement;
    let box8 :  HTMLButtonElement;
    let box9 :  HTMLButtonElement;
    let changedBox : HTMLButtonElement;

    let difficulty : number = 50;

    let numberClicks : number = 0;
    let selectedYear : number = 1921;
    let audioContext: AudioContext;
    let analyser: AnalyserNode;
    let microphone: MediaStreamAudioSourceNode;
    let stream: MediaStream;
    let intervalId: number = -1;
    let inputElements: HTMLInputElement[] = []; // Array to hold input elements
    let selectedInputIndex: number = -1; // Index of the active input field
    const years = shuffleArray(Array.from({ length: 2024 - 1900 + 1 }, (_, i) => 1900 + i));
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    // Get microphone stream
    async function getMicrophoneStream() {
      if (!stream) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        } catch (err) {
          console.error('Error accessing microphone: ', err);
          throw err;
        }
      }
      return stream;
    }
  
    // Main logic for processing audio data
    async function startAudio(index: number) {
      selectedInputIndex = index;
  
      const s = await getMicrophoneStream();
  
      if (!audioContext) {
        audioContext = new AudioContext();
      }
      if (!analyser) {
        analyser = audioContext.createAnalyser();
        analyser.smoothingTimeConstant = 0.95;
        analyser.fftSize = 1024;
      }
  
      // Stop any previous intervals
      stopAudio();
  
      microphone = audioContext.createMediaStreamSource(s);
      microphone.connect(analyser);
  
      intervalId = setInterval(() => {
        const array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        const average = array.reduce((sum, value) => sum + value, 0) / array.length;
  
        if (selectedInputIndex >= 0 && inputElements[selectedInputIndex]) {
          inputElements[selectedInputIndex].value = Math.round(average) > 100 ? '99' : Math.round(average).toString();
        }
      }, 300);
    }
  
    // Stop audio processing
    function stopAudio() {
      if (intervalId > 0) {
        clearInterval(intervalId);
        intervalId = -1;
      }
      if (analyser) {
        analyser.disconnect();
      }
      if (microphone) {
        microphone.disconnect();
      }
    }
  
    // Release microphone resources
    function releaseMicrophone() {
      stopAudio();
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (audioContext) {
        audioContext.close();
      }
    }
  
    // Clean up when the component is destroyed
    onDestroy(() => {
      releaseMicrophone();
    });

    function daysInMonth(dateString : String ){
        const year = parseInt(dateString.slice(0, 4), 10);
        const month = parseInt(dateString.slice(5, 7), 10);

        const numOfDays = new Date(year, month, 0).getDate();
        const days = [];
        for (let i = 1; i <= numOfDays; i++) {
            days.push(`${month.toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`);
        }
  
        return days;
    }

    function bounce(){
        if (numberClicks<=Math.random() *5){
            if (buttonEnregistrement) {
                numberClicks++;

                const windowHeight = window.innerHeight;
                const windowWidth = window.innerWidth;
                const buttonHeight = buttonEnregistrement.offsetHeight;
                const buttonWidth = buttonEnregistrement.offsetWidth;

                const changeTop = Math.random() * (windowHeight - buttonHeight);
                const changeLeft = Math.random() * (windowWidth - buttonWidth);

                // Update button position
                buttonEnregistrement.style.marginTop = `${changeTop}px`;
                buttonEnregistrement.style.marginLeft = `${changeLeft}px`;
            }
        }else{
            buttonEnregistrement.setAttribute('style', 'transform: scale(1.1);');
            humanVerification(difficulty);
        } 
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function humanVerification(adjustment : number){
        humanVerif.setAttribute('style','visibility: visible;display:flex; flex-direction: column;');
        let boxes : HTMLButtonElement[] = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
        let colour : string = getRandomColor();
        for (var i = 0; i < 9; i++){
            boxes[i].style.backgroundColor = colour;
        }
        let adjustedColour : string = adjustHexColor(colour, adjustment);
        let j : number = Math.floor(Math.random()*9);
        changedBox = boxes[j];
        boxes[j].style.backgroundColor=adjustedColour;
        difficulty-=10;
        
    }

    function adjustHexColor(hex : string, adjustment : number) {
        // Ensure the hex is in the correct format
        if (hex.startsWith('#')) hex = hex.slice(1);

        // Parse the RGB values
        let r = parseInt(hex.slice(0, 2), 16);
        let g = parseInt(hex.slice(2, 4), 16);
        let b = parseInt(hex.slice(4, 6), 16);

        // Adjust each component by a random value within the range [-adjustment, +adjustment]
        r = Math.min(255, Math.max(0, r + Math.floor((Math.random() * 2 - 1) * adjustment)));
        g = Math.min(255, Math.max(0, g + Math.floor((Math.random() * 2 - 1) * adjustment)));
        b = Math.min(255, Math.max(0, b + Math.floor((Math.random() * 2 - 1) * adjustment)));
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    function toHex (value:number){
        return value.toString(16).padStart(2, '0');
    } 

    function isChanged(event : Event){
        const value = event.target as HTMLButtonElement;
        if (difficulty>10){
            if (value===changedBox){
                humanVerification(difficulty);
            }else{
                alert("Imposter!");
                window.location.reload();
            }
        }else{
            if (value===changedBox){
                alert("Enregistrement réussi!");
                window.location.reload();
            }else{
                alert("Imposter!")
                window.location.reload();
            }
        }
    }


    function shuffleArray(arr : number[]) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
        return arr;
    }
  </script>

  <head>
    <link rel="stylesheet" href="global.css">
  </head>
  <label for="name">Name</label>
  <input type="text" value="name" style="color : gray" name="name"/>
  <br>
  <label for="date_naissance">Date de naissance</label>
  <select name="annee" id="annee" bind:value={selectedYear}>
    {#each years as i}
        <option value={i}>{i}</option>
    {/each}
  </select>
  <select name="date_naissance" id="date_naissance">
    {#each months as j}
        {#each daysInMonth(`${selectedYear}-${j < 10 ? '0' + j : j}`) as k}
            <option value={k}>{k}</option>
        {/each}
    {/each}
  </select>
  <br>
  <label for="num_tel">Numéro de téléphone</label>
  <div class="num_tel" >
    {#each Array(5) as _, i}
      <input bind:this={inputElements[i]} type="text" size="2"/>
      
    {/each}
    <br>
    {#each Array(5) as _, i}
        <button onclick={() => startAudio(i)} type="button"style="width: 2;">Start</button>
    {/each}
    
  </div>
  
  <button onclick={stopAudio} type="button">Stop</button>

  <br>

  <label for="email">Email</label>
  <input type="text" value="" style="color : gray; font-family: 'Wingdings'" name="email"/>

  <br>
  <button id="bouncing" bind:this={buttonEnregistrement} onclick={bounce} type="button">Enregistrer</button>
  <br><br>
  <div bind:this={humanVerif} style="display:flex; flex-direction : column ; visibility: hidden;">
    <h4>Vérification que vous êtes humain. Veuillez choisir la couleur qui est différente des autres.</h4>
    <div style="display:flex; flex-direction: row;">
        <button bind:this={box1} onclick={isChanged} style = "width : 100px; height : 100px; background-color : red; "></button>
        <button bind:this={box2} onclick={isChanged} style = "width : 100px; height : 100px; background-color : blue; "></button>
        <button bind:this={box3} onclick={isChanged} style = "width : 100px; height : 100px; background-color : red; "></button>
    </div>
    <div style="display:flex; flex-direction: row;">
        <button bind:this={box4} onclick={isChanged} style = "width : 100px; height : 100px; background-color : red; "></button>
        <button bind:this={box5} onclick={isChanged} style = "width : 100px; height : 100px; background-color : blue; "></button>
        <button bind:this={box6} onclick={isChanged} style = "width : 100px; height : 100px; background-color : red; "></button>
    </div>
    <div style="display:flex; flex-direction: row;">
        <button bind:this={box7} onclick={isChanged} style = "width : 100px; height : 100px; background-color : red; "></button>
        <button bind:this={box8} onclick={isChanged} style = "width : 100px; height : 100px; background-color : blue; "></button>
        <button bind:this={box9} onclick={isChanged} style = "width : 100px; height : 100px; background-color : red; "></button>
    </div>
  </div>
  