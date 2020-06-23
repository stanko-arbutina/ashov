const { expect } = require('chai');

const ashov = require('./index');

describe('ashov', () => {
  it('Exports all modules', () => {
    const exportedObjects = Object.keys(ashov);
    ['counter'].forEach((moduleName) => {
      expect(exportedObjects).to.include(moduleName);
    })
  });
});