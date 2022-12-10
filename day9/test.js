const { calculatePosition } = require("./lib");

const initPosition = ["0", "0"];
const moves = [["U", "20"], ["d", 20], ["l", 201], ["r", 201]];

// const newPosition = calculatePosition(moves[0], initPosition);
// const newPosition2 = calculatePosition(moves[1], initPosition);
// const newPosition3 = calculatePosition(moves[2], initPosition);
// const newPosition4 = calculatePosition(moves[3], initPosition);

// console.log(initPosition);
// console.log(newPosition);
// console.log(newPosition2);
// console.log(newPosition3);
// console.log(newPosition4);

let newPosition5 = [...initPosition];
for (let i = 0; i < moves.length; i++) {
  newPosition5 = calculatePosition(moves[i], newPosition5);
  console.log(newPosition5);
}
