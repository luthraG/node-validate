var isLowerCase = require('../validate.js').isLowerCase,
    expect      = require('chai').expect;

describe('isLowerCase API Tests', function () {
    describe('Valid tests for isLowerCase API', function () {
        it('gaurav is a valid lowercase value', function () {
            expect(isLowerCase('gaurav')).to.be.true;
        });

        it('luthra is a valid lowercase value', function () {
            expect(isLowerCase('luthra')).to.be.true;
        });

        it('GAURAV is not a lowercase value', function () {
            expect(isLowerCase('GAURAV')).to.be.false;
        });

        it('gauraV is not a lowercase value', function () {
            expect(isLowerCase('gauraV')).to.be.false;
        });

        it('a is a valid lowercase value', function () {
            expect(isLowerCase('a')).to.be.true;
        });

        it('### is a valid lowercase value', function () {
            expect(isLowerCase('###')).to.be.true;
        });

        it('string value 12 is a valid lowercase value', function () {
            expect(isLowerCase('12')).to.be.true;
        });

        it('empty string is a valid lowercase value', function () {
            expect(isLowerCase('')).to.be.true;
        });

        it('no parameter to method is not a valid lowercase value', function () {
            expect(isLowerCase()).to.be.false;
        });
    });

    describe('Invalid tests for isLowerCase API', function () {
        it('Date.now() is not a valid lowercase value', function () {
            expect(isLowerCase(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid lowercase value', function () {
            expect(isLowerCase(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid lowercase value', function () {
            expect(isLowerCase(true)).to.be.false;
        });

        it('undefined is not a valid lowercase value', function () {
            expect(isLowerCase(undefined)).to.be.false;
        });

        it('null is a valid lowercase value', function () {
            expect(isLowerCase(null)).to.be.false;
        });

        it('new Number(5) does not return a valid lowercase value', function () {
            expect(isLowerCase(new Number(5))).to.be.false;
        });

        it('new Array("hellow") does not return a valid lowercase value', function () {
            expect(isLowerCase(new Array('hellow'))).to.be.false;
        });

        it('["hello", "world", 1, 2, 3] is not a valid lowercase value value', function () {
            expect(isLowerCase(["hello", "world", 1, 2, 3])).to.be.false;
        });
    });
});