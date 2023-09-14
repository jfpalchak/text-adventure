# _Text Adventure_

#### By _**Joey Palchak, Jonathan Cheng, Jeremy Josol, Onur Kaymak, Jake Elsberry**_

#### _A text-based adventure game, where the user navigates and interacts with the world via text input._

## Technologies Used

- HTML
- CSS
- JavaScript
- Node v16.13.1
- npm v8.1.2
- webpack v4.46.0

## Description

This is an interactive, web-based text adventure game where players can explore a mysterious dungeon, solve puzzles, and engage in battles. The game is designed to provide an immersive experience where players can make choices, interact with the environment, and uncover the secrets of the dungeon.

### How to Play

Upon entering the game, the user is greeted with a description of their environment, and a handful of clues on how to proceed.

- Type commands in the input field and press Enter to execute actions. For example, "look around" to explore the room, "grab key" to collect an item, or "attack" to engage in battle.
- Pay attention to the game text displayed in the browser, as it provides descriptions of the environment, hints, and feedback on your actions.
- Explore the dungeon, solve puzzles, collect items, and prepare for the final battle. Your choices and strategies will determine your success in the game.

Here is a list of commands available to the player:

| Command               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `give hint`           | Receive a hint about your current situation.           |
| `look around`         | Observe your surroundings and gather information.      |
| `grab [item]`         | Collect items to aid your journey.                     |
| `unlock door`         | Attempt to unlock a locked door with a key.            |
| `use door`            | Open a door and move to the next room.                 |
| `pull lever`          | Pull a lever to trigger a mechanism or reveal secrets. |
| `open treasure chest` | Try to open a locked treasure chest.                   |
| `attack`              | Engage in battle with the dungeon's monster.           |

## Setup/Installation Requirements

1. Copy the **[URL](<[#link](https://github.com/jfpalchak/text-adventure.git)>)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you want the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:

```bash
$ git clone https://github.com/jfpalchak/text-adventure.git
```

5.  In your terminal, assuming Node.js and npm is installed, type the following command to install the project's dependencies found in `package.json`:

```bash
$ npm install
```

6. With the dependencies installed, type the following line in your terminal to build the application using webpack:

```bash
$ npm run build
```

- Additionally, if you wish to:
  1. Lint the JavaScript source code, you can do so by running ESLint the following command in the application's root directory:
     > `$ npm run lint`
  2. Run tests on the backend JavaScript with Jest, you can do so by running the following command in the application's root directory:
     > `$ npm run test`

7. And finally, to run a live server of the project, type the following line in your terminal:

```bash
$ npm run start
```

### _Alternatively:_

1. Go to the website and access the application directly via **[GitHub Pages](https://jfpalchak.github.io/text-adventure/)**.

## Known Bugs

- _No known bugs at this time. If any bugs are discovered, please contact the author._

## License

MIT License

Copyright (c) _date_ _Joey Palchak, Jonathan Cheng, Jeremy Josol, Onur Kaymak, Jake Elsberry_
