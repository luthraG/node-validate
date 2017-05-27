var isUpperCase = require('../validate.js').isUpperCase,
    expect      = require('chai').expect;

describe('isUpperCase API Tests', function () {
    describe('Valid tests for isUpperCase API', function () {
        it('GAURAV is a valid uppercase value', function () {
            expect(isUpperCase('GAURAV')).to.be.true;
        });

        it('LUTHRA is a valid uppercase value', function () {
            expect(isUpperCase('LUTHRA')).to.be.true;
        });

        it('gaurav is not a uppercase value', function () {
            expect(isUpperCase('gaurav')).to.be.false;
        });

        it('gauraV is not a uppercase value', function () {
            expect(isUpperCase('gauraV')).to.be.false;
        });

        it('A is a valid uppercase value', function () {
            expect(isUpperCase('A')).to.be.true;
        });

        it('### is a valid uppercase value', function () {
            expect(isUpperCase('###')).to.be.true;
        });

        it('string value 12 is a valid uppercase value', function () {
            expect(isUpperCase('12')).to.be.true;
        });

        it('empty string is a valid uppercase value', function () {
            expect(isUpperCase('')).to.be.true;
        });

        it('no parameter to method is not a valid uppercase value', function () {
            expect(isUpperCase()).to.be.false;
        });
    });

    describe('Invalid tests for isUpperCase API', function () {
        it('Date.now() is not a valid uppercase value', function () {
            expect(isUpperCase(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid uppercase value', function () {
            expect(isUpperCase(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid uppercase value', function () {
            expect(isUpperCase(true)).to.be.false;
        });

        it('undefined is not a valid uppercase value', function () {
            expect(isUpperCase(undefined)).to.be.false;
        });

        it('null is a valid uppercase value', function () {
            expect(isUpperCase(null)).to.be.false;
        });

        it('new Number(5) does not return a valid uppercase value', function () {
            expect(isUpperCase(new Number(5))).to.be.false;
        });

        it('new Array("hellow") does not return a valid uppercase value', function () {
            expect(isUpperCase(new Array('hellow'))).to.be.false;
        });

        it('["hello", "world", 1, 2, 3] is not a valid uppercase value value', function () {
            expect(isUpperCase(["hello", "world", 1, 2, 3])).to.be.false;
        });
    });
});