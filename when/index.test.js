const { expect } = require('chai');
const when = require('./index');

describe('when', () => {
  describe('.truthy(el, fn)', () => {
    it('fn is called with el when el is truthy', () => {
      const o = { value: 5 };
      let rez;
      when.truthy(o, (obj) => {
        rez = obj.value;
        return null;
      });
      expect(rez).to.equal(o.value);
    });

    it('fn is not called when el is falsy', () => {
      let called = false;
      when.truthy(0, () => {
        called = true;
      });
      expect(called).to.equal(false);
    });
  });
});
