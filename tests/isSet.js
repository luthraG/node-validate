var isSet   = require('../validate.js').isSet,
    expect  = require('chai').expect;

describe('Is Set API Tests', function () {
    describe('Valid tests for isSet API', function () {
        it('new Set() returns a valid set object', function () {
            expect(isSet(new Set())).to.be.true;
        });

        it('new Set([1, 2, 3]) returns a valid set object)', function () {
            expect(isSet(new Set([1, 2, 3]))).to.be.true;
        });

        it('new Set returns a valid set object', function () {
            expect(isSet(new Set)).to.be.true;
        });
    });

    describe('Invalid tests for isSet API', function () {
        it('Empty string is not a set object', function () {
            expect(isSet('')).to.be.false;
        });

        it('Null is not a set object', function () {
            expect(isSet(null)).to.be.false;
        });

        it('Undefined is not a set object', function () {
            expect(isSet(undefined)).to.be.false;
        });

        it('new WeakSet is not a set object', function () {
            expect(isSet(new WeakSet())).to.be.false;
        });
    });
});