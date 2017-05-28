var isEmpty = require('../validate.js').isEmpty,
    expect  = require('chai').expect;

describe('isEmpty API Tests', function () {
    describe('Valid tests for isEmpty API', function () {
        it('No parameters to method is a valid null value and hence empty value', function () {
            expect(isEmpty()).to.be.true;
        });

        it('null is a valid null value and hence empty value', function () {
            expect(isEmpty(null)).to.be.true;
        });

        it('undefined is a valid null value and hence empty value', function () {
            expect(isEmpty(undefined)).to.be.true;
        });

        it('0/0 is a valid null value and hence empty value', function () {
            expect(isEmpty(0/0)).to.be.true;
        });

        it('Infinity / Infinity is a valid null value and hence empty value', function () {
            expect(isEmpty((Infinity / Infinity))).to.be.true;
        });

        it('Infinity + (-Infinity) is a valid null value and hence empty value', function () {
            expect(isEmpty((Infinity + (-Infinity)))).to.be.true;
        });

        it('0 * (-Infinity) is a valid null value and hence empty value', function () {
            expect(isEmpty((0 * (-Infinity)))).to.be.true;
        });

        it('empty string is a valid empty value', function () {
            expect(isEmpty('')).to.be.true;
        });

        it('multiple spaces are not a valid empty value', function () {
            expect(isEmpty('   ')).to.be.false;
        });

        it('new Object() returns a valid empty value', function () {
            expect(isEmpty(new Object())).to.be.true;
        });
    });

    describe('Invalid tests for isEmpty API', function () {
        it('ᴁᴪᴙݝۺ is a not valid empty value', function () {
            expect(isEmpty('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 is not a valid empty value', function () {
            expect(isEmpty(247238)).to.be.false;
        });

        it('Infinity is not a valid empty value', function () {
            expect(isEmpty(Infinity)).to.be.false;
        });
    });
});