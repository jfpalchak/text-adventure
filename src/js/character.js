export default class Character {
  constructor(playerName) {
    this.name = playerName;
    this.inventory = [];
    this.currentLocation = "room1"; // acting as an id attached to each room 
  }

  grab(item) {
    this.inventory.push(item);
  }

  move(roomId) {
    this.currentLocation = roomId;
  }
}


// pseudocode for how a player might change rooms
// if (input includes "move") {
//   if ("north door" && player has "Key")
//     let newRoom = dungeon.rooms[player.currentLocation].doors["north"];
//     player.move(newRoom);
//     // this.currentLocation = dungeon.rooms[room].description; (?)
// }





// OPTION 1

// function handleUserCommand(userInput) {

//   let userInput = document.getElementById("player-entered-text").value;

//   switch (userInput) {
//     case 'look around':
//       console.log('do something.');
//       break;
//     case 'grab':
//       console.log('grab something');
//       break;
//     case 'unlock':
//       console.log('unlock the door');
//       break;
//     default:
//       console.log('something bad.');
//   }
// }