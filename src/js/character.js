export default class Character {
  constructor(playerName) {
    this.name = playerName;
    this.inventory = [];
  }

  grab(item) {
    this.inventory.push(item);
  }
}


