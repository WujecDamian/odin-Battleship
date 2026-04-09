import { renderBoard } from "./renderBoard.js";

export function placePcShips(player) {
  let board1 = document.querySelector(".board1");

  let playerboard = player.playerBoard.board;
  player.placeShips(player.playerBoard.ships);

  renderBoard(playerboard, "board1");

  board1.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "square") {
      if (target.innerHTML !== "o" && target.innerHTML !== "x") {
        console.log(`board 1: ${target.id}`);

        let id = target.id.split(",");

        player.playerBoard.receiveAttack(id[0], id[1]);

        let attack = player.playerBoard.receiveAttack(id[0], id[1]);
        if (attack === true) {
          target.innerHTML = "o";
        } else {
          target.innerHTML = "x";
        }
      }
    }
  });
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
