export default class Character {
  constructor(playerName) {
    this.name = playerName;
    this.inventory = [];
    this.currentLocation = 1; // acting as an id attached to each room
  }

  grab(item) {
    this.inventory.push(item);
  }

  move() {
    this.currentLocation += 1;
  }

  // moveBack(){
  //   this.currentLocation
}
