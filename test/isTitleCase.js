var isTitleCase = require('../validate.js').isTitleCase,
    expect      = require('chai').expect;

describe('isTitleCase API Tests', function () {
    describe('Valid tests for isTitleCase API', function () {
        it('Gaurav is a valid title case value', function () {
            expect(isTitleCase('Gaurav')).to.be.true;
        });

        it('Gaurav Luthra is a valid title case value', function () {
            expect(isTitleCase('Gaurav Luthra')).to.be.true;
        });

        it('Gaurav This Is Really Awesome is a valid title case value', function () {
            expect(isTitleCase('Gaurav This Is Really Awesome')).to.be.true;
        });

        it('Luthra is a valid title case value', function () {
            expect(isTitleCase('Luthra')).to.be.true;
        });

        it('gaurav is not a title case value', function () {
            expect(isTitleCase('gaurav')).to.be.false;
        });

        it('gauraV is not a title case value', function () {
            expect(isTitleCase('gauraV')).to.be.false;
        });

        it('A is a valid title case value', function () {
            expect(isTitleCase('A')).to.be.true;
        });

        it('### is a valid title case value', function () {
            expect(isTitleCase('###')).to.be.true;
        });

        it('string value 12 is a valid title case value', function () {
            expect(isTitleCase('12')).to.be.true;
        });

        it('empty string is a valid title case value', function () {
            expect(isTitleCase('')).to.be.true;
        });

        it('no parameter to method is not a valid title case value', function () {
            expect(isTitleCase()).to.be.false;
        });
    });

    describe('Invalid tests for isTitleCase API', function () {
        it('Date.now() is not a valid title case value', function () {
            expect(isTitleCase(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid title case value', function () {
            expect(isTitleCase(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid title case value', function () {
            expect(isTitleCase(true)).to.be.false;
        });

        it('undefined is not a valid title case value', function () {
            expect(isTitleCase(undefined)).to.be.false;
        });

        it('null is a valid title case value', function () {
            expect(isTitleCase(null)).to.be.false;
        });

        it('new Number(5) does not return a valid title case value', function () {
            expect(isTitleCase(new Number(5))).to.be.false;
        });

        it('new Array("hellow") does not return a valid title case value', function () {
            expect(isTitleCase(new Array('hellow'))).to.be.false;
        });

        it('["hello", "world", 1, 2, 3] is not a valid title case value value', function () {
            expect(isTitleCase(["hello", "world", 1, 2, 3])).to.be.false;
        });

        it('Number 12 is not a valid title case value', function () {
            expect(isTitleCase(12)).to.be.false;
        });
    });
});