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
  player2.placeShips();

  renderBoard(player1board, "board1");
  renderBoard(player2board, "board2");

  board1.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "square") {
      if (target.innerHTML !== "o" && target.innerHTML !== "x") {
        console.log(`board 1: ${target.id}`);

        let id = target.id.split(",");
        console.log(`${id[0]} | ${id[1]}`);

        player1.playerBoard.receiveAttack(id[0], id[1]);

        let attack = player1.playerBoard.receiveAttack(id[0], id[1]);
        if (attack === true) {
          target.innerHTML = "o";
        } else {
          target.innerHTML = "x";
        }
      }
    }
  });
  board2.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "square") {
      if (target.innerHTML !== "o" && target.innerHTML !== "x") {
        console.log(`board 2: ${target.id}`);

        let id = target.id.split(",");
        let attack = player2.playerBoard.receiveAttack(id[0], id[1]);
        if (attack === true) {
          target.innerHTML = "o";
        } else {
          target.innerHTML = "x";
        }
      }
    }
  });
});
