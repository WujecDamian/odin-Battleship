export function checkHasWon(player) {
  const ships = player.playerBoard.ships;
  let totalHits = 0;

  for (let i = 0; i < ships.length; i++) {
    totalHits += ships[i].getHits();
  }
  if (totalHits === 17) {
    window.alert(`${player.playerName} Has won!`);
    window.alert(`Let's play another game!`);
    window.location.reload();
  }
}
