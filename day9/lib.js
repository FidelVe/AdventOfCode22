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
 * ..xx..
 * ...xx.
 * .xxxx.
 * ....x.
 * xxxx..
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
function makeCopyOfRope(rope) {
  const result = [];
  for (const each of rope) {
    result.push([...each]);
  }
  return result;
}
function getNewTPosition(hPosition, tPosition) {
  const hXCoord = Number(hPosition[0]);
  const hYCoord = Number(hPosition[1]);
  const tXCoord = Number(tPosition[0]);
  const tYCoord = Number(tPosition[1]);
  const result = [null, null];

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
  const tDoesntMove = isHNextToT(hPosition, tPosition);
  if (!tDoesntMove) {
    if (hXCoord === tXCoord || hYCoord === tYCoord) {
      result[0] = Math.ceil((hXCoord + tXCoord) / 2);
      result[1] = Math.ceil((hYCoord + tYCoord) / 2);
    } else {
      if (hYCoord > tYCoord && hXCoord > tXCoord) {
        result[0] = tXCoord + 1;
        result[1] = tYCoord + 1;
      } else if (hYCoord > tYCoord && hXCoord < tXCoord) {
        result[0] = tXCoord - 1;
        result[1] = tYCoord + 1;
      } else if (hYCoord < tYCoord && hXCoord < tXCoord) {
        result[0] = tXCoord - 1;
        result[1] = tYCoord - 1;
      } else if (hYCoord < tYCoord && hXCoord > tXCoord) {
        result[0] = tXCoord + 1;
        result[1] = tYCoord - 1;
      } else {
        //
        throw new Error(`This conditional should not happen`);
      }
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
      // newPosition[1] = newCoord.toString();
      newPosition[1] = newCoord;
      break;
    case "d":
      newCoord = currentYCoord - moveMagnitude;
      // newPosition[1] = newCoord.toString();
      newPosition[1] = newCoord;
      break;
    case "l":
      newCoord = currentXCoord - moveMagnitude;
      // newPosition[0] = newCoord.toString();
      newPosition[0] = newCoord;
      break;
    case "r":
      newCoord = moveMagnitude + currentXCoord;
      // newPosition[0] = newCoord.toString();
      newPosition[0] = newCoord;
      break;
    default:
      throw new Error(
        `Default case should not happen. move: ${move}. position: ${currentPosition}`
      );
  }

  return newPosition;
}

function vizualize(arrayOfPoints, minGridSize = 19, rowExtra = 20) {
  //
  const rowLength = minGridSize + rowExtra;
  const columnLength = minGridSize;
  const row = new Array(rowLength).fill(".");
  const grid = new Array(columnLength).fill(row);
  const rowCenter = Math.ceil(rowLength / 2);
  const columnCenter = Math.ceil(columnLength / 2);
  //
  grid.forEach((each, i) => {
    const row = each.reduce((ac, cv, ii) => {
      if (i === columnCenter && ii === rowCenter) {
        return ac + "o";
      }
      let charOutside = null;
      arrayOfPoints.forEach((point, iii) => {
        let char = "x";
        if (iii === 0) {
          char = "H";
        } else if (iii === arrayOfPoints.length - 1) {
          char = "T";
        }
        if (i === columnCenter + point[1] * -1 && ii === rowCenter + point[0]) {
          //
          charOutside = char;
        }
      });
      if (charOutside === null) {
        return ac + cv;
      } else {
        return ac + charOutside;
      }
    }, "");
    console.log(row);
  });
}
// const points = [
//   [-6, -6],
//   [-5, -5],
//   [-5, -4],
//   [-4, -3],
//   [-3, -2],
//   [-2, -1],
//   [-1, 0],
//   [0, 0],
//   [0, 0],
//   [0, 0]
// ];

// vizualize(points);
//
module.exports = {
  calculatePosition,
  isHNextToT,
  getNewTPosition,
  makeCopyOfRope,
  vizualize
};
