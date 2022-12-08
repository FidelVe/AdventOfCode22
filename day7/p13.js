const input = require("./input");
const { buildDirTree, getAllFolderSizes } = require("./lib");

const dirTree = buildDirTree(input);
const sizes = getAllFolderSizes(dirTree);
const sizesEqualOrLowerThan = [];

for (const size of sizes) {
  if (size[1] <= 100000) {
    sizesEqualOrLowerThan.push(size);
  }
}

console.log(sizesEqualOrLowerThan);
console.log("|-------");
const sum = sizesEqualOrLowerThan.reduce((acc, cv) => {
  return acc + cv[1];
}, 0);
console.log(sum);
console.log("|-------");
