var isObject = require('../validate.js').isObject,
    expect   = require('chai').expect;

describe('isObject API Tests', function () {
    describe('Valid tests for isObject API', function () {
        it('new Number(5) returns a valid object', function () {
            expect(isObject(new Number(5))).to.be.true;
        });

        it('new Array("hellow") returns a valid object', function () {
            expect(isObject(new Array('hellow'))).to.be.true;
        });

        it('{} is a valid object value', function () {
            expect(isObject({})).to.be.true;
        });

        it('["hello", "world", 1, 2, 3] is a valid object value', function () {
            expect(isObject(["hello", "world", 1, 2, 3])).to.be.true;
        });

        it('null is a valid object', function () {
            expect(isObject(null)).to.be.true;
        });
    });

    describe('Invalid tests for isObject API', function () {
        it('Date.now() is not a valid object', function () {
            expect(isObject(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid object', function () {
            expect(isObject(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid object', function () {
            expect(isObject(true)).to.be.false;
        });

        it('undefined is not a valid object', function () {
            expect(isObject(undefined)).to.be.false;
        });
    });
});