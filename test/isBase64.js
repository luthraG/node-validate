var isBase64 = require('../validate.js').isBase64,
    expect  = require('chai').expect;

describe('isBase64 API Tests', function () {
    describe('Valid tests for isBase64 API', function () {
        it('Base64 valid tests - 1', function () {
            expect(isBase64('e1wiYVwiIDoge1wiYlwiIDoge1wiY1wiIDogdHJ1ZX19LCBcImRcIiA6IHtcImVcIiA6IHtcImZcIiA6IHRydWV9fX0=')).to.be.true;
        });

        it('Base64 valid tests - 2', function () {
            expect(isBase64('Zm9vYg==')).to.be.true;
        });

        it('Base64 valid tests - 3', function () {
            expect(isBase64('gaurav Zm9vYg==')).to.be.false;
        });
    });

    describe('Invalid tests for isBase64 API', function () {
        it('null is not a valid base64 value', function () {
            expect(isBase64(null)).to.be.false;
        });

        it('undefined is not a valid base64 value', function () {
            expect(isBase64(undefined)).to.be.false;
        });

        it('empty string is not a base64 value', function () {
            expect(isBase64('')).to.be.false;
        });

        it('ᴁᴪᴙݝۺ contains invalid base64 value', function () {
            expect(isBase64('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 is not valid base64 value', function () {
            expect(isBase64(247238)).to.be.false;
        });

        it('new Object() is not a base64 value', function () {
            expect(isBase64(new Object())).to.be.false;
        });

        it('Infinity is not a base64 value', function () {
            expect(isBase64(Infinity)).to.be.false;
        });
    });
});