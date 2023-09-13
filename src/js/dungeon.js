export default class Dungeon {
  constructor() {
    this.rooms = {
      1: {
        description: "You find yourself in a room that is dimly lit, with little furnishing. Ahead you see a heavy-set door.",
        detailedDescription: "In the corner of the room, you see a small table, on top of which lies a brass key.",
        items: ["key"],
        hint: "look around, grab, unlock, use door.",
        doorAccessible: true,
        doorLocked: true,
        doors: {
          north: 2,
        },
      },
      2: {
        description:
          "As the heavy-set door slams behind, you step into knee-deep water. Once again you see a door ahead of you, however, you're surrounded by a scattering of items floating about the room.",
        detailedDescription:
          "As you wade through the water, you notice the glint of metal by your feet, while a vial labeled 'shrinking potion' floats beside you. You see a lever on the wall.",
        items: ["suit of armor", "shrinking potion", "lever"],
        hint: "look around, pull, use door.",
        doorAccessible: false,
        doorLocked: false,
        doors: {
          south: 1,
          north: 3,
        },
      },
      3: {
        description:
          "You stumble into another room to find the welcoming warmth of a lit torch to either side. There is sand beneath your feet, showing clear signs of something being here before us... but what is it? The air is thick with an unsettling silence.",
        detailedDescription:
          "Struggling through the cobwebs, you pass by a treasure chest and a loud noise clatters. You tripped over sand and have fallen by a rusty sword. Ahead, you hear what seems to be the sound of metal against stone, coming from behind the door.",
        items: ["rusty sword", "sand", "treasure chest", "treasure chest key"],
        hint: "look around, grab, open, use door",
        doorAccessible: false,
        doorLocked: true,
        doors: {
          south: 2,
          north: 4,
        },
      },
      4: {
        description: "This is where the final boss lives. User can choose to fight or escape based on user items.",
        detailedDescription: "Fee-fi-fo-fum, I smell the blood of an Englishman; Be he alive, or be he dead, I'll grind his bones to make my bread.",
        items: [],
        hint: "",
        doorAccessible: false,
        doorLocked: false,
        doors: {},
        battle: {
          monsterHealth: 4,
          playerHealth: 4,
        },
      },
    };
  }
  addRoom(roomId, description, details, items, hint) {
    this.rooms[roomId] = {
      description,
      details,
      items,
      hint,
    };
  }
}
