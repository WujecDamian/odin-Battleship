export function shipObj(name, length) {
  let hits = 0;
  isSunk = false;
  return {
    name,
    lengthShip: length,
    hit() {
      this.hits++;
    },
    isSunk() {
      this.isSunk = hits >= lengthShip;
      return this.isSunk;
    },
  };
}
