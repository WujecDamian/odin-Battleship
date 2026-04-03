export function gameBoard() {
  return {
    board: new Array(64).fill("x", 0, -1),
    missed: 0,
    receiveAttack(coordinates) {},
  };
}
