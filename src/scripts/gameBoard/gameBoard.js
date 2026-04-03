export function gameBoard() {
  return {
    board: new Array(100).fill("x", 0, -1),
    missed: 0,
    totalHits: 0,
    receiveAttack(coordinates) {},
  };
}
