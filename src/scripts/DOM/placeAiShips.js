import { renderBoard } from "./renderBoard.js";

export function placeAiShips(player) {
  let board2 = document.querySelector(".board2");

  let playerboard = player.playerBoard.board;
  player.placeShips(player.playerBoard.ships);

  renderBoard(playerboard, "board2");

  board2.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "square") {
      if (target.innerHTML !== "o" && target.innerHTML !== "x") {
        console.log(`board 2: ${target.id}`);

        let id = target.id.split(",");
        let attack = player.playerBoard.receiveAttack(id[0], id[1]);
        if (attack === true) {
          target.innerHTML = "o";
        } else {
          target.innerHTML = "x";
        }
      }
    }
  });
}
