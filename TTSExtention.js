document.body.style.border = "5px solid red";

browser.menus.create(
    {
    id: "reader",
    title: browser.i18n.getMessage("READ"),
    contexts: ["all"],
    },
     onCreated,
);

  browser.menus.onClicked( () =>
    {
    getHighlightedText();
    }
);

function getHighlightedText(){
    text = document.getElementById("highlightedText").innerText = selectText();
    speak(text, getVoices, 1, 1, 1)
   };


   //tts code taken from https://www.educative.io/answers/how-to-convert-text-to-speech-in-javascript
   function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
      // some time the voice will not be initialized so we can call spaek with empty string
      // this will initialize the voices 
      let utterance = new SpeechSynthesisUtterance("");
      speechSynthesis.speak(utterance);
      voices = speechSynthesis.getVoices();
    }
    return voices;
  }
  
  
  function speak(text, voice, rate, pitch, volume) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'en';
    speakData.voice = voice;
    
    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
    speechSynthesis.speak(speakData);
  
  }
  
 