var isRegExp = require('../validate.js').isRegExp,
    expect  = require('chai').expect;

describe('isRegExp API Tests', function () {
    describe('Valid tests for isRegExp API', function () {
        it('/abc/ is a valid regex', function () {
            expect(isRegExp(/abc/)).to.be.true;
        });

        it('/123/ is a valid regex', function () {
            expect(isRegExp(/123/)).to.be.true;
        });

        it('/^[A-Z]+$/i is a valid regex', function () {
            expect(isRegExp(/^[A-Z]+$/i)).to.be.true;
        });

        it('/^[0-9A-Z]+$/i is a valid regex', function () {
            expect(isRegExp(/^[0-9A-Z]+$/i)).to.be.true;
        });

        it('/^[\x00-\x7F]+$/ is a valid regex', function () {
            expect(isRegExp(/^[\x00-\x7F]+$/)).to.be.true;
        });

        it('/[^\x00-\x7F]/ is a valid regex', function () {
            expect(isRegExp(/[^\x00-\x7F]/)).to.be.true;
        });

        it('new RegExp("abc") is a valid regex', function () {
            expect(isRegExp(new RegExp("abc"))).to.be.true;
        });
    });

    describe('Invalid tests for isRegExp API', function () {
        it('ᴁᴪᴙݝۺ is a not valid regex', function () {
            expect(isRegExp('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 is not a valid regex', function () {
            expect(isRegExp(247238)).to.be.false;
        });

        it('Infinity is not a valid regex', function () {
            expect(isRegExp(Infinity)).to.be.false;
        });

        it('No parameters to method is not a valid regex', function () {
            expect(isRegExp()).to.be.false;
        });

        it('null is not a valid regex', function () {
            expect(isRegExp(null)).to.be.false;
        });

        it('undefined is not a valid regex', function () {
            expect(isRegExp(undefined)).to.be.false;
        });

        it('0/0 is not a valid regex', function () {
            expect(isRegExp(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid regex', function () {
            expect(isRegExp((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is not a valid regex', function () {
            expect(isRegExp((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid regex', function () {
            expect(isRegExp((0 * (-Infinity)))).to.be.false;
        });

        it('empty string is a valid regex', function () {
            expect(isRegExp('')).to.be.false;
        });

        it('multiple spaces are not a valid regex', function () {
            expect(isRegExp('   ')).to.be.false;
        });

        it('new Object() returns a valid regex', function () {
            expect(isRegExp(new Object())).to.be.false;
        });
    });
});