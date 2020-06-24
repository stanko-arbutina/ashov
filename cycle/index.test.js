const { expect } = require('chai');
const { range } = require('lodash');

const cycle = require('./index');

describe('cycle', () => {
  let next;
  before(() => {
    next = cycle([1, 2, 3]);
  });
  describe('next = cycle([1,2,3])', () => {
    it('Returns elements 1,2,3,1,2.. on each successive call', () => {
      expect(next()).to.equal(1);
      expect(next()).to.equal(2);
      expect(next()).to.equal(3);
      expect(next()).to.equal(1);
      expect(next()).to.equal(2);
      expect(next()).to.equal(3);
      range(100).forEach(() => next());
      expect(next()).to.equal(2); // 100 % 3 == 1
    });
  });
});
