const { calculatePosition, getNewTPosition } = require("./lib");
const input = require("./input");

const tRoute = [[0, 0]];
const coordVisitedByTAtLeastOneTime = ["0,0"];
const hPosition = [0, 0];
let counter = 0;
let counter2 = 0;

for (const move of input) {
  // console.log(move);
  const direction = move[0];
  const magnitude = Number(move[1]);
  //
  const b = JSON.stringify(move);
  const f = [...hPosition];
  const a = [...tRoute[tRoute.length - 1]];
  //
  if (Number.isNaN(magnitude)) {
    throw new Error(`magnitude is not a number. magnitude: ${magnitude}`);
  }
  for (let i = 0; i < magnitude; i++) {
    counter += 1;
    const lastTPosition = [...tRoute[tRoute.length - 1]];
    const newHPosition = calculatePosition([direction, 1], hPosition);
    const newTPosition = getNewTPosition(newHPosition, lastTPosition);
    // console.log(`H moved from ${hPosition} to ${newHPosition}`);
    hPosition[0] = newHPosition[0];
    hPosition[1] = newHPosition[1];
    const positionAsString = newTPosition.toString();
    //
    // if (counter2 === 20) {
    // if (positionAsString === "-1,-18") {
    if (counter === 65) {
      //
      console.log("HERE!");
      console.log(counter);
      console.log(counter2);
      console.log(coordVisitedByTAtLeastOneTime.length);
      console.log(`position as string: ${positionAsString}`);
      console.log(`move: ${b}`);
      console.log(`hPosition: ${f}`);
      console.log(`tRoute: ${a}`);
      console.log(coordVisitedByTAtLeastOneTime.includes(positionAsString));
      console.log(coordVisitedByTAtLeastOneTime.indexOf(positionAsString));
    }
    //
    if (!coordVisitedByTAtLeastOneTime.includes(positionAsString)) {
      coordVisitedByTAtLeastOneTime.push(positionAsString);
      counter2 += 1;
    }
    tRoute.push(newTPosition);
    // console.log(`T moved from ${lastTPosition} to ${newTPosition}`);
    // console.log("|----------------");
  }
}
console.log("T route (at least one):");
console.log(coordVisitedByTAtLeastOneTime);
// console.log("T route");
// console.log(tRoute);
// console.log(tRoute.length);
console.log(
  `T route (at least one) length: ${coordVisitedByTAtLeastOneTime.length}`
);
console.log(`Steps: ${counter}`);
