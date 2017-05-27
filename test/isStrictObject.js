var isStrictObject = require('../validate.js').isStrictObject,
    expect   = require('chai').expect;

describe('isStrictObject API Tests', function () {
    describe('Valid tests for isStrictObject API', function () {
        it('{} is a valid strict object value', function () {
            expect(isStrictObject({})).to.be.true;
        });

        it('new Object() returns a valid strict object value', function () {
            expect(isStrictObject(new Object())).to.be.true;
        });
    });

    describe('Invalid tests for isStrictObject API', function () {
        it('Date.now() is not a valid strict object', function () {
            expect(isStrictObject(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid strict object', function () {
            expect(isStrictObject(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid strict object', function () {
            expect(isStrictObject(true)).to.be.false;
        });

        it('undefined is not a valid strict object', function () {
            expect(isStrictObject(undefined)).to.be.false;
        });

        it('null is a valid strict object', function () {
            expect(isStrictObject(null)).to.be.false;
        });

        it('new Number(5) does not return a valid strict object', function () {
            expect(isStrictObject(new Number(5))).to.be.false;
        });

        it('new Array("hellow") does not return a valid strict object', function () {
            expect(isStrictObject(new Array('hellow'))).to.be.false;
        });

        it('["hello", "world", 1, 2, 3] is not a valid strict object value', function () {
            expect(isStrictObject(["hello", "world", 1, 2, 3])).to.be.false;
        });
    });
});