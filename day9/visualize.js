function vizualize(arrayOfPoints, minGridSize = 19) {
  //
  const rowLength = minGridSize + 20;
  const columnLength = minGridSize;
  const row = new Array(rowLength).fill(".");
  const grid = new Array(columnLength).fill(row);
  const rowCenter = Math.ceil(rowLength / 2);
  const columnCenter = Math.ceil(columnLength / 2);
  // console.log(grid);

  //
  grid.forEach((each, i) => {
    // console.log(each);
    const row = each.reduce((ac, cv, ii) => {
      // console.log(ii);
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
        if (i === columnCenter + point[1] && ii === rowCenter + point[0]) {
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
const points = [
  [-6, -6],
  [-5, -5],
  [-5, -4],
  [-4, -3],
  [-3, -2],
  [-2, -1],
  [-1, 0],
  [0, 0],
  [0, 0],
  [0, 0]
];

vizualize(points);
