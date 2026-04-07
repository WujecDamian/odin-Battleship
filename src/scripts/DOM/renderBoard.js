export function renderBoard(board, boardClass) {
  let boardDiv = document.querySelector(`.${boardClass}`);
  boardDiv.replaceChildren();
  let col = 0;
  board.forEach((element) => {
    let row = 0;
    element.forEach((field) => {
      let square = document.createElement("div");
      square.className = "square";
      square.id = `${col},${row}`;
      boardDiv.append(square);
      row++;
    });
    col++;
  });
}
