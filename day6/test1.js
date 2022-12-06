const { testForMarker } = require("./lib");

const input = [
  [["a", "b", "c", "d"], true],
  [["a", "a", "c", "d"], false],
  [["a", "b", "a", "d"], false],
  [["a", "b", "c", "a"], false],
  [["a", "b", "b", "d"], false],
  [["a", "b", "c", "b"], false],
  [["a", "b", "c", "c"], false],
  [
    ["v", "b", "h", "s", "r", "l", "p", "g", "d", "m", "j", "q", "w", "f"],
    true
  ],
  [
    ["g", "v", "b", "h", "s", "r", "l", "p", "g", "d", "m", "j", "q", "w"],
    false
  ],
  [
    ["j", "p", "l", "b", "g", "v", "b", "h", "s", "r", "l", "p", "g", "d"],
    false
  ]
];
let counter = 1;
for (const test of input) {
  const isMarker = testForMarker(test[0]);

  if (isMarker === test[1]) {
    console.log(`Test #${counter} passed`);
    // console.log(`"${test[0]}" returned "${isMarker}"`);
    console.log("|------");
  } else {
    console.log(`Test #${counter} failed`);
    // console.log(`"${test[0]}" returned "${isMarker}"`);
    console.log("|------");
  }
  counter += 1;
}
