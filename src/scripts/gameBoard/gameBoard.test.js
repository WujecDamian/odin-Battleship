import { gameBoard } from "./gameBoard.js";

/* TEMPLATE

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

*/
describe("Gameboard tests", () => {
  let gBoard = gameBoard();

  test('places attack on [y][x] and marks spot with "x"', () => {
    gBoard.receiveAttack(5, 3);
    expect(gBoard.board[5][3]).toEqual("x");
  });

  test("Does nothing to array if tried to place ship off the edge", () => {
    gBoard.placeShip(gBoard.ships[0], 0, 6);
    expect(gBoard.board[0][6]).toEqual("");
    expect(gBoard.board[0][7]).toEqual("");
    expect(gBoard.board[0][8]).toEqual("");
    expect(gBoard.board[0][9]).toEqual("");
  });
});
