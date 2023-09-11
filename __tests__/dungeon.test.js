import Dungeon from './../src/js/dungeon.js';

describe('Dungeon', () => {
  // Test 1 pass
    test('should create an instance of Dungeon class', () => {
      let newDungeon = new Dungeon("Player");
      expect(newDungeon).toEqual("Player");
      
    });

  });