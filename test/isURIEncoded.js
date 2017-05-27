var isURIEncoded = require('../validate.js').isURIEncoded,
    expect       = require('chai').expect;

describe('isURIEncoded API Tests', function () {
    describe('Valid tests for isURIEncoded API', function () {
        it('gaurav%20luthra is a valid URI encoded string', function () {
            expect(isURIEncoded('gaurav%20luthra')).to.be.true;
        });

        it('hello%20world%20this%20is%20good%20%26%20c%2B%2B%20is%2010%25%20better%20than%20%2450%20cheque is a valid URI encoded string', function () {
            expect(isURIEncoded('hello%20world%20this%20is%20good%20%26%20c%2B%2B%20is%2010%25%20better%20than%20%2450%20cheque')).to.be.true;
        });
    });

    describe('Invalid tests for isURIEncoded API', function () {
        it('Date.now() is not a valid URI encoded string', function () {
            expect(isURIEncoded(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid URI encoded string', function () {
            expect(isURIEncoded(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid URI encoded string', function () {
            expect(isURIEncoded(true)).to.be.false;
        });

        it('undefined is not a valid URI encoded string', function () {
            expect(isURIEncoded(undefined)).to.be.false;
        });

        it('null is not a valid URI encoded string', function () {
            expect(isURIEncoded(null)).to.be.false;
        });

        it('Empty string is not a valid URI encoded string', function () {
            expect(isURIEncoded('')).to.be.false;
        });

        it('Single word string can not be checked for a valid URI encoded string', function () {
            expect(isURIEncoded('gaurav')).to.be.false;
        });
    });
});