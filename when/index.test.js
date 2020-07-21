const { expect } = require('chai');
const when = require('./index');

describe('when', () => {
  describe('.exists', () => {
    describe('exists(object) returns a function', () => {
      it('which is called on object when object is truthy', () => {
        let called = false;
        const retFn = when.exists(true);
        retFn(() => {
          called = true;
        });
        expect(called).to.equal(true);
      });

      it('which is not called when object is falsy', () => {
        let called = false;
        const retFn = when.exists(false);
        retFn(() => {
          called = true;
        });
        expect(called).to.equal(false);
      });
    });

    describe('exists(object, "path.to.property") returns a function', () => {
      it('which is called on object.path.to.property when it exists', () => {
        const o = { path: { to: { property: 'exists' } } };
        let rez;
        const retFn = when.exists(o, 'path.to.property');
        retFn((prop) => {
          rez = prop;
        });
        expect(rez).to.equal('exists');
      });

      it('which is not called when object.path.to.property does not exist', () => {
        let called = false;
        const o = { path: { from: { property: 'exists' } } };
        const retFn = when.exists(o, 'path.to.property');
        retFn(() => {
          called = true;
        });
        expect(called).to.equal(false);
      });
    });
  });
});
