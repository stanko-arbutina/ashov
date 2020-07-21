const { isString, get, noop } = require('lodash');

const when = {
  exists(o, path) {
    const target = (path && isString(path)) ? get(o, path) : o;
    if (target) {
      return (fn) => fn(target);
    }
    return noop;
  },
};

module.exports = when;
