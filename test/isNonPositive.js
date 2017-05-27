var isNonPositive   = require('../validate.js').isNonPositive,
    expect          = require('chai').expect;

describe('isNonPositive API Tests', function () {
    describe('Valid tests for isNonPositive API', function () {
        it('-12 is a valid non positive number', function () {
            expect(isNonPositive('-12')).to.be.true;
        });

        it('-10101 is valid non positive number', function () {
            expect(isNonPositive('-10101')).to.be.true;
        });

        it('-Infinity is valid non positive number', function () {
            expect(isNonPositive('-Infinity')).to.be.true;
        });

        it('0 is a valid non positive number', function () {
            expect(isNonPositive('0')).to.be.true;
        });

        it('(100 - 121) number returns a valid non positive number', function () {
            expect(isNonPositive(100 -121)).to.be.true;
        });
    });

    describe('Invalid tests for isNonPositive API', function () {
        it('null is not a non positive number', function () {
            expect(isNonPositive(null)).to.be.false;
        });

        it('undefined is not a non positive number', function () {
            expect(isNonPositive(undefined)).to.be.false;
        });

        it('Empty string is not a non positive number', function () {
            expect(isNonPositive('')).to.be.false;
        });
    });
});