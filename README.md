# Battleship

A clean implementation of the classic **Battleship** game built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-battleship) curriculum.

Play against a smart AI opponent on a 10×10 grid. Sink all your enemy's ships before they sink yours!

## Features

- **Classic Battleship rules** — 5 ships of different sizes
- **Drag & drop** ship placement with rotation (horizontal/vertical)
- **Random placement** option for quick start
- **Intelligent AI opponent** with decent targeting logic
- **Real-time hit/miss feedback** with visual effects
- **Win detection** and game over screen
- **Responsive design** that works on desktop and mobile
- Built with modern JavaScript, HTML, and CSS

## Tech Stack

- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Webpack** (bundler)
- **Babel** (transpiler)

## How to Play

1. **Place your ships** on your board (bottom/left):
   - Drag ships to desired positions
   - Click on a ship to rotate it
   - Or use the "Random" button for automatic placement

2. **Start the game** when all ships are placed.

3. **Attack the enemy board** (top/right) by clicking on cells.

4. **Sink all 5 enemy ships** before the AI sinks yours to win!

### Ships
- **Carrier** — 5 cells
- **Battleship** — 4 cells
- **Cruiser** — 3 cells
- **Submarine** — 3 cells
- **Destroyer** — 2 cells

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/WujecDamian/odin-Battleship.git
cd odin-Battleship
npm install