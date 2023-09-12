import Adventure from './adventure.js';
import { printGeneric } from './../index.js';

export function parseUserInput(userInput) {
  let inputArray = userInput.split(" ");
  inputArray.shift();
  let targetObject = inputArray.join(" ");
  // return [command, targetObject];
  return targetObject;
}

export function lookForItem(searchForThisThing) {
  if (Adventure.getPlayerLocation().items.includes(searchForThisThing)) {
    Adventure.player.grab(searchForThisThing);
    printGeneric(`You grabbed the ${searchForThisThing}!`);
  } else {
    printGeneric(`Sorry, couldn't find ${searchForThisThing}.`);
  }
}
