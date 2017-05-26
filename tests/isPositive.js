var isPositive  = require('../validate.js').isPositive,
    expect      = require('chai').expect;

describe('isPositive API Tests', function () {
    describe('Valid tests for isPositive API', function () {
        it('+12 is a valid positive number', function () {
            expect(isPositive('+12')).to.be.true;
        });

        it('12 is valid positive number', function () {
            expect(isPositive('12')).to.be.true;
        });

        it('Infinity is valid positive number', function () {
            expect(isPositive('Infinity')).to.be.true;
        });

        it('0 is not a valid positive number', function () {
            expect(isPositive('0')).to.be.false;
        });

        it('515151515151 is valid positive number', function () {
            expect(isPositive('515151515151')).to.be.true;
        });

        it('Date.now() returns a positive number', function () {
            expect(isPositive(Date.now())).to.be.true;
        });
    });

    describe('Invalid tests for isPositive API', function () {
        it('null is not a positive number', function () {
            expect(isPositive(null)).to.be.false;
        });

        it('undefined is not a positive number', function () {
            expect(isPositive(undefined)).to.be.false;
        });

        it('Empty string is not a positive number', function () {
            expect(isPositive('')).to.be.false;
        });
    });
});