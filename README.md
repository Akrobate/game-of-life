# Game of Life

A minimal and interactive implementation of John Conway's famous cellular automaton, built with vanilla JavaScript.

Demo: [https://akrobate.github.io/game-of-life/](https://akrobate.github.io/game-of-life/)


## 🚀 Features

- Randomized Initialization: The grid automatically populates with a random distribution of alive and dead cells when loaded.
- Playback Controls:
    - **Play**: Starts the continuous simulation loop.
    - **Pause**: Pauses the simulation at any point to inspect the current grid state.
- Lightweight: Zero external dependencies—built purely with native HTML5, CSS, and JavaScript.

## 🎮 Rules of the Game

The universe of the Game of Life evolves frame by frame according to four simple rules:

1. Underpopulation: Any live cell with fewer than two live neighbours dies.
2. Survival: Any live cell with two or three live neighbours lives on to the next generation.
3. Overpopulation: Any live cell with more than three live neighbours dies.
4. Reproduction: Any dead cell with exactly three live neighbours becomes a live cell.

## 💻 Getting Started

Clone or download this repository:

```Bash
git clone https://github.com/Akrobate/game-of-life.git
```

Open index.html directly in any modern web browser.

No build tools, package managers (npm/yarn), or local server setups required!

