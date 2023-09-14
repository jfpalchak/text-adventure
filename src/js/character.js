export default class Character {
  constructor(playerName) {
    this.name = playerName;
    this.inventory = [];
    this.currentLocation = 1;
  }

  grab(item) {
    this.inventory.push(item);
  }

  move() {
    this.currentLocation += 1;
  }
}
