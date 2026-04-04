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
      switch (String.toLowerCase(ship)) {
        case "carrier":
          length = 5;
          break;
        case "battleship":
          length = 4;
          break;
        case "cruiser":
        case "submarine":
          length = 3;
          break;
        case "destroyer":
          length = 2;
          break;
        default:
          alert("Ship is invalid! There's nothing like - " + ship);
      }
      if (orientation === "horizontal") {
      } else if (orientation === "vertical") {
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
