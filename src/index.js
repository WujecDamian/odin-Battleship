//put inside src/index.js
import "./styles.css";
import { gameBoard } from "./scripts/gameBoard/gameBoard.js";
import { realPlayer } from "./scripts/player/realPlayer.js";
import { aiPlayer } from "./scripts/player/aiPlayer.js";

let gameBoard1 = gameBoard();

gameBoard1.renderBoard();
