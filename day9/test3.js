const { getNewTPosition } = require("./lib");

const tPosition = [-1, -9];
const hPositions = [
  [[-1, -9], [-1, -9]],
  [[0, -9], [-1, -9]],
  [[1, -9], [0, -9]]
];

hPositions.forEach(each => {
  const newTPosition = getNewTPosition(each[0], tPosition, each[1]);
  console.log(`${each} & ${tPosition} => ${newTPosition}`);
});
