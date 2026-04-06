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
  test("Ship isSunk function return true after hits count === length", () => {
    gBoard.placeShip(gBoard.ships[4], "vertical", 9, 6);
    gBoard.receiveAttack(9, 6);
    gBoard.receiveAttack(8, 6);
    let ship = gBoard.board[9][6][1];
    expect(ship.isSunk()).toEqual(true);
  });
  test("Ship is one object and hit increases on all 5 points (NOT 1point = 1ship", () => {
    gBoard.placeShip(gBoard.ships[2], "horizontal", 5, 2);
    gBoard.receiveAttack(5, 2);
    let ship1 = gBoard.board[5][2][1];
    let ship2 = gBoard.board[5][3][1];
    let ship3 = gBoard.board[5][4][1];

    expect(ship1.getHits()).toEqual(3);
    expect(ship2.getHits()).toEqual(3);
    expect(ship3.getHits()).toEqual(3);
  });
});
