function testForMarker(set) {
  let result = true;
  for (let i = 0; i < set.length - 1; i++) {
    const tempSet = set.slice(i + 1);
    if (tempSet.includes(set[i])) {
      result = false;
      break;
    }
  }
  return result;
}

module.exports = {
  testForMarker
};
