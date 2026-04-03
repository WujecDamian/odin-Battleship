export function shipObj(length) {
  return {
    length,
    hits: 0,
    isSunk: false,
    hit() {},
    isSunk() {},
  };
}
