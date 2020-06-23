function counter() {
  let cnt = 0;
  return {
    next: () => {
      cnt += 1;
      return cnt;
    },
  };
}

module.exports = counter;
