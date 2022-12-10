const input = require("./input");

/*
 *
 * .....    .....    .....    .....
 * .....    .....    .....    .....
 * ..B.. -> .HT.. -> H.T.. -> HT...
 * .....    .....    .....    .....
 * .....    .....    .....    .....
 *
 * .....    .....    .....    .....
 * .....    .....    .....    .....
 * .HT.. -> ..T.. -> ..T.. -> .....
 * .....    .H...    .....    .T...
 * .....    .....    .H...    .H...
 *
 * positions are described as an array of length 2
 * ie = ["3", "2"]
 * -3+3 -2+3 -1+3 +0+3 +1+3 +2+3 +3+3
 * -3+2 -2+2 -1+2 +0+2 +1+2 +2+2 +3+2 <-
 * -3+1 -2+1 -1+1 +0+1 +1+1 +2+1 +3+1
 * -3+0 -2+0 -1+0 +0+0 +1+0 +2+0 +3+0
 * -3-1 -2-1 -1-1 +0-1 +1-1 +2-1 +3-1
 * -3-2 -2-2 -1-2 +0-2 +1-2 +2-2 +3-2
 * -3-3 -2-3 -1-3 +0-3 +1-3 +2-3 +3-3
 */

// function updatePathUsed(move, path) {
//   const currentPosition = path[path.length - 1];
// }

function isHNextToT(hPosition, tPosition) {
  const hXCoord = Number(hPosition[0]);
  const hYCoord = Number(hPosition[1]);
  const tXCoord = Number(tPosition[0]);
  const tYCoord = Number(tPosition[1]);
  let result = false;

  if (
    Number.isNaN(hXCoord) ||
    Number.isNaN(hYCoord) ||
    Number.isNaN(tXCoord) ||
    Number.isNaN(tYCoord)
  ) {
    throw new Error(
      `Wrong format for hPosition and/or tPosition. hPosition: ${hPosition}, tPosition: ${tPosition}`
    );
  }

  if (
    hXCoord >= tXCoord - 1 &&
    hXCoord <= tXCoord + 1 &&
    hYCoord >= tYCoord - 1 &&
    hYCoord <= tYCoord + 1
  ) {
    result = true;
  }
  return result;
}
function getNewTPosition(hPosition, tPosition, lastHPosition) {
  const hXCoord = Number(hPosition[0]);
  const hYCoord = Number(hPosition[1]);
  const tXCoord = Number(tPosition[0]);
  const tYCoord = Number(tPosition[1]);
  const hXCoordOld = Number(lastHPosition[0]);
  const hYCoordOld = Number(lastHPosition[1]);
  const result = [null, null];

  if (
    Number.isNaN(hXCoord) ||
    Number.isNaN(hYCoord) ||
    Number.isNaN(tXCoord) ||
    Number.isNaN(tYCoord) ||
    Number.isNaN(hXCoordOld) ||
    Number.isNaN(hYCoordOld)
  ) {
    throw new Error(
      `Wrong format for hPosition and/or tPosition. hPosition: ${hPosition}, tPosition: ${tPosition}`
    );
  }
  const tDoesntMove = isHNextToT(hPosition, tPosition);
  if (!tDoesntMove) {
    if (hXCoord === tXCoord || hYCoord === tYCoord) {
      result[0] =
        (hXCoord + tXCoord) / 2 === 0
          ? hXCoord
          : Math.ceil((hXCoord + tXCoord) / 2);
      result[1] =
        (hYCoord + tYCoord) / 2 === 0
          ? hYCoord
          : Math.ceil((hYCoord + tYCoord) / 2);
    } else {
      result[0] = hXCoordOld;
      result[1] = hYCoordOld;
    }
  } else {
    result[0] = tPosition[0];
    result[1] = tPosition[1];
  }

  return result;
}
function calculatePosition(move, currentPosition) {
  const moveDirection = move[0].toLowerCase();
  const moveMagnitude = Number(move[1]);

  const newPosition = [...currentPosition];
  const currentXCoord = Number(newPosition[0]);
  const currentYCoord = Number(newPosition[1]);
  if (
    Number.isNaN(currentXCoord) ||
    Number.isNaN(currentYCoord) ||
    Number.isNaN(moveMagnitude)
  ) {
    throw new Error(
      `Wrong format for position and/or move. position: ${currentPosition}, move: ${move}`
    );
  }
  let newCoord = null;
  switch (moveDirection) {
    case "u":
      newCoord = moveMagnitude + currentYCoord;
      newPosition[1] = newCoord.toString();
      break;
    case "d":
      newCoord = currentYCoord - moveMagnitude;
      newPosition[1] = newCoord.toString();
      break;
    case "l":
      newCoord = currentXCoord - moveMagnitude;
      newPosition[0] = newCoord.toString();
      break;
    case "r":
      newCoord = moveMagnitude + currentXCoord;
      newPosition[0] = newCoord.toString();
      break;
    default:
      throw new Error(
        `Default case should not happen. move: ${move}. position: ${currentPosition}`
      );
  }

  return newPosition;
}

module.exports = {
  calculatePosition,
  isHNextToT,
  getNewTPosition
};
