var isWhiteSpace = require('../validate.js').isWhiteSpace,
    expect  = require('chai').expect;

describe('isWhiteSpace API Tests', function () {
    describe('Valid tests for isWhiteSpace API', function () {
        it('multiple spaces is a valid whitespace', function () {
            expect(isWhiteSpace('   ')).to.be.true;
        });

        it('Empty string is a valid whitespace', function () {
            expect(isWhiteSpace('')).to.be.true;
        });

        it('\\r is a valid whitespace', function () {
            expect(isWhiteSpace('\r')).to.be.true;
        });

        it('\\n is a valid whitespace', function () {
            expect(isWhiteSpace('\n')).to.be.true;
        });

        it('\\t is a valid whitespace', function () {
            expect(isWhiteSpace('\t')).to.be.true;
        });

        it('\\r\\n is a valid whitespace', function () {
            expect(isWhiteSpace('\r\n')).to.be.true;
        });
    });

    describe('Invalid tests for isWhiteSpace API', function () {
        it('ᴁᴪᴙݝۺ is a not valid whitespace', function () {
            expect(isWhiteSpace('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 is not a valid whitespace', function () {
            expect(isWhiteSpace(247238)).to.be.false;
        });

        it('Infinity is not a valid whitespace', function () {
            expect(isWhiteSpace(Infinity)).to.be.false;
        });

        it('No parameters to method is not a valid whitespace', function () {
            expect(isWhiteSpace()).to.be.false;
        });

        it('null is not a valid whitespace', function () {
            expect(isWhiteSpace(null)).to.be.false;
        });

        it('undefined is not a valid whitespace', function () {
            expect(isWhiteSpace(undefined)).to.be.false;
        });

        it('0/0 is not a valid whitespace', function () {
            expect(isWhiteSpace(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid whitespace', function () {
            expect(isWhiteSpace((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is a valid whitespace', function () {
            expect(isWhiteSpace((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid whitespace', function () {
            expect(isWhiteSpace((0 * (-Infinity)))).to.be.false;
        });

        it('new Object() does not return a valid whitespace', function () {
            expect(isWhiteSpace(new Object())).to.be.false;
        });
    });
});