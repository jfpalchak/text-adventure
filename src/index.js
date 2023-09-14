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
  printGeneric(`<span class="white">></span> <span class="user-input">${userInput}</span>`);

  // Method call to pass in user's 'userInput' to interact with room
  handleUserCommand(userInput);
}

function greetPlayer() {
  printGeneric(`Welcome to <span class="green">Dungeon Adventure</span>!`);
  printGeneric(`Throughout the game, you can use simple commands to navigate and interact with the world:`);
  printGeneric(
    `<div class="how-to">
    > <span class="gray">look around</span><br/>> <span class="gray">grab [object]</span><br/>> <span class="gray">use [object]</span>
    <br/>> <span class="gray">use door</span><br/>> <span class="gray">unlock door</span><br/>> <span class="gray">open [object]</span>
    <br/>> <span class="gray">pull [object]</span><br/>> <span class="gray">attack</span>
    </div>`
  );
  printGeneric(`If you want help figuring out which commands to use in particular room, enter '<span class="yellow">give hint</span>'.`);
  printGeneric(`Enter '<span class="green">new game</span>' to begin!`);
}

window.addEventListener("load", function () {
  greetPlayer();

  // Listen for player command input:
  document.querySelector(".user-input").addEventListener("submit", userInputSubmissionHandler);
});
