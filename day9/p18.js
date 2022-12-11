const {
  calculatePosition,
  getNewTPosition,
  makeCopyOfRope,
  vizualize
} = require("./lib");
const input = require("./input");

const ropeRoute = [];
const coordVisitedByTAtLeastOneTime = ["0,0"];
const hPosition = [0, 0];
let ropePrev = [
  [0, 0], // head
  [0, 0], // knot 1
  [0, 0], // knot 2
  [0, 0], // knot 3
  [0, 0], // knot 4
  [0, 0], // knot 5
  [0, 0], // knot 6
  [0, 0], // knot 7
  [0, 0], // knot 8
  [0, 0] // tail
];
const rope = [
  [0, 0], // head
  [0, 0], // knot 1
  [0, 0], // knot 2
  [0, 0], // knot 3
  [0, 0], // knot 4
  [0, 0], // knot 5
  [0, 0], // knot 6
  [0, 0], // knot 7
  [0, 0], // knot 8
  [0, 0] // tail
];
ropeRoute.push(makeCopyOfRope(rope));

for (const move of input) {
  //
  // console.log(move);
  //
  const direction = move[0];
  const magnitude = Number(move[1]);

  if (Number.isNaN(magnitude)) {
    throw new Error(`magnitude is not a number. magnitude: ${magnitude}`);
  }
  for (let i = 0; i < magnitude; i++) {
    const newHPosition = calculatePosition([direction, 1], rope[0]);
    rope[0] = [...newHPosition];
    for (let ii = 1; ii < rope.length; ii++) {
      const currentKnotPosition = [...rope[ii]];
      const newKnotPosition = getNewTPosition(rope[ii - 1], rope[ii]);
      rope[ii] = [...newKnotPosition];
      //
    }
    //
    ropeRoute.push(makeCopyOfRope(rope));
    ropePrev = [...rope];
    const positionAsString = rope[rope.length - 1].toString();
    if (!coordVisitedByTAtLeastOneTime.includes(positionAsString)) {
      coordVisitedByTAtLeastOneTime.push(positionAsString);
    }
  }
}
console.log(ropeRoute.slice(0, 20));
console.log("T route (at least one):");
console.log(coordVisitedByTAtLeastOneTime);
console.log(
  `T route (at least one) length: ${coordVisitedByTAtLeastOneTime.length}`
);

// ropeRoute.forEach(points => {
//   vizualize(points, 35);
//   console.log(">");
// });
