var isAscii = require('../validate.js').isAscii,
    expect  = require('chai').expect;

describe('isAscii API Tests', function () {
    describe('Valid tests for isAscii API', function () {
        it('gaurav contains only valid ASCII characters', function () {
            expect(isAscii('gaurav')).to.be.true;
        });

        it('luthra+gaurav contains valid ASCII character', function () {
            expect(isAscii('luthra+gaurav')).to.be.true;
        });

        it('{} is a valid ASCII string', function () {
            expect(isAscii('{}')).to.be.true;
        });

        it('#helloworld contains valid ASCII characters', function () {
            expect(isAscii('#helloworld')).to.be.true;
        });

        it('247238 is good contains valid ASCII characters', function () {
            expect(isAscii('247238 is good contains')).to.be.true;
        });
    });

    describe('Invalid tests for isAscii API', function () {
        it('null is not a valid ASCII string', function () {
            expect(isAscii(null)).to.be.false;
        });

        it('undefined is not a valid ASCII string', function () {
            expect(isAscii(undefined)).to.be.false;
        });

        it('empty string is not a valid ASCII string', function () {
            expect(isAscii('')).to.be.false;
        });

        it('ᴁᴪᴙݝۺ is not a valid ASCII string', function () {
            expect(isAscii('ᴁᴪᴙݝۺ')).to.be.false;
        });
    });
});