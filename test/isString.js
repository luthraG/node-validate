var isString = require('../validate.js').isString,
    expect = require('chai').expect;

describe('isString API Tests', function () {
    describe('Valid tests for isString API', function () {
        it('Hello is a valid string', function () {
            expect(isString('Hello')).to.be.true;
        });

        it('new String("hellow") returns a valid string', function () {
            expect(isString(new String('hellow'))).to.be.true;
        });

        it('empty quotes is a valid string value', function () {
            expect(isString('')).to.be.true;
        });
    });

    describe('Invalid tests for isString API', function () {
        it('Date.now() is not a valid string', function () {
            expect(isString(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid string', function () {
            expect(isString(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid string', function () {
            expect(isString(true)).to.be.false;
        });

        it('undefined is not a valid string', function () {
            expect(isString(undefined)).to.be.false;
        });

        it('null is not a valid string', function () {
            expect(isString(null)).to.be.false;
        });
    });
});