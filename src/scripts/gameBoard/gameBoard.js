import { shipObj } from "../ships/shipObj.js";

export function gameBoard() {
  return {
    board: Array(10)
      .fill()
      .map(() => Array(10).fill([""])),
    ships: new Array(
      shipObj("carrier", 5),
      shipObj("battleship", 4),
      shipObj("cruiser", 3),
      shipObj("submarine", 3),
      shipObj("destroyer", 2),
    ),
    fieldsWithShips: [],
    missed: 0,
    totalHits: 0,
    receiveAttack(y, x) {
      let hasHit = false;
      //Determine whether attack hit a ship
      if (this.board[y][x][0] === "o") {
        let ship = this.board[y][x][1];
        ship.hit();
        if (ship.getHits() === 17) {
          //! All of the ships have been sunk
        }
        hasHit = true;
      } else {
        this.missed++;
      }
      return hasHit;
    },
    placeShip(ship, orientation, y, x) {
      let length = 0;
      let maxX = 9;
      let minY = 9;
      let isClear = true;
      if (orientation === "horizontal") {
        maxX = 10 - ship.lengthShip;
        if (x <= maxX) {
          for (let i = 0; i < ship.lengthShip; i++) {
            if (this.board[y][x + i][0] === "o") {
              console.log(`${this.board[y][x + i][0]} ISN'T CLEAR`);

              isClear = false;
            }
          }
          if (isClear) {
            for (let i = 0; i < ship.lengthShip; i++) {
              this.board[y][x + i] = new Array("o", ship);
            }
            isClear = true;
          }
        }
      } else if (orientation === "vertical") {
        minY = ship.lengthShip - 1;
        if (y >= minY) {
          for (let i = 0; i < ship.lengthShip; i++) {
            if (this.board[y - i][x][0] === "o") {
              console.log(`${this.board[y - i][x][0]} ISN'T CLEAR`);

              isClear = false;
            }
          }
          if (isClear) {
            for (let i = 0; i < ship.lengthShip; i++) {
              this.board[y - i][x] = new Array("o", ship);
            }
            isClear = true;
          }
        }
      }
      this.showHumanPlayerShips();
      return isClear;
    },
    showHumanPlayerShips() {
      let board = this.board;
      for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
          if (board[y][x][0] !== "") {
            this.fieldsWithShips.push(`${y},${x}`);
          }
        }
      }
    },
  };
}
