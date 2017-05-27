var isArray = require('../validate.js').isArray,
    expect = require('chai').expect;

describe('isArray API Tests', function () {
    describe('Valid tests for isArray API', function () {
        it('[1, 2, 3] is a valid array', function () {
            expect(isArray([1, 2, 3])).to.be.true;
        });

        it('new Array("hellow") returns a valid array', function () {
            expect(isArray(new Array('hellow'))).to.be.true;
        });

        it('["hello", "world"] is a valid array value', function () {
            expect(isArray(["hello", "world"])).to.be.true;
        });

        it('["hello", "world", 1, 2, 3] is a valid array value', function () {
            expect(isArray(["hello", "world", 1, 2, 3])).to.be.true;
        });
    });

    describe('Invalid tests for isArray API', function () {
        it('Date.now() is not a valid array', function () {
            expect(isArray(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid array', function () {
            expect(isArray(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid array', function () {
            expect(isArray(true)).to.be.false;
        });

        it('undefined is not a valid array', function () {
            expect(isArray(undefined)).to.be.false;
        });

        it('null is not a valid array', function () {
            expect(isArray(null)).to.be.false;
        });
    });
});