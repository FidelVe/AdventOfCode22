const input = require("./input");

function buildDirTree(log = input) {
  //
  const path = [];
  const tree = {};

  for (const entry of log) {
    // console.log("entry");
    // console.log(entry);
    // console.log("|....");
    if (entry[0] === "$") {
      if (entry[1] === "cd" && entry[2] != "..") {
        if (path.length === 0 && tree[entry[2]] == null) {
          tree[entry[2]] = {};
        }
        path.push(entry[2]);
      } else if (entry[1] === "cd" && entry[2] === "..") {
        path.pop();
      } else if (entry[1] === "ls") {
        // do nothing
      }
    } else if (entry[0] === "dir") {
      editParamValueOfNDimensionalObject({}, entry[1], path, tree);
    } else if (!Number.isNaN(Number(entry[0]))) {
      editParamValueOfNDimensionalObject(entry[0], entry[1], path, tree);
    } else {
      throw new Error(`condition should not happen. entry[0] = ${entry[0]}`);
    }
    // console.log(path);
    // console.log(tree);
    // console.log("|-----");
  }

  return tree;
}

function editParamValueOfNDimensionalObject(
  value,
  name,
  paramFullPath,
  object
) {
  // impure function, 'object' is being passed by reference and is being
  // directly modified
  // console.log("|..");
  // console.log(value);
  // console.log(name);
  // console.log(paramFullPath);
  // console.log(object);
  // console.log("|..");
  if (paramFullPath.length === 0) {
    object[name] = value;
  } else {
    editParamValueOfNDimensionalObject(
      value,
      name,
      paramFullPath.slice(1),
      object[paramFullPath[0]]
    );
  }
}

function getAllFolderSizes(tree) {
  //
  const folderItems = Object.keys(tree);
  const sizes = [];

  for (const item of folderItems) {
    if (typeof tree[item] === "object") {
      const size = getFolderSize(tree[item]);
      sizes.push([item, size]);
      const foo = getAllFolderSizes(tree[item]);
      if (foo.length != 0) {
        foo.map(each => sizes.push(each));
      }
    }
  }
  return sizes;
}

function getFolderSize(folder) {
  let size = 0;
  const folderItems = Object.keys(folder);
  for (const item of folderItems) {
    if (typeof folder[item] === "object") {
      //
      size += getFolderSize(folder[item]);
    } else {
      size += Number(folder[item]);
    }
  }
  return size;
}

module.exports = {
  editParamValueOfNDimensionalObject,
  buildDirTree,
  getAllFolderSizes
};
