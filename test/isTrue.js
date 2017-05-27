var isTrue = require('../validate.js').isTrue,
    expect = require('chai').expect;

describe('isTrue API Tests', function () {
    describe('Valid tests for isTrue API', function () {
        it('true is a valid true', function () {
            expect(isTrue(true)).to.be.true;
        });
    });

    describe('Invalid tests for isTrue API', function () {
        it('new Object() is not a valid true', function () {
            expect(isTrue(new Object())).to.be.false;
        });

        it('0/0 is not a valid true', function () {
            expect(isTrue(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid true', function () {
            expect(isTrue((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is not a valid true', function () {
            expect(isTrue((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid true', function () {
            expect(isTrue((0 * (-Infinity)))).to.be.false;
        });

        it('0 is not a valid true', function () {
            expect(isTrue(0)).to.be.false;
        });

        it('0.0 is not a valid true', function () {
            expect(isTrue(0.0)).to.be.false;
        });

        it('Infinity is not a valid true', function () {
            expect(isTrue(Infinity)).to.be.false;
        });

        it('Date.now() does not return a valid true', function () {
            expect(isTrue(Date.now())).to.be.false;
        });

        it('4200 is not a valid true', function () {
            expect(isTrue(4200)).to.be.false;
        });

        it('-41 is not a valid true', function () {
            expect(isTrue(-41)).to.be.false;
        });

        it('new Number(-41) does not return a valid true', function () {
            expect(isTrue(new Number(-41))).to.be.false;
        });
    });
});