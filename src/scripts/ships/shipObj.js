export function shipObj(length) {
  let length = length;
  let hits = 0;
  isSunk = false;
  return {
    hit() {},
    isSunk() {
      return hits >= length;
    },
  };
}
