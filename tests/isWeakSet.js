var isWeakSet   = require('../validate.js').isWeakSet,
    expect      = require('chai').expect;

describe('Is Weak Set API Tests', function () {
    describe('Valid tests for isWeakSet API', function () {
        it('new WeakSet() returns a valid weak set object', function () {
            expect(isWeakSet(new WeakSet())).to.be.true;
        });

        it('new WeakSet([{}]) returns a valid weak set object)', function () {
            expect(isWeakSet(new WeakSet([{}]))).to.be.true;
        });

        it('new WeakSet returns a valid Weakset object', function () {
            expect(isWeakSet(new WeakSet)).to.be.true;
        });
    });

    describe('Invalid tests for isWeakSet API', function () {
        it('Empty string is not a weak set object', function () {
            expect(isWeakSet('')).to.be.false;
        });

        it('Null is not a weak set object', function () {
            expect(isWeakSet(null)).to.be.false;
        });

        it('Undefined is not a weak set object', function () {
            expect(isWeakSet(undefined)).to.be.false;
        });

        it('new Set() is not a weak set object', function () {
            expect(isWeakSet(new Set())).to.be.false;
        });
    });
});