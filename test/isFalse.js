var isFalse = require('../validate.js').isFalse,
    expect  = require('chai').expect;

describe('isFalse API Tests', function () {
    describe('Valid tests for isFalse API', function () {
        it('false is a valid false', function () {
            expect(isFalse(false)).to.be.true;
        });
    });

    describe('Invalid tests for isFalse API', function () {
        it('new Object() is not a valid false', function () {
            expect(isFalse(new Object())).to.be.false;
        });

        it('0/0 is not a valid false', function () {
            expect(isFalse(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid false', function () {
            expect(isFalse((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is not a valid false', function () {
            expect(isFalse((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid false', function () {
            expect(isFalse((0 * (-Infinity)))).to.be.false;
        });

        it('0 is not a valid false', function () {
            expect(isFalse(0)).to.be.false;
        });

        it('0.0 is not a valid false', function () {
            expect(isFalse(0.0)).to.be.false;
        });

        it('Infinity is not a valid false', function () {
            expect(isFalse(Infinity)).to.be.false;
        });

        it('Date.now() does not return a valid false', function () {
            expect(isFalse(Date.now())).to.be.false;
        });

        it('4200 is not a valid false', function () {
            expect(isFalse(4200)).to.be.false;
        });

        it('-41 is not a valid false', function () {
            expect(isFalse(-41)).to.be.false;
        });

        it('new Number(-41) does not return a valid false', function () {
            expect(isFalse(new Number(-41))).to.be.false;
        });
    });
});