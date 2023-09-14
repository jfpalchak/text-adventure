export default class Dungeon {
  constructor() {
    this.rooms = {
      1: {
        description: `You find yourself in a room that is dimly lit, with little furnishing. Ahead you see a heavy-set <span class="yellow">door</span>.`,
        detailedDescription: `In the corner of the room, you see a small table, on top of which lies a <span class="yellow">brass key</span>.`,
        items: ["brass key"],
        hint: "look around, grab, unlock, use door.",
        doorAccessible: true,
        doorLocked: true,
        doors: {
          north: 2,
        },
      },
      2: {
        description: `As the heavy-set door slams behind, you step into knee-deep water. Once again you see a door ahead of you, however, you're surrounded by a scattering of items floating about the room.`,
        detailedDescription: `As you wade through the water, you notice the glint of metal by your feet, while a vial labeled '<span class="yellow">shrinking potion</span>' floats beside you. You lift your head back up and see a <span class="yellow">lever</span> on the wall.`,
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
        description: `You stumble into another room to find the welcoming warmth of a lit torch to either side. There is <span class="yellow">sand</span> beneath your feet, showing clear signs of something being here before us... but what is it? The air is thick with an unsettling silence.`,
        detailedDescription: `Struggling through cobwebs, you pass by a <span class="yellow">treasure chest</span> and a loud noise clatters. You tripped over sand and have fallen next to a <span class="yellow">rusty sword</span>. You get back up and suddenly up ahead, you hear what seems to be the sound of metal against stone, coming from behind the door.`,
        items: ["rusty sword", "sand", "treasure chest"],
        hint: "look around, grab, open, use door",
        doorAccessible: true,
        doorLocked: true,
        doors: {
          south: 2,
          north: 4,
        },
      },
      4: {
        description: `It's dark in here. You find your heart beating much faster. A vicious breath echoes through the dark room, you  `,
        detailedDescription: "Fee-fi-fo-fum, I smell the blood of an Englishman; Be he alive, or be he dead, I'll grind his bones to make my bread.",
        items: [],
        hint: "look around, attack, use [item], use door",
        doorAccessible: true,
        doorLocked: false,
        doors: {},
        battle: {
          monsterHealth: 4,
          playerHealth: 4,
        },
      },
      5: {
        description:
          "Tired, you leave the monster behind. There is a ray of light from above, illuminating a rope ladder just within reach. A way out. You've defeated the Dungeon!",
        winFlag: true,
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
