const { expect } = require('chai');

const getCounter = require('./index');

describe('Counter', () => {
  let counter;
  before(() => {
    counter = getCounter();
  });
  describe('.next', () => {
    it('Starts with 1', () => {
      expect(counter.next()).to.equal(1);
    });
    it('Each further result is incremented by one', () => {
      expect(counter.next()).to.equal(2);
      expect(counter.next()).to.equal(3);
      expect(counter.next()).to.equal(4);
      expect(counter.next()).to.equal(5);
    });
  });
});
