var isAlphanumeric  = require('../validate.js').isAlphanumeric,
    expect          = require('chai').expect;

describe('isAlphanumeric API Tests', function () {
    describe('Valid tests for isAlphanumeric API', function () {
        it('gaurav contains only valid alphanumeric', function () {
            expect(isAlphanumeric('gaurav')).to.be.true;
        });

        it('luthra contains only valid alphanumeric', function () {
            expect(isAlphanumeric('luthra')).to.be.true;
        });

        it('GAURAV contains only valid alphanumeric', function () {
            expect(isAlphanumeric('GAURAV')).to.be.true;
        });

        it('Gaurav contains only valid alphanumeric', function () {
            expect(isAlphanumeric('Gaurav')).to.be.true;
        });

        it('Gaurav Luthra contains invalid alphanumeric', function () {
            expect(isAlphanumeric('Gaurav Luthra')).to.be.false;
        });

        it('Gaurav2472 contains valid alphanumeric', function () {
            expect(isAlphanumeric('Gaurav2472')).to.be.true;
        });

        it('String 247238 is valid alphanumeric', function () {
            expect(isAlphanumeric('247238')).to.be.true;
        });
    });

    describe('Invalid tests for isAlphanumeric API', function () {
        it('null is not a valid alphabet', function () {
            expect(isAlphanumeric(null)).to.be.false;
        });

        it('undefined is not a valid alphabet', function () {
            expect(isAlphanumeric(undefined)).to.be.false;
        });

        it('empty string is not a alphabet', function () {
            expect(isAlphanumeric('')).to.be.false;
        });

        it('ᴁᴪᴙݝۺ contains invalid alphabet', function () {
            expect(isAlphanumeric('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('Number 247238 does not contain valid alphanumeric', function () {
            expect(isAlphanumeric(247238)).to.be.false;
        });

        it('new Object() is not a alphabet', function () {
            expect(isAlphanumeric(new Object())).to.be.false;
        });

        it('Infinity is not a alphabet', function () {
            expect(isAlphanumeric(Infinity)).to.be.false;
        });
    });
});