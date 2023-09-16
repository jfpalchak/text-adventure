import Character from "./../src/js/character.js";

describe("Character", () => {
  let player;
  beforeEach(() => {
    player = new Character("Player");
  });
  // Test 1 pass -- edited
  test("should create an instance of Character class", () => {
    expect(player.name).toEqual("Player");
    expect(player.inventory).toBeInstanceOf(Array);
    expect(player.currentLocation).toEqual(1);
  });
  // Test 2 pass -- edited
  test("should add item to Character inventory", () => {
    player.grab("brass key");
    expect(player.inventory[0]).toEqual("brass key");
  });
  // Test 3
  test("should move character to room 2", () => {
    player.move();
    expect(player.currentLocation === 2);
  });
});
