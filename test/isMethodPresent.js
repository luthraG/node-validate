var isMethodPresent = require('../validate.js').isMethodPresent,
    expect = require('chai').expect;

describe('isMethodPresent API Tests', function () {
    describe('Valid tests for isMethodPresent API', function () {
        var o = { qwe : { asd : { zxc : 123 } } };
        var m = { qwe : 123, dummy : function() {console.log('Hello')} };
        it('isMethodPresent valid tests - 1', function () {
            expect(isMethodPresent(o)).to.be.false;
        });

        it('isMethodPresent valid tests - 2', function () {
            expect(isMethodPresent(m, 'dummy')).to.be.true;
        });

        it('No parameters to method - isMethodPresent would return false', function () {
            expect(isMethodPresent()).to.be.false;
        });

        it('null - isMethodPresent would return false', function () {
            expect(isMethodPresent(null)).to.be.false;
        });

        it('undefined - isMethodPresent would return false', function () {
            expect(isMethodPresent(undefined)).to.be.false;
        });

        it('0/0 - isMethodPresent would return false', function () {
            expect(isMethodPresent(0/0)).to.be.false;
        });

        it('Infinity / Infinity - isMethodPresent would return false', function () {
            expect(isMethodPresent((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) - isMethodPresent would return false', function () {
            expect(isMethodPresent((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) - isMethodPresent would return false', function () {
            expect(isMethodPresent((0 * (-Infinity)))).to.be.false;
        });

        it('empty string - isMethodPresent would return false', function () {
            expect(isMethodPresent('')).to.be.false;
        });

        it('multiple spaces - isMethodPresent would return false', function () {
            expect(isMethodPresent('   ')).to.be.false;
        });

        it('new Object() - isMethodPresent would return false', function () {
            expect(isMethodPresent(new Object())).to.be.false;
        });

        it('null - isMethodPresent would return false', function () {
            expect(isMethodPresent(null, null)).to.be.false;
        });

        it('undefined - isMethodPresent would return false', function () {
            expect(isMethodPresent(undefined, undefined)).to.be.false;
        });

        it('0/0 - isMethodPresent would return false', function () {
            expect(isMethodPresent(0/0, 0/0)).to.be.false;
        });

        it('Infinity / Infinity - isMethodPresent would return false', function () {
            expect(isMethodPresent((Infinity / Infinity), (Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) - isMethodPresent would return false', function () {
            expect(isMethodPresent((Infinity + (-Infinity)), (Infinity + (-Infinity)))).to.be.false;
        });
    });

    describe('Invalid tests for isMethodPresent API', function () {
        it('null does not contain any method', function () {
            expect(isMethodPresent(null)).to.be.false;
        });

        it('undefined does not contain any method', function () {
            expect(isMethodPresent(undefined)).to.be.false;
        });

        it('empty string does not contain any method', function () {
            expect(isMethodPresent('')).to.be.false;
        });

        it('ᴁᴪᴙݝۺ does not contain any method', function () {
            expect(isMethodPresent('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 does not contain any method', function () {
            expect(isMethodPresent(247238)).to.be.false;
        });

        it('Infinity does not contain any method', function () {
            expect(isMethodPresent(Infinity)).to.be.false;
        });

        it('Infinity / Infinity does not contain any method', function () {
            expect(isMethodPresent(Infinity / Infinity)).to.be.false;
        });
    });
});