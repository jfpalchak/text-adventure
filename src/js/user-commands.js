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

  switch (userInput) {
    // case 'hint':
    //   hint = Adventure.dungeon.rooms["room1"].hint;
    //   break;
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
      printGeneric("you unlocked the door.");
      break;
    case 'use door':
      if (Adventure.getPlayerLocation().doorLocked) {
        printGeneric("The door is locked.");        
      } else {
        Adventure.player.move("room2");
        printGeneric("You open the door and walk through.");
      }
      break;
    default:
      printGeneric("I don't recognize that.");
  }
}


