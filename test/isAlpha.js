var isAlpha = require('../validate.js').isAlpha,
    expect  = require('chai').expect;

describe('isAlpha API Tests', function () {
    describe('Valid tests for isAlpha API', function () {
        it('gaurav contains only valid alphabets', function () {
            expect(isAlpha('gaurav')).to.be.true;
        });

        it('luthra contains only valid alphabets', function () {
            expect(isAlpha('luthra')).to.be.true;
        });

        it('GAURAV contains only valid alphabets', function () {
            expect(isAlpha('GAURAV')).to.be.true;
        });

        it('Gaurav contains only valid alphabets', function () {
            expect(isAlpha('Gaurav')).to.be.true;
        });

        it('Gaurav Luthra contains invalid alphabets', function () {
            expect(isAlpha('Gaurav Luthra')).to.be.false;
        });

        it('Gaurav2472 contains invalid alphabets', function () {
            expect(isAlpha('Gaurav2472')).to.be.false;
        });
    });

    describe('Invalid tests for isAlpha API', function () {
        it('null is not a valid alphabet', function () {
            expect(isAlpha(null)).to.be.false;
        });

        it('undefined is not a valid alphabet', function () {
            expect(isAlpha(undefined)).to.be.false;
        });

        it('empty string is not a alphabet', function () {
            expect(isAlpha('')).to.be.false;
        });

        it('ᴁᴪᴙݝۺ contains invalid alphabet', function () {
            expect(isAlpha('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 does not contain valid alphabets', function () {
            expect(isAlpha(247238)).to.be.false;
        });

        it('new Object() is not a alphabet', function () {
            expect(isAlpha(new Object())).to.be.false;
        });

        it('Infinity is not a alphabet', function () {
            expect(isAlpha(Infinity)).to.be.false;
        });
    });
});