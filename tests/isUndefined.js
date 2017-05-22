var isUndefined   = require('../validate.js').isUndefined,
    expect  = require('chai').expect;

describe('isUndefined API Tests', function () {
    describe('Valid tests for isUndefined API', function () {
        it('undefined is undefined', function () {
            expect(isUndefined(undefined)).to.be.true;
        });

        it('void 0 is undefined', function () {
            expect(isUndefined(void 0)).to.be.true;
        });

        it('console.log() is undefined', function () {
            expect(isUndefined(console.log())).to.be.true;
        });
    });

    describe('Invalid tests for isUndefined API', function () {
        it('Empty string is not undefined', function () {
            expect(isUndefined('')).to.be.false;
        });

        it('Null is not a undefined', function () {
            expect(isUndefined(null)).to.be.false;
        });

        it('0/0 is not undefined', function () {
            expect(isUndefined(0/0)).to.be.false;
        });

        it('new Object is not undefined', function () {
            expect(isUndefined(new Object())).to.be.false;
        });
    });
});