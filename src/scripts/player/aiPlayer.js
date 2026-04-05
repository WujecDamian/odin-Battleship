import { gameBoard } from "../gameBoard/gameBoard.js";

export function aiPlayer() {
  return {
    playerBoard: gameBoard(),
    makeMove() {},
  };
}
