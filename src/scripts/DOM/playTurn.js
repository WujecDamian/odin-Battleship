let turn = "p1";

export function getTurn() {
  return turn;
}

export function playTurn() {
  if (turn === "p1") turn = "p2";
  else turn = "p1";
  return turn;
}
