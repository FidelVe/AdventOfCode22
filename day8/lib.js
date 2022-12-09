const input = require("./input");

/*
 * checks if item in position param is visible from all 4 sides of the
 * matrix
 * @param position {Number[]} - array ([row, column]) defining position of item
 * @param matrix  {String[]} - matrix
 *
 * the folowing is an example of a 3x3 (row X column) matrix
 *           +--------------+
 *           | 11 | 12 | 13 |
 *           | 21 | 22 | 33 |
 *           | 31 | 32 | 33 |
 *           +--------------+
 */
function checkVisibility(position, matrix = input) {
  // check score of item in a given position for a  given matrix
  // the item is visible if any of the other items from it to an edge
  // are smaller than the item.
  // the score is checked on four sides of the matrix, north, east, south
  // and west.
  // the result is an array of boolean values, true if that side is visible,
  // false if not. the array order is north, east, south, west.
  const visibility = [true, true, true, true];
  const matrixSize = getMatrixSize(matrix);

  if (position[1] > matrixSize[1] || position[0] > matrixSize[0]) {
    throw new Error(
      `Position "${position}" outside of boundaries of matrix of size "${matrixSize}"`
    );
  }

  const positionToIndex = [position[0] - 1, position[1] - 1];
  const valueInPosition = Number(
    matrix[positionToIndex[0]][positionToIndex[1]]
  );
  if (Number.isNaN(valueInPosition)) {
    throw new Error(
      `Value in position is not a number. value = '${
        matrix[positionToIndex[0]][positionToIndex[1]]
      }'`
    );
  }

  // check visibility for north side
  visibility[0] = checkSideVisibility(positionToIndex, "N", matrix);
  // check visibility for east side
  visibility[1] = checkSideVisibility(positionToIndex, "E", matrix);
  // check visibility for south side
  visibility[2] = checkSideVisibility(positionToIndex, "S", matrix);
  // check visibility for west side
  visibility[3] = checkSideVisibility(positionToIndex, "W", matrix);

  return visibility;
}

function checkSideVisibility(positionAsIndex, side = "N", matrix) {
  const matrixSize = getMatrixSize(matrix);
  const valueInPositionRaw = matrix[positionAsIndex[0]][positionAsIndex[1]];
  const valueInPosition = Number(valueInPositionRaw);
  let firstIterator = null;
  let maxIterator = null;
  const mutable = (a, b) => matrix[a][b];
  let mutated = null;

  switch (side) {
    case "N":
      if (positionAsIndex[0] === 0) return true;
      firstIterator = 0;
      maxIterator = positionAsIndex[0];
      mutated = a => mutable(a, positionAsIndex[1]);
      break;
    case "E":
      if (positionAsIndex[1] + 1 === matrixSize[1]) return true;
      firstIterator = positionAsIndex[1] + 1;
      maxIterator = matrixSize[1];
      mutated = a => mutable(positionAsIndex[0], a);
      break;
    case "S":
      if (positionAsIndex[0] + 1 === matrixSize[0]) return true;
      firstIterator = positionAsIndex[0] + 1;
      maxIterator = matrixSize[0];
      mutated = a => mutable(a, positionAsIndex[1]);
      break;
    case "W":
      if (positionAsIndex[1] === 0) return true;
      firstIterator = 0;
      maxIterator = positionAsIndex[1];
      mutated = a => mutable(positionAsIndex[0], a);
      break;
    default:
      return null;
  }
  // check side score
  for (i = firstIterator; i < maxIterator; i++) {
    const valueToCompareRaw = mutated(i);
    const valueToCompare = Number(valueToCompareRaw);
    if (Number.isNaN(valueToCompare)) {
      throw new Error(
        `Value to compare is not a number. value = '${valueToCompareRaw}'`
      );
    }
    if (valueToCompare >= valueInPosition) {
      //
      return false;
    }
  }
  return true;
}

