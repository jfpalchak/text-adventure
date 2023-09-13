import { printDetailedDescription, printGeneric, printHint } from "./../index.js";
import { lookForItem, handleUnlockDoor, handleUseDoor, handlePullLever } from "./interactions.js";

// Utility Logic
export function parseUserInput(userInput) {
  let inputArray = userInput.split(" ");
  inputArray.shift();
  let targetObject = inputArray.join(" ");
  // return [command, targetObject];
  return targetObject;
}

// handleUserCommand for rooms: 1
export function handleUserCommand(userInput) {
  let item = parseUserInput(userInput);

  switch (userInput) {
    case "give hint":
      printHint();
      break;
    case "look around":
      printDetailedDescription();
      break;
    case `grab ${item}`: // TOFIX: player can infinitely grab items from the room -> remove item from room inventory when grabbed
      lookForItem(item);
      break;
    case "unlock door":
      handleUnlockDoor();
      break;
    case "use door":
      handleUseDoor();
      break;
    case "pull lever":
      handlePullLever();
      break;
    default:
      printGeneric("I don't recognize that.");
  }
}
