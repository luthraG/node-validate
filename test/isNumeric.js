var isNumeric = require('../validate.js').isNumeric,
    expect    = require('chai').expect;

describe('isNumeric API Tests', function () {
    describe('Valid tests for isNumeric API', function () {
        it('0 is a valid numeric value', function () {
            expect(isNumeric(0)).to.be.true;
        });

        it('0.0 is a valid numeric value', function () {
            expect(isNumeric(0.0)).to.be.true;
        });

        it('Infinity is a valid numeric value', function () {
            expect(isNumeric(Infinity)).to.be.true;
        });

        it('Date.now() returns a valid numeric value', function () {
            expect(isNumeric(Date.now())).to.be.true;
        });

        it('4200 is a valid numeric value', function () {
            expect(isNumeric(4200)).to.be.true;
        });

        it('-41 is a valid numeric value', function () {
            expect(isNumeric(-41)).to.be.true;
        });

        it('new Number(-41) returns a valid numeric value', function () {
            expect(isNumeric(new Number(-41))).to.be.true;
        });
    });

    describe('Invalid tests for isNumeric API', function () {
        it('new Object() is not a valid numeric value', function () {
            expect(isNumeric(new Object())).to.be.false;
        });

        it('0/0 is not a valid numeric value', function () {
            expect(isNumeric(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid numeric value', function () {
            expect(isNumeric((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is not a valid numeric value', function () {
            expect(isNumeric((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid numeric value', function () {
            expect(isNumeric((0 * (-Infinity)))).to.be.false;
        });
    });
});