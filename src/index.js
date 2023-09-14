import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Adventure from "./js/adventure.js";
import { handleUserCommand } from "./js/user-commands.js";

// Display detailed description of player's current room, given the "look around" command
export function printDetailedDescription() {
  // let room = Adventure.player.currentLocation;
  // document.querySelector(".display-to-user").innerText = Adventure.dungeon.rooms[room].detailedDescription;
  printGeneric(Adventure.getPlayerLocation().detailedDescription);
}

// Print user inventory
export function printInventory(currentInventory) {
  let inventory = document.createElement("li");
  inventory.innerHTML = currentInventory;
  const outputInventory = document.querySelector(".inventory");
  outputInventory.append(inventory);
}

// Print player's current health
export function printPlayerHealth(healthPoints) {
  const outputHealth = document.querySelector(".player-health");
  outputHealth.innerHTML = null;
  if (healthPoints <= 2) {
    healthPoints = `<span class="red">${healthPoints}</span>`;
  }
  outputHealth.innerHTML = healthPoints;
}

// Print output messages
export function printGeneric(text) {
  let pTag = document.createElement("p");
  pTag.innerHTML = text;
  const interactionOutput = document.querySelector(".display-to-user");
  interactionOutput.append(pTag);
  // pTag.setAttribute("class", "typewriter"); //// For the typewriter effect
  interactionOutput.scrollTop = interactionOutput.scrollHeight;
}

// print command hints for the player
export function printHint() {
  let pTag = document.createElement("p");
  pTag.append(Adventure.getPlayerLocation().hint);
  document.querySelector(".hint-output").append(pTag);
}

// resets output display
export function resetDisplay() {
  document.querySelector(".display-to-user").innerHTML = null;
  document.querySelector(".hint-output").innerHTML = null;
  document.querySelector(".inventory").innerHTML = "INVENTORY: ";
  printGeneric(Adventure.getPlayerLocation().description);
  printPlayerHealth(4);
}

// User Interface Logic
function userInputSubmissionHandler(event) {
  event.preventDefault();
  let userInput = document.getElementById("player-entered-text").value.toLowerCase().trim();
  document.getElementById("player-entered-text").value = null;
  document.querySelector(".hint-output").innerHTML = null;

  // Print user input to DOM
  printGeneric(`<span class="user-input"> > ${userInput}</span>`);

  // Method call to pass in user's 'userInput' to interact with room
  handleUserCommand(userInput);
}

window.addEventListener("load", function () {
  Adventure.newGame();
  printGeneric(Adventure.getPlayerLocation().description);
  printPlayerHealth(4);
  // Listen for player command input:
  document.querySelector(".user-input").addEventListener("submit", userInputSubmissionHandler);
});
