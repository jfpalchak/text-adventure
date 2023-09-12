import { printDetailedDescription, printGeneric } from './../index.js';
import { parseUserInput, lookForItem } from './utility.js';
import Adventure from './adventure.js';

// handleUserCommand for rooms: 1
export function handleUserCommand(userInput) {
  
  let item = parseUserInput(userInput);
  let hint;

  switch (userInput) {
    case 'give hint':
      hint = Adventure.getPlayerLocation().hint;
      printGeneric(`${hint}`);
      break;
    case 'look around':
      printDetailedDescription();
      break;
    case `grab ${item}`: 
      lookForItem(item); 
      break;
    case 'unlock door':
      if (Adventure.getPlayerLocation().doorLocked && Adventure.player.inventory.includes('key')) {
        Adventure.getPlayerLocation().doorLocked = false;
        Adventure.player.inventory.pop();
        printGeneric("You unlocked the door.");          
      } else if (Adventure.getPlayerLocation().doorLocked) {
        printGeneric("You might need to find a key for this...");
      } else {
        printGeneric("The door is already unlocked.");
      }
      break;
    case 'use door':
      if (Adventure.getPlayerLocation().doorLocked) {
        printGeneric("The door is locked, you might want to unlock the door first.");        
      } else {
        Adventure.player.move();
        printGeneric("You open the door and walk through.");
        // Introduce next room:
        printGeneric(Adventure.getPlayerLocation().description);
      }
      break;
    default:
      printGeneric("I don't recognize that.");
  }
}


