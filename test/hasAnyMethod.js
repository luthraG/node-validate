var hasAnyMethod = require('../validate.js').hasAnyMethod,
    expect = require('chai').expect;

describe('hasAnyMethod API Tests', function () {
    describe('Valid tests for hasAnyMethod API', function () {
        var o = { qwe : { asd : { zxc : 123 } } };
        var m = { qwe : 123, dummy : function() {console.log('Hello')} };
        it('hasAnyMethod valid tests - 1', function () {
            expect(hasAnyMethod(o)).to.be.false;
        });

        it('hasAnyMethod valid tests - 2', function () {
            expect(hasAnyMethod(m)).to.be.true;
        });
    });

    describe('Invalid tests for hasAnyMethod API', function () {
        it('null does not contain any method', function () {
            expect(hasAnyMethod(null)).to.be.false;
        });

        it('undefined does not contain any method', function () {
            expect(hasAnyMethod(undefined)).to.be.false;
        });

        it('empty string does not contain any method', function () {
            expect(hasAnyMethod('')).to.be.false;
        });

        it('ᴁᴪᴙݝۺ does not contain any method', function () {
            expect(hasAnyMethod('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 does not contain any method', function () {
            expect(hasAnyMethod(247238)).to.be.false;
        });

        it('Infinity does not contain any method', function () {
            expect(hasAnyMethod(Infinity)).to.be.false;
        });

        it('Infinity / Infinity does not contain any method', function () {
            expect(hasAnyMethod(Infinity / Infinity)).to.be.false;
        });
    });
});