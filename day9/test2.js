const { isHNextToT } = require("./lib");

const positions = [
  [0, 0],
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [2, 0]
];

positions.forEach(each => {
  console.log(isHNextToT(each, [0, 0]));
});
