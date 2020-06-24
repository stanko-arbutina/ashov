const { expect } = require('chai');

const JoinBuffer = require('./index');

describe('JoinBuffer', () => {
  let buffer;
  before(() => {
    buffer = new JoinBuffer();
  });
  describe('.flush', () => {
    it('Emits events with joined elements if there are elements present and empties the buffer', () => {
      const results = [];
      buffer.on('flush', (flushed) => results.push(flushed));
      buffer.push('A');
      buffer.push('B');
      buffer.flush();
      expect(results.length).to.equal(1);
      expect(results[0]).to.equal('AB');
      buffer.flush();
      expect(results.length).to.equal(1);
      expect(results[0]).to.equal('AB');
    });

    it('Does not emit event if there are no elements present', () => {
      let emmited = false;
      buffer.on('flush', () => {
        emmited = true;
      });
      buffer.flush();
      expect(emmited).to.equal(false);
    });
  });
});
