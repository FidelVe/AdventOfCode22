const { editParamValueOfNDimensionalObject } = require("./lib");

const testDirTree = {
  "/": {
    bin: {
      a: {
        aa: {
          filename3: "5746"
        }
      },
      b: {
        filename4: "7227",
        d: {
          filename5: "53537"
        }
      }
    },
    boot: {
      c: {
        filename0: "23145"
      }
    },
    dev: {
      filename1: "23245"
    }
  }
};
console.log(JSON.stringify(testDirTree));
console.log("|-----");
editParamValueOfNDimensionalObject(
  "232353",
  ["/", "bin", "a", "bb"],
  testDirTree
);
console.log(JSON.stringify(testDirTree));
