import Adventure from "./adventure.js";
import { printGeneric } from "../index.js";

export function lookForItem(thatItem) {
  if (Adventure.getPlayerLocation().items.includes("treasure chest") && thatItem === "treasure chest") {
    printGeneric(`The treasure chest is too heavy to carry around.`);
  } else if (Adventure.getPlayerLocation().items.includes("lever") && thatItem === "lever") {
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
    Adventure.getPlayerLocation().items.pop();
    Adventure.getPlayerLocation().doorAccessible = true;
    printGeneric(
      "With effort, you pull the lever down. You hear a click behind the door ahead, and the sounds of a mechanism turning. The water in the room begins to drain, and by your feet you see a beautiful suit of armor."
    );
  } else if (Adventure.getPlayerLocation() === 2) {
    printGeneric("You've already pulled the lever.");
  } else {
    printGeneric("There is no lever to pull.");
  }
}

export function handleOpenChest() {
  if (Adventure.getPlayerLocation().items.includes("treasure chest")) {
    printGeneric("The treasure chest is locked.");
  }
}

// Return random number, either 0 or 1
function rollForChance() {
  return Math.floor(Math.random() * 2);
}

// Handle battle logic between player and monster
export function handleAttack() {
  if (!Adventure.getPlayerLocation().battle) {
    printGeneric("Your bloodlust clears. There is nothing to attack.");
    return null;
  }

  // randomly return either 0 or 1
  let chance = rollForChance();
  let string;

  // player attack
  if (chance) {
    // if 1, attack hits
    Adventure.getPlayerLocation().battle.monsterHealth -= 1;
    string = "You hit the monster!";
  } else {
    // if 0, attack misses
    string = "Your attack misses!";
  }

  // monster attacks
  chance = rollForChance();
  if (chance) {
    Adventure.getPlayerLocation().battle.playerHealth -= 1;
    string += " In retaliation, the monster hits you!";
  } else {
    string += " The monster's attack misses!";
  }

  printGeneric(string);

  handleWinOrLose();
}

// handle checking if player or monster has been defeated
function handleWinOrLose() {
  if (Adventure.getPlayerLocation().battle.playerHealth === 0) {
    printGeneric("The monster lands a fatal blow. Your strength leaves you. The Dungeon has won.");
    printGeneric("<h4>Game Over</h4>");
    // ! Display some kind of reset button?
  } else if (Adventure.getPlayerLocation().battle.monsterHealth === 0) {
    Adventure.getPlayerLocation().doorAccessible = true;
    printGeneric("You land one final blow on the monster, and it falls to your feet. The path ahead is clear.");
  }
}
