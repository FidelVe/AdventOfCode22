const input = require("./input");
const { buildDirTree, getAllFolderSizes } = require("./lib");

const totalSpace = 70000000;
const spaceNeeded = 30000000;
let spaceUsed = null;
let spaceFree = null;

const dirTree = buildDirTree(input);
const sizes = getAllFolderSizes(dirTree);

for (const size of sizes) {
  if (size[0] == "/") {
    spaceUsed = size[1];
    break;
  }
}

const minReqSpace = spaceNeeded - (totalSpace - spaceUsed);
const sizesHiOrEqTo = [];

for (const size of sizes) {
  if (size[1] >= minReqSpace) {
    sizesHiOrEqTo.push(size);
  }
}
console.log(`Total space: ${totalSpace}`);
console.log(`Space needed: ${spaceNeeded}`);
console.log(`Space used: ${spaceUsed}`);
console.log(`Minimum required space: ${minReqSpace}`);
console.log("|-------");
console.log("|-------");
console.log(sizesHiOrEqTo.slice(0, 10));
console.log("|-------");
const sorted = sizesHiOrEqTo.sort((a, b) => {
  return a[1] - b[1];
});
console.log(sorted.slice(0, 10));
console.log("|-------");
