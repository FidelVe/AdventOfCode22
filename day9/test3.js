const { getNewTPosition } = require("./lib");

const tPosition = [0, 0];
const hPositions = [[0, 0], [1, 0], [2, 0], [1, 1], [2, 1], [-2, 1]];

hPositions.forEach(each => {
  const newTPosition = getNewTPosition(each, tPosition);
  console.log(`${each} & ${tPosition} => ${newTPosition}`);
});
