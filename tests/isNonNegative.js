var isNonNegative  = require('../validate.js').isNonNegative,
    expect      = require('chai').expect;

describe('isNonNegative API Tests', function () {
    describe('Valid tests for isNonNegative API', function () {
        it('+12 is a valid non negative number', function () {
            expect(isNonNegative('+12')).to.be.true;
        });

        it('12 is valid non negative number', function () {
            expect(isNonNegative('12')).to.be.true;
        });

        it('Infinity is valid non negative number', function () {
            expect(isNonNegative('Infinity')).to.be.true;
        });

        it('0 is a valid non negative number', function () {
            expect(isNonNegative('0')).to.be.true;
        });

        it('515151515151 is valid non negative number', function () {
            expect(isNonNegative('515151515151')).to.be.true;
        });

        it('Date.now() returns a non negative number', function () {
            expect(isNonNegative(Date.now())).to.be.true;
        });
    });

    describe('Invalid tests for isNonNegative API', function () {
        it('null is not a non negative number', function () {
            expect(isNonNegative(null)).to.be.false;
        });

        it('undefined is not a non negative number', function () {
            expect(isNonNegative(undefined)).to.be.false;
        });

        it('Empty string is not a non negative number', function () {
            expect(isNonNegative('')).to.be.false;
        });
    });
});