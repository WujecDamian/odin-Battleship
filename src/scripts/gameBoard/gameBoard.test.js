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
    expect(gBoard.board[5][3][0]).toEqual("x");
  });

  test("Does nothing to array if tried to place ship off the edge", () => {
    gBoard.placeShip(gBoard.ships[0], "horizontal", 0, 6);
    expect(gBoard.board[0][6]).toEqual("");
    expect(gBoard.board[0][7]).toEqual("");
    expect(gBoard.board[0][8]).toEqual("");
    expect(gBoard.board[0][9]).toEqual("");
  });

  test("Places 'o' marks when placing ship on right spot", () => {
    gBoard.placeShip(gBoard.ships[0], "horizontal", 3, 0);
    expect(gBoard.board[3][0][0]).toEqual("o");
    expect(gBoard.board[3][1][0]).toEqual("o");
    expect(gBoard.board[3][2][0]).toEqual("o");
    expect(gBoard.board[3][3][0]).toEqual("o");
    expect(gBoard.board[3][4][0]).toEqual("o");
  });
  test("Places 'o' marks when placing ship on right spot (vertically)", () => {
    gBoard.placeShip(gBoard.ships[4], "vertical", 3, 0);
    expect(gBoard.board[3][0][0]).toEqual("o");
    expect(gBoard.board[2][0][0]).toEqual("o");
  });
  test("Being able to specify which ship is hit (ship.name)", () => {
    gBoard.placeShip(gBoard.ships[4], "vertical", 9, 6);
    expect(gBoard.board[9][6][1]).toEqual(gBoard.ships[4]);
  });
  /* !----------------------RECEIVE ATTACK-----------------------! */
  test("Ship receives attack and it's hits count increase", () => {
    gBoard.placeShip(gBoard.ships[4], "vertical", 9, 6);
    gBoard.receiveAttack(9, 6);
    let ship = gBoard.board[9][6][1];
    expect(ship.getHits()).toEqual(1);
  });
});
