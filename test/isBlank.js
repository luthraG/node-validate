var isBlank = require('../validate.js').isBlank,
    expect  = require('chai').expect;

describe('isBlank API Tests', function () {
    describe('Valid tests for isBlank API', function () {
        it('multiple spaces is a valid blank value', function () {
            expect(isBlank('   ')).to.be.true;
        });

        it('Empty string is a valid blank value', function () {
            expect(isBlank('')).to.be.true;
        });

        it('\\r is a valid blank value', function () {
            expect(isBlank('\r')).to.be.true;
        });

        it('\\n is a valid blank value', function () {
            expect(isBlank('\n')).to.be.true;
        });

        it('\\t is a valid blank value', function () {
            expect(isBlank('\t')).to.be.true;
        });

        it('\\r\\n is a valid blank value', function () {
            expect(isBlank('\r\n')).to.be.true;
        });

        it('No parameters to method is a valid blank value', function () {
            expect(isBlank()).to.be.true;
        });

        it('null is a valid blank value', function () {
            expect(isBlank(null)).to.be.true;
        });

        it('undefined is a valid blank value', function () {
            expect(isBlank(undefined)).to.be.true;
        });

        it('0/0 is a valid blank value', function () {
            expect(isBlank(0/0)).to.be.true;
        });

        it('Infinity / Infinity is a valid blank value', function () {
            expect(isBlank((Infinity / Infinity))).to.be.true;
        });

        it('Infinity + (-Infinity) is a valid blank value', function () {
            expect(isBlank((Infinity + (-Infinity)))).to.be.true;
        });

        it('0 * (-Infinity) is a valid blank value', function () {
            expect(isBlank((0 * (-Infinity)))).to.be.true;
        });

        it('empty string is a valid blank value', function () {
            expect(isBlank('')).to.be.true;
        });

        it('multiple spaces are not a valid blank value', function () {
            expect(isBlank('   ')).to.be.true;
        });

        it('new Object() returns a valid blank value', function () {
            expect(isBlank(new Object())).to.be.true;
        });
    });

    describe('Invalid tests for isBlank API', function () {
        it('ᴁᴪᴙݝۺ is a not valid blank value', function () {
            expect(isBlank('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 is not a valid blank value', function () {
            expect(isBlank(247238)).to.be.false;
        });

        it('Infinity is not a valid blank value', function () {
            expect(isBlank(Infinity)).to.be.false;
        });
    });
});