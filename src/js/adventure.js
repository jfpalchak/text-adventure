import Character from './character.js';
import Dungeon from './dungeon.js';

export default class Adventure {
  static newGame() {
    this.player = new Character("Player");
    this.dungeon = new Dungeon();
  }

  static getPlayerLocation() {
    let room = this.player.currentLocation;
    return this.dungeon.rooms[room];
  }
}