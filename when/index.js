const when = {
  truthy(o, fn) {
    if (o) {
      return fn(o);
    }
    return undefined;
  },
};

module.exports = when;
