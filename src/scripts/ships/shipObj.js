export function shipObj(name, length) {
  name = name;
  lengthShip = length;
  let hits = 0;
  isSunk = false;
  return {
    hit() {},
    isSunk() {
      this.isSunk = hits >= lengthShip;
      return this.isSunk;
    },
  };
}
