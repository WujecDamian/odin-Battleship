export function shipObj(name, length) {
  let hits = 0;
  isSunk = false;
  return {
    name,
    lengthShip: length,
    hit() {
      hits++;
    },
    isSunk() {
      this.isSunk = hits >= this.lengthShip;
      return this.isSunk;
    },
    getHits() {
      return hits;
    },
  };
}
