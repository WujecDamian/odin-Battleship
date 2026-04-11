import { gameBoard } from "../gameBoard/gameBoard.js";
import { realPlayer } from "../player/realPlayer.js";
import { aiPlayer } from "../player/aiPlayer.js";
import { renderBoard } from "./renderBoard.js";
import { placePcShips } from "./placePcShips.js";
import { placeAiShips } from "./placeAiShips.js";
import { playTurn } from "./playTurn.js";
import { attackShip } from "./attackShip.js";

let newGameBtn1 = document.querySelector(".newgame__btn1");
let newGameBtn2 = document.querySelector(".newgame__btn2");
let startGameBtn = document.querySelector(".startgame__btn");
let board1 = document.querySelector(".board1");
let board2 = document.querySelector(".board2");

startGameBtn.addEventListener("click", () => {
  /* player 1 */
  let player1 = realPlayer();
  placePcShips(player1);
  attackShip(player1, board1);
  /* player 2 */
  let player2 = aiPlayer();
  placeAiShips(player2);
  attackShip(player2, board2);

  playTurn();
});
