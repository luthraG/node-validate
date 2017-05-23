var isDate = require('../validate.js').isDate,
    expect = require('chai').expect;

describe('isDate API Tests', function () {
    describe('Valid tests for isDate API', function () {
        it('new Date returns a valid date', function () {
            expect(isDate(new Date)).to.be.true;
        });

        it('new Date() returns a valid date', function () {
            expect(isDate(new Date())).to.be.true;
        });
    });

    describe('Invalid tests for isDate API', function () {
        it('Date.now() is not a date object', function () {
            expect(isDate(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a date object', function () {
            expect(isDate(Date.UTC())).to.be.false;
        });

        var date = new Date();
        it('Date.prototype.toString() is not a date object', function () {
            expect(isDate(date.toString())).to.be.false;
        });

        it('null is not a date object', function () {
            expect(isDate(null)).to.be.false;
        });

        it('Empty string is not a date object', function () {
            expect(isDate('')).to.be.false;
        });

        it('undefined is not a date object', function () {
            expect(isDate(undefined)).to.be.false;
        });

        it('#HelloWorld is not a date object', function () {
            expect(isDate('#HelloWorld')).to.be.false;
        });
    });
});