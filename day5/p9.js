const { makeMove, input, getCopyOfState, getTopOfEach } = require("./input");

let stateBeforeMove = getCopyOfState();
let stateAfterMove = null;
let count = 1;

for (const eachMove of input) {
  stateAfterMove = makeMove(
    eachMove[0],
    eachMove[1],
    eachMove[2],
    stateBeforeMove
  );

  stateBeforeMove = getCopyOfState(stateAfterMove);
  const tops = getTopOfEach(stateBeforeMove);
  console.log(`tops for move ${count}`);
  console.log(tops);
  console.log("!--------");
  count += 1;
}
