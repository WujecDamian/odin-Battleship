export function gameBoard() {
  return {
    board: new Array(10).fill("[],[],[],[],[],[],[],[],[],[]", 0, -1),
    missed: 0,
    totalHits: 0,
    receiveAttack(coordinates) {
      //Determine whether attack hit a ship
      // t: => call hit function on correct ship [o]
      // f: => mark spot as missed [x]
    },
    placeShip(ship, coordinates) {},
  };
}
