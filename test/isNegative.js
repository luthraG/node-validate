var isNegative  = require('../validate.js').isNegative,
    expect      = require('chai').expect;

describe('isNegative API Tests', function () {
    describe('Valid tests for isNegative API', function () {
        it('-12 is a valid negative number', function () {
            expect(isNegative('-12')).to.be.true;
        });

        it('-10101 is valid negative number', function () {
            expect(isNegative('-10101')).to.be.true;
        });

        it('-Infinity is valid negative number', function () {
            expect(isNegative('-Infinity')).to.be.true;
        });

        it('0 is not a valid negative number', function () {
            expect(isNegative('0')).to.be.false;
        });

        it('(100 - 121) number returns a valid negative number', function () {
            expect(isNegative(100 -121)).to.be.true;
        });
       
    });

    describe('Invalid tests for isNegative API', function () {
        it('null is not a negative number', function () {
            expect(isNegative(null)).to.be.false;
        });

        it('undefined is not a negative number', function () {
            expect(isNegative(undefined)).to.be.false;
        });

        it('Empty string is not a negative number', function () {
            expect(isNegative('')).to.be.false;
        });
    });
});