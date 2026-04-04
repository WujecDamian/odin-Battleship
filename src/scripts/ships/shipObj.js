export function shipObj(name, length) {
  let name = name;
  let length = length;
  let hits = 0;
  isSunk = false;
  return {
    hit() {},
    isSunk() {
      this.isSunk = hits >= length;
      return this.isSunk;
    },
  };
}
