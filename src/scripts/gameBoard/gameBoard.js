import { shipObj } from "../ships/shipObj.js";

export function gameBoard() {
  return {
    board: Array(10)
      .fill()
      .map(() => Array(10).fill("")),
    ships: new Array(
      shipObj("carrier", 5),
      shipObj("battleship", 4),
      shipObj("cruiser", 3),
      shipObj("submarine", 3),
      shipObj("destroyer", 2),
    ),
    missed: 0,
    totalHits: 0,
    receiveAttack(y, x) {
      let hasHit = false;
      //Determine whether attack hit a ship
      if (this.board[y][x][0] === "o") {
        // t: => call hit function on correct ship [o]
        let ship = this.board[y][x][1];
        ship.hit();
        if (ship.getHits() === 17) {
          //! All of the ships have been sunk
        }
        hasHit = true;
      } else {
        this.board[y][x] = new Array("x");
        this.missed++;
      }
      return hasHit;
    },
    placeShip(ship, orientation, y, x) {
      let length = 0;
      let maxX = 9;
      let minY = 9;
      if (orientation === "horizontal") {
        maxX = 10 - ship.lengthShip;
        if (x <= maxX) {
          for (let i = 0; i < ship.lengthShip; i++) {
            this.board[y][x + i] = new Array("o", ship);
          }
        } else return "Tried to place off the edge";
      } else if (orientation === "vertical") {
        minY = ship.lengthShip - 1;
        if (y >= minY) {
          for (let i = 0; i < ship.lengthShip; i++) {
            this.board[y - i][x] = new Array("o", ship);
          }
        } else return "Tried to place off the edge";
      }
    },
  };
}
