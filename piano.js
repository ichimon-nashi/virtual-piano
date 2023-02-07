const keys = document.querySelectorAll(".key")
const whiteKeys = document.querySelectorAll(".key.white")
const blackKeys = document.querySelectorAll(".key.black")

const white_keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
const black_keys = ["w", "e", "t", "y", "u", "o", "p"];

//Detect mouse click to play notes

keys.forEach(key => {
  key.addEventListener("click", () => playNote(key));
})

function playNote(key) {
  let pianoAudio = document.getElementById(key.dataset.note)
  pianoAudio.play();
  pressedKey(key);
}

//Animation to show pressed key

function pressedKey(key) {
  key.classList.add("pressed")
  setTimeout (function() {
    key.classList.remove("pressed");
  }, 100)
}

//Detect keyboard button press
document.addEventListener("keydown", event => {
  const key = event.key
  const whiteKeyIndex = white_keys.indexOf(key);
  const blackKeyIndex = black_keys.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

//Volume slider
let volumeControl = document.getElementById("volume-slider");

function setVolume() {

  // Get the array of audio element and loop through them to set the new volume value
  Array.from(document.querySelectorAll("audio")).forEach(function(audio){
  
      //  if the input value is "", use zero
      audio.volume = volumeControl.value == "" ? 0 : volumeControl.value / 100;
    })
};

volumeControl.addEventListener('change', setVolume);
volumeControl.addEventListener('input', setVolume);
