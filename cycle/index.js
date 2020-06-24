function cycle(arr) {
  let current = -1;
  return function next() {
    current += 1;
    if (current === arr.length) {
      current = 0;
    }
    return arr[current];
  };
}

module.exports = cycle;
