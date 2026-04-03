import { gameBoard } from "../gameBoard/gameBoard.js";

export function realPlayer() {
  return {
    playerBoard: gameBoard(),
  };
}
