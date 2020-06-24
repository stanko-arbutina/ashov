const {readdirSync} = require('fs');
const {expect} = require('chai');

const camelCase = require('camelcase');

const ashov = require('./index');



describe('ashov', () => {
  const normalize = nm => camelCase(nm, {pascalCase: true});
  const EXPECTED_MODULES = readdirSync(__dirname, {withFileTypes: true})
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(nm => !(nm.startsWith('.') || nm == 'node_modules'))
  .map(normalize);

  it('Exports all modules', () => {
    const exportedObjects = Object.keys(ashov).map(normalize);
    EXPECTED_MODULES.forEach((moduleName) => {
      expect(exportedObjects).to.include(moduleName);
    })
    expect(EXPECTED_MODULES.length).to.equal(exportedObjects.length);
  });
});