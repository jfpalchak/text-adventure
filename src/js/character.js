export default class Character {
  constructor(playerName) {
    this.name = playerName;
    this.inventory = [];
    this.currentLocation = "room1";
  }

  grab(item) {
    this.inventory.push(item);
  }
}


