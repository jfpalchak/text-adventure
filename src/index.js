import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Adventure from './js/adventure.js';
import { handleUserCommand } from './js/user-commands.js';

// Display detailed description of player's current room, given the "look around" command
export function printDetailedDescription() {
  let room = Adventure.player.currentLocation;
  // document.querySelector(".display-to-user").innerText = Adventure.dungeon.rooms[room].detailedDescription;
  printGeneric(Adventure.dungeon.rooms[room].detailedDescription);
}

// Print output messages
export function printGeneric(text) {
  let pTag = document.createElement('p');
  pTag.innerHTML = text;
  document.querySelector(".display-to-user").append(pTag);
}

// User Interface Logic
function userInputSubmissionHandler(event) {
  event.preventDefault();
  let userInput = document.getElementById("player-entered-text").value.toLowerCase().trim();
  document.getElementById("player-entered-text").value = null;

  // Print user input to DOM
  printGeneric(`<span class="user-input"> > ${userInput}</span>`);
  
  // Method call to pass in user's 'userInput' to interact with room
  handleUserCommand(userInput);
}

window.addEventListener("load", function () {
  
  Adventure.newGame();
  // document.querySelector(".display-room").innerText = Adventure.dungeon.rooms["room1"].description;
  printGeneric(Adventure.getPlayerLocation().description);
  // greet the player
  // print first room info

  // Listen for player command input:
  document.querySelector(".user-input").addEventListener("submit", userInputSubmissionHandler);

});
