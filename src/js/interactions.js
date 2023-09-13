import Adventure from "./adventure.js";
import { printGeneric } from "../index.js";

export function lookForItem(thatItem) {
  if (thatItem === "lever") {
    printGeneric(`The lever is firmly attached.`);
  } else if (Adventure.getPlayerLocation().items.includes(thatItem) && Adventure.player.inventory.includes(thatItem)) {
    printGeneric(`You already have the ${thatItem}.`);
  } else if (Adventure.getPlayerLocation().items.includes(thatItem)) {
    Adventure.player.grab(thatItem);
    printGeneric(`You grabbed the ${thatItem}!`);
  } else {
    printGeneric(`Sorry, couldn't find ${thatItem}.`);
  }
}

export function handleUnlockDoor() {
  if (Adventure.getPlayerLocation().doorLocked && Adventure.player.inventory.includes("key")) {
    Adventure.getPlayerLocation().doorLocked = false;
    Adventure.player.inventory.pop();
    printGeneric("You unlocked the door.");
  } else if (Adventure.getPlayerLocation().doorLocked) {
    printGeneric("You might need to find a key for this...");
  } else {
    printGeneric("The door is already unlocked.");
  }
}

export function handleUseDoor() {
  if (Adventure.getPlayerLocation().doorLocked) {
    printGeneric("The door is locked, you might want to unlock the door first.");
  } else if (!Adventure.getPlayerLocation().doorAccessible) {
    printGeneric("You find it's too difficult to open this door with all the water in the room.");
  } else {
    Adventure.player.move();
    printGeneric("You open the door and walk through.");
    // Introduce next room:
    printGeneric(Adventure.getPlayerLocation().description);
  }
}

export function handlePullLever() {
  if (Adventure.getPlayerLocation().items.includes("lever")) {
    // TOFIX: player can "grab" the lever and put in inventory
    Adventure.getPlayerLocation().items.pop();
    Adventure.getPlayerLocation().doorAccessible = true; // we change boolean value for door accessibility
    printGeneric(
      "With effort, you pull the lever down. You hear a click behind the door ahead, and the sounds of a mechanism turning. The water in the room begins to drain, and by your feet you see a beautiful suit of armor."
    );
  } else if (Adventure.getPlayerLocation() === 2) {
    printGeneric("You've already pulled the lever.");
  } else {
    printGeneric("There is no lever to pull.");
  }
}
