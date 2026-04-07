export function renderBoard(board, boardClass) {
  let board = document.querySelector(`.${boardClass}`);
  board.forEach((element) => {
    let square = document.createElement("div");
    square.className = "square";
    board.append(square);
  });
}
