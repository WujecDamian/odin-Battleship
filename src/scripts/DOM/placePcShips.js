import { renderBoard } from "./renderBoard.js";

export function placePcShips(player) {
  let board1 = document.querySelector(".board1");
  let playerboard = player.playerBoard.board;
  player.placeShips(player.playerBoard.ships);
  renderBoard(playerboard, "board1");
  /* Showing where human player ships are placed */
  let fieldsWithShips = player.playerBoard.fieldsWithShips;
  let squares = document.querySelectorAll(".board1 > .square");
  fieldsWithShips.forEach((field) => {
    for (let i = 0; i < 100; i++) {
      if (squares[i].id === field) {
        squares[i].innerHTML = "o";
      }
    }
  });
}
