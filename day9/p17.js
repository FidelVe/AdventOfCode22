const { calculatePosition, getNewTPosition } = require("./lib");
const input = require("./input");

const tRoute = [[0, 0]];
const coordVisitedByTAtLeastOneTime = ["0,0"];
const hPosition = [0, 0];
let counter = 0;

for (const move of input) {
  console.log(move);
  const direction = move[0];
  const magnitude = Number(move[1]);
  if (Number.isNaN(magnitude)) {
    throw new Error(`magnitude is not a number. magnitude: ${magnitude}`);
  }
  for (let i = 0; i < magnitude; i++) {
    counter += 1;
    const lastTPosition = [...tRoute[tRoute.length - 1]];
    const newHPosition = calculatePosition([direction, 1], hPosition);
    const newTPosition = getNewTPosition(
      newHPosition,
      lastTPosition,
      hPosition
    );
    console.log(`H moved from ${hPosition} to ${newHPosition}`);
    hPosition[0] = newHPosition[0];
    hPosition[1] = newHPosition[1];
    if (
      lastTPosition[0] != newTPosition[0] ||
      lastTPosition[1] != newTPosition[1]
    ) {
      const positionAsString = newTPosition.toString();
      if (!coordVisitedByTAtLeastOneTime.includes(positionAsString)) {
        coordVisitedByTAtLeastOneTime.push(positionAsString);
      }
      tRoute.push(newTPosition);
    }
    console.log(`T moved from ${lastTPosition} to ${newTPosition}`);
    console.log("|----------------");
  }
}
console.log("T route (at least one):");
console.log(coordVisitedByTAtLeastOneTime);
console.log(
  `T route (at least one) length: ${coordVisitedByTAtLeastOneTime.length}`
);
console.log(`Steps: ${counter}`);
