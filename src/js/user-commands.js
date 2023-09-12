import { printDetailedDescription, printGeneric } from './../index.js';
import Adventure from './adventure.js';

// function handleUserCommand(userInput) {
//   if (userInput === "look around"){
//     printDetailedDescription();
//     console.log(userInput);
//   }
// }




function lookForItem(searchForThisThing) {
  // return Adventure.getPlayerLocation().items[0];
  //return 'key';
  if (Adventure.getPlayerLocation().items.includes(searchForThisThing)) {
    Adventure.player.grab(searchForThisThing);
    printGeneric(`You grabbed the ${searchForThisThing}!`);
  } else {
    printGeneric(`Sorry, couldn't find ${searchForThisThing}.`);
  }
}

// handleUserCommand for rooms: 1
export function handleUserCommand(userInput) {
  
  let item;
  let hint;

  //basic basic solution to separating user input?
  let inputArray = userInput.split(" ");
  let command = inputArray[0];
  item = inputArray[1];

  switch (userInput) {
    case 'hint':
      hint = Adventure.getPlayerLocation().hint;
      printGeneric(`${hint}`);
      break;
    case 'look around':
      printDetailedDescription();
      break;
    case `grab ${item}`:
      lookForItem(item);
      // printGeneric(`You grabbed the ${item}!`);
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
        // Introduce next room:
        printGeneric(Adventure.getPlayerLocation().description);
      }
      break;
    default:
      printGeneric("I don't recognize that.");
  }
}


