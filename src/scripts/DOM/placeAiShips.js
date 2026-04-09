import { renderBoard } from "./renderBoard.js";

export function placeAiShips(player) {
  let board2 = document.querySelector(".board2");
  let playerboard = player.playerBoard.board;
  player.placeShips(player.playerBoard.ships);
  renderBoard(playerboard, "board2");
}
