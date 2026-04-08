import { gameBoard } from "../gameBoard/gameBoard.js";

export function aiPlayer() {
  return {
    playerBoard: gameBoard(),
    makeMove() {},
    placeShips() {
      let ships = this.playerBoard.ships;
      ships.forEach((ship) => {
        let placedCorrectly = false;
        let orientations = ["horizontal", "vertical"];
        let pickedOrientation;
        function pickOrientation() {
          pickedOrientation = orientations[Math.floor(Math.random() * 2)];
        }
        pickOrientation();

        if (pickedOrientation === "horizontal") {
          this.playerBoard.placeShip(
            ship,
            pickedOrientation,
            Math.floor(Math.floor(Math.random() * 9)),
            Math.floor(Math.floor(Math.random() * ship.lengthShip)),
          );
        } else if (pickedOrientation === "vertical") {
          this.playerBoard.placeShip(
            ship,
            pickedOrientation,
            Math.floor(
              Math.floor(Math.random() * 9 - ship.lengthShip) + ship.lengthShip,
            ),
            Math.floor(Math.floor(Math.random() * 9)),
          );
        }
      });
    },
  };
}
