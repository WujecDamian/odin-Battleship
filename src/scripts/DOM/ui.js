import { gameBoard } from "../gameBoard/gameBoard.js";
import { realPlayer } from "../player/realPlayer.js";
import { aiPlayer } from "../player/aiPlayer.js";
import { renderBoard } from "./renderBoard.js";

let newGameBtn1 = document.querySelector(".newgame__btn1");
let newGameBtn2 = document.querySelector(".newgame__btn2");

let reloadGameBtn = document.querySelector(".reloadgame__btn");

reloadGameBtn.addEventListener("click", () => {
  window.location.reload();
});
newGameBtn1.addEventListener("click", () => {
  let player1 = realPlayer();

  let board1 = document.querySelector(".board1");

  let player1board = player1.playerBoard.board;
  player1.placeShips(player1.playerBoard.ships);

  renderBoard(player1board, "board1");

  board1.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "square") {
      if (target.innerHTML !== "o" && target.innerHTML !== "x") {
        console.log(`board 1: ${target.id}`);

        let id = target.id.split(",");

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
  let fieldsWithShips = player1.playerBoard.fieldsWithShips;
  let squares = document.querySelectorAll(".board1 > .square");
  let squaresArr = Array.from(squares);
  console.log(`${JSON.stringify(squares[0].id)}`);
  console.log(`${JSON.stringify(squaresArr)}`);
  console.log(`${fieldsWithShips[0][0]}`);

  fieldsWithShips.forEach((field) => {
    for (let i = 0; i < 10; i++) {
      /* console.log(`square[index].id ${squares[i].id}`); */

      if (squares[i].id === field) {
        console.log("matches");

        squares[i].innerHTML = "o";
      }
    }
  });
});
newGameBtn2.addEventListener("click", () => {
  let player2 = aiPlayer();

  let board2 = document.querySelector(".board2");

  let player2board = player2.playerBoard.board;
  player2.placeShips(player2.playerBoard.ships);

  renderBoard(player2board, "board2");

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
