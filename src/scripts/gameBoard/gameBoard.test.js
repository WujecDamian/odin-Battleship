import { gameBoard } from "./gameBoard.js";

/* TEMPLATE

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

*/
test('places attack on [x][y] and marks spot with "x"', () => {
  let gBoard = gameBoard();
  gBoard.receiveAttack(5, 3);
  expect(gBoard.board[5][3]).toEqual("x");
});