function getScenicScore(position, matrix = input) {
  //
  // console.log(`matrix = ${matrix}`);
  // console.log(`position = ${position}`);
  const matrixSize = getMatrixSize(matrix);

  if (position[1] > matrixSize[1] || position[0] > matrixSize[0]) {
    throw new Error(
      `Position "${position}" outside of boundaries of matrix of size "${matrixSize}"`
    );
  }

  const positionToIndex = [position[0] - 1, position[1] - 1];
  const valueInPosition = Number(
    matrix[positionToIndex[0]][positionToIndex[1]]
  );
  if (Number.isNaN(valueInPosition)) {
    throw new Error(
      `Value in position is not a number. value = '${
        matrix[positionToIndex[0]][positionToIndex[1]]
      }'`
    );
  }

  // check score for north side
  // console.log(">---compare north");
  const scoreN = getSideScore(positionToIndex, "N", matrix);
  // check score for east side
  // console.log("|----------");
  // console.log(">---compare east");
  const scoreE = getSideScore(positionToIndex, "E", matrix);
  // check score for south side
  // console.log("|----------");
  // console.log(">---compare south");
  const scoreS = getSideScore(positionToIndex, "S", matrix);
  // check score for west side
  // console.log("|----------");
  // console.log(">---compare west");
  const scoreW = getSideScore(positionToIndex, "W", matrix);
  // console.log("|----------");
  // console.log(`${scoreN}, ${scoreE}, ${scoreS}, ${scoreW}`);

  return scoreN * scoreE * scoreS * scoreW;
}

function getSideScore(positionAsIndex, side = "N", matrix) {
  const matrixSize = getMatrixSize(matrix);
  const valueInPositionRaw = matrix[positionAsIndex[0]][positionAsIndex[1]];
  const valueInPosition = Number(valueInPositionRaw);
  let firstIterator = null;
  let maxIterator = null;
  const mutable = (a, b) => matrix[a][b];
  let mutated = null;

  switch (side) {
    case "N":
      if (positionAsIndex[0] === 0) return 0;
      firstIterator = positionAsIndex[0] - 1;
      maxIterator = 0;
      mutated = a => mutable(a, positionAsIndex[1]);
      break;
    case "E":
      if (positionAsIndex[1] + 1 === matrixSize[1]) return 0;
      firstIterator = positionAsIndex[1] + 1;
      maxIterator = matrixSize[1];
      mutated = a => mutable(positionAsIndex[0], a);
      break;
    case "S":
      if (positionAsIndex[0] + 1 === matrixSize[0]) return 0;
      firstIterator = positionAsIndex[0] + 1;
      maxIterator = matrixSize[0];
      mutated = a => mutable(a, positionAsIndex[1]);
      break;
    case "W":
      if (positionAsIndex[1] === 0) return 0;
      firstIterator = positionAsIndex[1] - 1;
      maxIterator = 0;
      mutated = a => mutable(positionAsIndex[0], a);
      break;
    default:
      return null;
  }
  // get score
  counter = null;
  if (side === "N" || side === "W") {
    counter = 0;
    // console.log(
    //   `firstIterator = ${firstIterator}. maxIterator = ${maxIterator}`
    // );
    for (i = firstIterator; i >= maxIterator; i--) {
      counter += 1;
      // console.log(`i = ${i}`);
      const valueToCompareRaw = mutated(i);
      const valueToCompare = Number(valueToCompareRaw);
      if (Number.isNaN(valueToCompare)) {
        throw new Error(
          `Value to compare is not a number. value = '${valueToCompareRaw}'`
        );
      }
      // console.log(`counter ${counter}`);
      // console.log(`value: ${valueInPosition} => compare ${valueToCompare}`);
      if (valueInPosition <= valueToCompare) {
        //
        return counter;
      }
    }
  } else {
    counter = 0;
    // console.log(
    //   `firstIterator = ${firstIterator}. maxIterator = ${maxIterator}`
    // );
    for (i = firstIterator; i < maxIterator; i++) {
      counter += 1;
      // console.log(`i = ${i}`);
      const valueToCompareRaw = mutated(i);
      const valueToCompare = Number(valueToCompareRaw);
      if (Number.isNaN(valueToCompare)) {
        throw new Error(
          `Value to compare is not a number. value = '${valueToCompareRaw}'`
        );
      }
      // console.log(`counter ${counter}`);
      // console.log(`value: ${valueInPosition} => compare ${valueToCompare}`);
      if (valueInPosition <= valueToCompare) {
        //
        return counter;
      }
    }
  }
  return counter;
}
function isMatrixRegular(matrix) {
  // check if the input is a regular (square) matrix
  let result = true;

  let length = matrix[0].length;
  for (const row of matrix) {
    if (row.length !== length) {
      result = false;
      break;
    }
    length = row.length;
  }
  return result;
}

function getMatrixSize(matrix) {
  // returns an array representing a matrix size, first item in the
  // array is the number of rows and second item is the number of columns
  return [matrix.length, matrix[0].length];
}

module.exports = {
  checkVisibility,
  getScenicScore
};
