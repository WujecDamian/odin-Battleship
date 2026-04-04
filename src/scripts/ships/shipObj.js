export function shipObj(name, length) {
  name = name;
  let hits = 0;
  isSunk = false;
  return {
    lengthShip: length,
    hit() {},
    isSunk() {
      this.isSunk = hits >= lengthShip;
      return this.isSunk;
    },
  };
}
