import { gameBoard } from "../gameBoard/gameBoard.js";
import { realPlayer } from "../player/realPlayer.js";
import { aiPlayer } from "../player/aiPlayer.js";
import { renderBoard } from "./renderBoard.js";

let newGameBtn = document.querySelector(".newgame__btn");

newGameBtn.addEventListener("click", () => {
  let player1 = realPlayer();
  let player2 = aiPlayer();

  let board1 = document.querySelector(".board1");
  let board2 = document.querySelector(".board2");

  let player1board = player1.playerBoard.board;
  let player2board = player2.playerBoard.board;
  renderBoard(player1board, "board1");
  renderBoard(player2board, "board2");
});
