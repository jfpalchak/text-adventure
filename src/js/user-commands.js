import { printDetailedDescription, printGeneric } from './../index.js';
import Adventure from './adventure.js';

// function handleUserCommand(userInput) {
//   if (userInput === "look around"){
//     printDetailedDescription();
//     console.log(userInput);
//   }
// }



export function handleUserCommand(userInput) {
  
  let item;
  let hint;

  // userInput = userInput.toLowerCase();
  // function for Room 1

  switch (userInput) {
    case 'hint':
      hint = Adventure.getPlayerLocation().hint;
      printGeneric(`${hint}`);
      break;
    case 'look around':
      printDetailedDescription();
      break;
    case 'grab':
      item = Adventure.getPlayerLocation().items[0];
      Adventure.player.grab(item);
      printGeneric(`You grabbed the ${item}!`);
      break;
    case 'unlock':
      Adventure.getPlayerLocation().doorLocked = false;
      Adventure.player.inventory.pop();
      printGeneric("You unlocked the door.");
      break;
    case 'use door':
      if (Adventure.getPlayerLocation().doorLocked) {
        printGeneric("The door is locked, you might want to unlock the door first.");        
      } else {
        Adventure.player.move();
        printGeneric("You open the door and walk through.");
      }
      break;
    default:
      printGeneric("I don't recognize that.");
  }
}


