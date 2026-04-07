export function renderBoard(board, boardClass) {
  let boardDiv = document.querySelector(`.${boardClass}`);
  boardDiv.replaceChildren();
  board.forEach((element) => {
    element.forEach((field) => {
      let square = document.createElement("div");
      square.className = "square";
      boardDiv.append(square);
    });
  });
}
