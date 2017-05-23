var isWeakMap   = require('../validate.js').isWeakMap,
    expect      = require('chai').expect;

describe('isWeakMap API Tests', function () {
    describe('Valid tests for isWeakMap API', function () {
        it('new WeakMap() returns a valid weak map object', function () {
            expect(isWeakMap(new WeakMap())).to.be.true;
        });

        it('new WeakMap returns a valid weak map object', function () {
            expect(isWeakMap(new WeakMap)).to.be.true;
        });
    });

    describe('Invalid tests for isWeakMap API', function () {
        it('Empty string is not a weak map object', function () {
            expect(isWeakMap('')).to.be.false;
        });

        it('Null is not a weak map object', function () {
            expect(isWeakMap(null)).to.be.false;
        });

        it('Undefined is not a weak map object', function () {
            expect(isWeakMap(undefined)).to.be.false;
        });

        it('new Map() is not a weak map object', function () {
            expect(isWeakMap(new Map())).to.be.false;
        });
    });
});