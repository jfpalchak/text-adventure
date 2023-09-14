import { printDetailedDescription, printGeneric, printHint } from "./../index.js";
import {
  handleLookForItem,
  handleUnlockDoor,
  handleUseDoor,
  handlePullLever,
  handleOpenChest,
  handleAttack,
  handleUseItem,
  handleNewGame,
} from "./interactions.js";
// !!!!!!!!! TAKE OUT AFTER TESTING !!!!!!!!!!
import Adventure from "./adventure.js";
// !!!!!!!!! TAKE OUT AFTER TESTING !!!!!!!!!!

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
  let targetItem = parseUserInput(userInput);

  switch (userInput) {
    case "give hint":
      printHint();
      break;
    case "look around":
      printDetailedDescription();
      break;
    case `grab ${targetItem}`:
      handleLookForItem(targetItem);
      break;
    case "unlock door":
      handleUnlockDoor();
      break;
    case "use door":
      handleUseDoor();
      break;
    case `use ${targetItem}`:
      handleUseItem(targetItem);
      break;
    case "pull lever":
      handlePullLever();
      break;
    case "open treasure chest":
      handleOpenChest();
      break;
    case "attack":
      handleAttack();
      break;
    case "new game":
      handleNewGame();
      break;
    // !!!!!!!!!!! DEV CHEAT START !!!!!!!!!
    case "room 3":
      Adventure.player.currentLocation = 3;
      break;
    case "room 4":
      Adventure.player.currentLocation = 4;
      break;
    case "kill player":
      Adventure.dungeon.rooms[4].battle.playerHealth = 1;
      break;
    // !!!!!!!!!!! DEV CHEAT END !!!!!!!!!!!
    default:
      printGeneric("I don't recognize that.");
  }
}
