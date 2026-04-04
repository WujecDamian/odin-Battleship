import { gameBoard } from "./gameBoard.js";

/* TEMPLATE

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

*/
describe("matching cities to foods", () => {
  let gBoard = gameBoard();

  test('places attack on [y][x] and marks spot with "x"', () => {
    gBoard.receiveAttack(5, 3);
    expect(gBoard.board[5][3]).toEqual("x");
  });

  test('places ship on [y][x] and marks spot with "o"', () => {
    gBoard.placeShip("Carrier", 0, 6);
    expect(gBoard.board[0][6]).toEqual("o");
  });
});
