import { printDetailedDescription, printGeneric } from './../index.js';
import Adventure from './adventure.js';

// function handleUserCommand(userInput) {
//   if (userInput === "look around"){
//     printDetailedDescription();
//     console.log(userInput);
//   }
// }



export function handleUserCommand(userInput) {
  // let userInput = document.getElementById("player-entered-text").value;
  switch (userInput) {
    case 'look around':
      printDetailedDescription();
      break;
    case 'grab':
      printGeneric("Grab something.");
      break;
    case 'unlock':
      printGeneric("Unlock the door.");
      break;
    default:
      printGeneric("Something bad.");
  }
}


