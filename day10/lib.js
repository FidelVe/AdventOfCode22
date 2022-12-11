function vizualize(arrayOfPoints) {
  //
  const rowLength = 40;
  const columnLength = 6;
  const row = new Array(rowLength).fill(".");
  const grid = new Array(columnLength).fill(row);
  //
  grid.forEach((each, i) => {
    const row = each.reduce((ac, cv, ii) => {
      let pixel = cv;
      arrayOfPoints.forEach(point => {
        if (i === point[1] && ii === point[0]) {
          pixel = "#";
        }
      });

      return ac + pixel;
    }, "");
    console.log(row);
  });
}
// const points = [[3, 3], [5, 5], [5, 4], [4, 3], [3, 2], [2, 1], [1, 0], [0, 0]];

// vizualize(points);

function pixelToCoord(pixel, maxColumns = 40) {
  //
  const adjustedPixel = pixel - 1;
  let yCoord = Math.floor(adjustedPixel / maxColumns);
  let xCoord = adjustedPixel - yCoord * maxColumns;
  return [xCoord, yCoord];
}

module.exports = {
  vizualize,
  pixelToCoord
};
