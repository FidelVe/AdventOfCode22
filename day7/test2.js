const { buildDirTree, getAllFolderSizes } = require("./lib");
const input2 = require("./input2");

const tree = buildDirTree(input2);
console.log(tree);

console.log("|------------------------");

const sizes = getAllFolderSizes(tree);
console.log(sizes);
