import { shipObj } from "../ships/shipObj";

export function gameBoard() {
  return {
    board: Array(10)
      .fill()
      .map(() => Array(10).fill("")),
    ships: [
      shipObj("carrier", 5),
      shipObj("battleship", 4),
      shipObj("cruiser", 3),
      shipObj("submarine", 3),
      shipObj("destroyer", 2),
    ],
    missed: 0,
    totalHits: 0,
    receiveAttack(y, x) {
      //Determine whether attack hit a ship
      if (this.board[y][x] === "o") {
        // t: => call hit function on correct ship [o]
      } else {
        this.board[y][x] = "x";
      }
    },
    placeShip(ship, orientation, y, x) {
      let length = 0;
      let maxX = 9;
      let minY = 9;
      if (orientation === "horizontal") {
        maxX = 10 - ship.lengthShip;
        if (x <= maxX) {
          for (let i = 0; i < ship.lengthShip; i++) {
            this.board[y][x + i] = "o";
          }
        } else return "Tried to place off the edge";
      } else if (orientation === "vertical") {
        minY = ship.lengthShip - 1;
        if (y <= minY) {
          for (let i = 0; i < ship.lengthShip; i++) {
            this.board[y - i][x] = "o";
          }
        } else return "Tried to place off the edge";
      }
    },
    renderBoard() {
      for (let i = 0; i < this.board.length; i++) {
        let arrayString = "";
        for (let j = 0; j < this.board[i].length; j++) {
          arrayString += `[${this.board[i][j]} ]`;
        }
        console.log(`${i} | ${arrayString}`);
      }
    },
  };
}
