export function gameBoard() {
  return {
    board: Array(10)
      .fill()
      .map(() => Array(10).fill("")),
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
    placeShip(ship, x, y) {},
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
