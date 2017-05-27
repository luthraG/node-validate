var isNull = require('../validate.js').isNull,
    expect = require('chai').expect;

describe('isNull API Tests', function () {
    describe('Valid tests for isNull API', function () {
        it('No parameters to method is a valid null value', function () {
            expect(isNull()).to.be.true;
        });

        it('null is a valid null value', function () {
            expect(isNull(null)).to.be.true;
        });

        it('undefined is a valid null value', function () {
            expect(isNull(undefined)).to.be.true;
        });

        it('0/0 is a valid null value', function () {
            expect(isNull(0/0)).to.be.true;
        });

        it('Infinity / Infinity is a valid null value', function () {
            expect(isNull((Infinity / Infinity))).to.be.true;
        });

        it('Infinity + (-Infinity) is a valid null value', function () {
            expect(isNull((Infinity + (-Infinity)))).to.be.true;
        });

        it('0 * (-Infinity) is a valid null value', function () {
            expect(isNull((0 * (-Infinity)))).to.be.true;
        });
    });

    describe('Invalid tests for isNull API', function () {
        it('hellow is not a valid null value', function () {
            expect(isNull('hellow')).to.be.false;
        });

        it('1+2+3 is not a valid null value', function () {
            expect(isNull(1+2+3)).to.be.false;
        });

        it('Infinity is not a valid null value', function () {
            expect(isNull(Infinity)).to.be.false;
        });
    });
});