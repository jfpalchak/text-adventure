import Adventure from "./adventure.js";
import { printGeneric, printInventory, printPlayerHealth } from "../index.js";

export function handleLookForItem(thatItem) {
  if (Adventure.getPlayerLocation().items.includes("treasure chest") && thatItem === "treasure chest") {
    printGeneric(`The <span class="yellow">treasure chest</span> is too heavy to carry around.`);
  } else if (Adventure.getPlayerLocation().items.includes("lever") && thatItem === "lever") {
    printGeneric(`The <span class="yellow">lever</span> is firmly attached.`);
  } else if (Adventure.getPlayerLocation().items.includes(thatItem) && Adventure.player.inventory.includes(thatItem)) {
    printGeneric(`You already have the <span class="yellow">${thatItem}</span>.`);
  } else if (Adventure.getPlayerLocation().items.includes(thatItem)) {
    Adventure.player.grab(thatItem);
    printGeneric(`You grabbed the <span class="yellow">${thatItem}</span>!`);
    printInventory(thatItem);
  } else {
    printGeneric(`Sorry, couldn't find ${thatItem}.`);
  }
}

export function handleUnlockDoor() {
  if (
    (Adventure.getPlayerLocation().doorLocked && Adventure.player.inventory.includes("brass key")) ||
    Adventure.player.inventory.includes("golden key")
  ) {
    Adventure.getPlayerLocation().doorLocked = false;
    Adventure.player.inventory.pop();
    printGeneric(`You unlocked the door.`);
  } else if (Adventure.getPlayerLocation().doorLocked) {
    printGeneric(`You might need to find a <span class="yellow">key</span> for this...`);
  } else {
    printGeneric(`The door is already unlocked.`);
  }
}

// Handle
export function handleUseDoor() {
  if (Adventure.getPlayerLocation().doorLocked) {
    printGeneric(`The door is locked, you might want to <span class="yellow">unlock</span> the door first.`);
  } else if (!Adventure.getPlayerLocation().doorAccessible) {
    printGeneric(`You find it's too difficult to open this door with all the water in the room.`);
  } else {
    Adventure.player.move();
    printGeneric(`You open the door and walk through.`);
    // Introduce next room:
    printGeneric(Adventure.getPlayerLocation().description);
  }
}

export function handlePullLever() {
  if (Adventure.getPlayerLocation().items.includes("lever")) {
    Adventure.getPlayerLocation().items.pop();
    Adventure.getPlayerLocation().doorAccessible = true;
    printGeneric(
      `With effort, you pull the lever down. You hear a click behind the door ahead, and the sounds of a mechanism turning. The water in the room begins to drain, and by your feet you see a beautiful <span class="yellow">suit of armor</span>.`
    );
  } else if (Adventure.player.currentLocation === 2) {
    printGeneric(`You've already pulled the lever.`);
  } else {
    printGeneric(`There is no lever to pull.`);
  }
}

export function handleOpenChest() {
  if (Adventure.getPlayerLocation().items.includes("treasure chest") && Adventure.player.inventory.includes("rusty sword")) {
    printGeneric(
      `You break open the treasure chest, slashing through the lock with your rusty sword. Inside, a <span class="yellow">golden key</span> appears.`
    );
    Adventure.getPlayerLocation().items.push("golden key");
  } else if (Adventure.getPlayerLocation().items.includes("treasure chest")) {
    printGeneric(`The treasure chest is locked, but the lock looks old and rusted through. Perhaps there's something useful nearby...`);
  } else {
    printGeneric(`There is no treasure chest in here.`);
  }
}

// Return random number, either 0 or 1
function rollForChance() {
  return Math.floor(Math.random() * 2);
}

// Handle battle logic between player and monster
export function handleAttack() {
  // if there is nothing to attack, let the player know
  if (!Adventure.getPlayerLocation().battle) {
    printGeneric(`Your bloodlust clears. There is nothing to attack.`);
    return null;
  }

  // randomly return either 0 or 1
  let chance = rollForChance();
  let string;
  let damage = Math.floor(Math.random() * 2) + 1;

  // player attack
  if (chance) {
    // if 1, attack hits
    Adventure.getPlayerLocation().battle.monsterHealth -= damage;
    string = `You hit the monster with your rusty sword for ${damage} damage!`;
  } else {
    // if 0, attack misses
    string = "Your attack misses!";
  }

  // monster attacks
  chance = rollForChance();
  if (chance) {
    damage = Math.floor(Math.random() * 3) + 1;
    Adventure.getPlayerLocation().battle.playerHealth -= damage;
    printPlayerHealth(Adventure.getPlayerLocation().battle.playerHealth);
    string += ` In retaliation, the monster hits you for ${damage} damage!`;
  } else {
    string += " The monster's attack misses!";
  }

  printGeneric(string);

  handleWinOrLose();
}

// handle checking if player or monster has been defeated
// if the player is defeated while the armor is in their inventory, give the player a second chance
function handleWinOrLose() {
  let hasArmor = Adventure.player.inventory.includes("suit of armor");
  if (hasArmor && Adventure.getPlayerLocation().battle.playerHealth <= 0) {
    let index = Adventure.player.inventory.indexOf("suit of armor");
    Adventure.player.inventory[index] = null;
    Adventure.getPlayerLocation().battle.playerHealth = 2;
    printGeneric(
      `The monster has brought you to your knees, but thanks to the armor you found, the damage is not fatal. The creature is weakened, but perhaps this sword isn't your only way out...`
    );
  } else if (Adventure.getPlayerLocation().battle.playerHealth <= 0) {
    printGeneric("The monster lands a fatal blow. Your strength leaves you. The Dungeon has won.");
    printGeneric("<h4>Game Over</h4>");
    // ! Display some kind of reset button?
  } else if (Adventure.getPlayerLocation().battle.monsterHealth <= 0) {
    Adventure.getPlayerLocation().doorAccessible = true;
    printGeneric("You land one final blow on the monster, and it falls to your feet. The path ahead is clear.");
  }
}

export function handleUseItem(item) {
  if (Adventure.player.inventory.includes(item)) {
    if (item === "sand" && !(Adventure.player.currentLocation === 4)) {
      printGeneric("You throw sand at the wall. That didn't seem very useful.");
    } else if (item === "sand") {
      printGeneric(
        "Using your wit, you throw a handful of sand at the monster's eyes. The beast stumbles back, scratching at its face. The path ahead is clear, now is your chance!"
      );
      Adventure.getPlayerLocation().doorAccessible = true;
    } else if (item === "shrinking potion" && !(Adventure.player.currentLocation === 4)) {
      printGeneric("On second thought, perhaps now isn't the best time to use this...");
    } else if (item === "shrinking potion") {
      printGeneric(
        "The clink of glass in your bag reminds you of the mysterious vial. In one quick motion, you swig the contents of the vial and throw the glass aside."
      );
      printGeneric(
        "Suddenly, the room grows larger around you! The monster's foot is somehow larger than your body! In all the confusion, you notice the crack below the door might be just the right size..."
      );
      Adventure.getPlayerLocation().doorAccessible = true;
    } else if (item === "rusty sword" && Adventure.player.inventory.includes(item)) {
      printGeneric("You look at the sword. It's definitely rusty. You could attack something with this.");
    } else if ((item === "brass key" || item === "golden key") && Adventure.player.inventory.includes(item)) {
      printGeneric("You should unlock something with this.");
    }
  } else {
    printGeneric(`Wait a second, you don't have ${item}.`);
  }
}
