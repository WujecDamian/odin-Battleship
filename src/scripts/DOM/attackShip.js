import { playTurn, getTurn } from "./playTurn.js";

export function attackShip(player, board) {
  board.addEventListener("click", (event) => {
    let turn = getTurn();
    if (turn === player.playerName) {
      const target = event.target;
      if (target.classList.contains("square")) {
        let placeOnBoard = player.playerBoard.board[target.id[0]][target.id[2]];
        let id = target.id.split(",");
        let attack = player.playerBoard.receiveAttack(id[0], id[1]);
        if (target.innerHTML !== "o" && target.innerHTML !== "x") {
          if (attack) {
            target.innerHTML = "o";
            playTurn();
          }
          if (!attack) {
            target.innerHTML = "x";
            playTurn();
          }
        }
      }
    }
  });
}
