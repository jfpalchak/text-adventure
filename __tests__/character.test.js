import Character from './../src/js/character.js';

describe('Character', () => {
// Test 1 pass
  test('should create an instance of Character class', () => {
    let player = new Character("Player");
    expect(player.name).toEqual("Player");
    expect(player.inventory).toBeInstanceOf(Array);
  });
// Test 2 pass
  test('should add item to Character inventory', () => {
    let player = new Character("Player");
    player.grab("Key");
    expect(player.inventory[0]).toEqual("Key");
  });
});