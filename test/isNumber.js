var isNumber = require('../validate.js').isNumber,
    expect   = require('chai').expect;

describe('isNumber API Tests', function () {
    describe('Valid tests for isNumber API', function () {
        it('0 is a valid number', function () {
            expect(isNumber(0)).to.be.true;
        });

        it('0.0 is a valid number', function () {
            expect(isNumber(0.0)).to.be.true;
        });

        it('Infinity is a valid number', function () {
            expect(isNumber(Infinity)).to.be.true;
        });

        it('Date.now() returns not a valid number', function () {
            expect(isNumber(Date.now())).to.be.true;
        });

        it('4200 is a valid number', function () {
            expect(isNumber(4200)).to.be.true;
        });

        it('-41 is a valid number', function () {
            expect(isNumber(-41)).to.be.true;
        });

        it('new Number(-41) returns a valid number', function () {
            expect(isNumber(new Number(-41))).to.be.true;
        });
    });

    describe('Invalid tests for isNumber API', function () {
        it('new Object() is not a valid number', function () {
            expect(isNumber(new Object())).to.be.false;
        });

        it('0/0 is not a valid number', function () {
            expect(isNumber(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid number', function () {
            expect(isNumber((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is not a valid number', function () {
            expect(isNumber((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid number', function () {
            expect(isNumber((0 * (-Infinity)))).to.be.false;
        });
    });
});