const { isHNextToT } = require("./lib");

const positions = [
  // [0, 0],
  // [1, 0],
  // [-1, 0],
  // [0, 1],
  // [0, -1],
  // [1, 1],
  // [-1, -1],
  // [1, -1],
  // [-1, 1],
  // [2, 0],
  [-1, -17],
  [-1, -18],
  [-1, -19],
  [-1, -20]
];

positions.forEach(each => {
  console.log(isHNextToT(each, [-1, -18]));
});
