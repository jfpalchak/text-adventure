// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import {} from './js/utility.js';
import Character from './js/character.js';
import Dungeon from './js/dungeon.js';

// Utility Logic

function handleUserCommand(userInput) {

  if (userInput === "look around"){
    let currentRoom = Dungeon.rooms[player.currentLocation];
    roomLoader(currentRoom);
  }
}

// User Interface Logic
function userInputSubmissionHandler(event) {
  event.preventDefault();
  let userInput = document.getElementById("player-entered-text").value;
  document.getElementById("player-entered-text").innerHTML = null;
  // Method call to pass in user's 'userInput' to interact with room

  // handleUserCommand(userInput);
}

function roomLoader(room) {
  document.getElementById(".display-to-user").innerText = room.description;
}

function userInputFormLoader() {
  
  let userForm = document.querySelector(".user-input");
  userForm.addEventListener("submit", userInputSubmissionHandler);
}

window.addEventListener("load", function () {
  let player = new Character("Player");
  userInputFormLoader();
  roomLoader();
});



// window.addEventListener("load", handleEverything);
//
// handleEverything() {
//   let player = new Character("Player");

//   // greet the player
//   // print the first room description
//   // 

//   // if we keep the event listener as an anonymous function, we have access to player
//   document.querySelector(".user-input").addEventListener( (event) => {
//     event.preventDefault();
//     // get user input
//     // handleUserCommands(userInput, player); // depending on actions, this updates the Character/Player/User
//   });

// }
