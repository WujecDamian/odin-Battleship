import { gameBoard } from "../gameBoard/gameBoard.js";

export function realPlayer() {
  return {
    playerName: "p1",
    playerBoard: gameBoard(),
    placeShips(ships) {
      ships.forEach((ship) => {
        let hasPlaced = false;
        let orientations = ["horizontal", "vertical"];
        let pickedOrientation;
        function pickOrientation() {
          pickedOrientation = orientations[Math.floor(Math.random() * 2)];
        }
        pickOrientation();

        if (pickedOrientation === "horizontal") {
          while (hasPlaced === false) {
            hasPlaced = this.playerBoard.placeShip(
              ship,
              pickedOrientation,
              Math.floor(Math.floor(Math.random() * 9)),
              Math.floor(Math.floor(Math.random() * ship.lengthShip)),
            );
          }
        } else if (pickedOrientation === "vertical") {
          while (hasPlaced === false) {
            hasPlaced = this.playerBoard.placeShip(
              ship,
              pickedOrientation,
              Math.floor(
                Math.floor(Math.random() * ship.lengthShip) +
                  ship.lengthShip -
                  1,
              ),
              Math.floor(Math.floor(Math.random() * 9)),
            );
          }
        }
      });
    },
  };
}
