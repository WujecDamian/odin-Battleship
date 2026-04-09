import { playTurn, getTurn } from "./playTurn.js";

export function attackShip(player, board) {
  board.addEventListener("click", (event) => {
    let turn = getTurn();
    if (turn === player.playerName) {
      const target = event.target;
      if (target.className === "square") {
        if (target.innerHTML !== "o" && target.innerHTML !== "x") {
          let id = target.id.split(",");
          let attack = player.playerBoard.receiveAttack(id[0], id[1]);
          if (attack === true) {
            target.innerHTML = "o";
          } else {
            target.innerHTML = "x";
          }
          playTurn();
        }
      }
    }
  });
}
