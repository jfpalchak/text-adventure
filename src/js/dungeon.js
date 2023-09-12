export default class Dungeon {
  constructor() {
    this.rooms = {
      1: {
        description: "You find yourself in a room that is dimly lit, with little furnishing. Ahead you see a heavy-set door.",
        detailedDescription: "In the corner of the room, you see a small table, on top of which lies a brass key.",
        items: ["key"],
        hint: "look around, grab, unlock, use door.",
        doorLocked: true,
        doors: {
          north: 2
        }
      },
      2: {
        description: "As the heavy-set door slams behind, you step into knee-deep water. Once again you see a door ahead of you, however, you're surrounded by a scattering of items floating about the room.",
        detailedDescription: "As you look around, you see a suit of armor and shrinking potion.",
        items: ["suit of armor", "shrinking potion"],
        hint: "look around, grab, use door.",
        doorLocked: true,
        doors: {
          south: 1
        }
      },
      // 3: {
      //   description: "",
      //   detailedDescription: "",
      //   items: [],
      //   hint: "",
      //   doorLocked: true,
      //   doors: {}
      // }
    };
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
  
  
