export function renderBoard(board, boardClass) {
  console.log("hejka");
  let boardDiv = document.querySelector(`.${boardClass}`);
  board.forEach((element) => {
    element.forEach((field) => {
      let square = document.createElement("div");
      square.className = "square";
      boardDiv.append(square);
    });
  });
}
