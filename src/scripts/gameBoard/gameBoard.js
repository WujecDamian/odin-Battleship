import { shipObj } from "../ships/shipObj";

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
      //Determine whether attack hit a ship
      if (this.board[y][x][0] === "o") {
        // t: => call hit function on correct ship [o]
        let ship = this.board[y][x][1];
        ship.hit();
      } else {
        this.board[y][x] = new Array("x");
        this.missed++;
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
            this.board[y][x + i] = new Array("o", ship); //! this can't be just 'o' it has to be actual ship
          }
        } else return "Tried to place off the edge";
      } else if (orientation === "vertical") {
        minY = ship.lengthShip - 1;
        if (y >= minY) {
          for (let i = 0; i < ship.lengthShip; i++) {
            this.board[y - i][x] = new Array("o", ship); //! this can't be just 'o' it has to be actual ship
            //? this can be array with ["o"] <- to check if later if receiveAttack is "o" and [ship] <- to send hit() to this ship and later show e.g ship name
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
