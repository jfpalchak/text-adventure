export default class Dungeon {
  constructor() {
    this.rooms = {
      room1: {
        description: "You find yourself in a room that is dimly lit, with little furnishing. Ahead you see a heavy-set door.",
        detailedDescription: "In the corner of the room, you see a small table, on top of which lies a brass key.",
        items: ["Key"],
        hint: "On close inspection, it may be useful to pick something up...",
        doors: {
          north: "room2"
        }
      },
      room2: {
        description: "As the heavy-set door slams behind you, the sound of rushing water overwhelms you. Proceed towards the flood or turn around?",
        detailedDescription: "As you rush towards the water, it feels as though the H20 is quite refreshing and you gain 10 hp(maybe)",
        items: ["A plate of armor", "shrinking potion"],
        hint: "Think sewer grates - thanks Jon",
        doors: {
          south: "room1"
        }
      }
    }
  }
  addRoom(roomId, description, details, items, hint) {
    this.rooms[roomId] = {
      description,
      details,
      items,
      hint      
    };
  }
}
  
  
