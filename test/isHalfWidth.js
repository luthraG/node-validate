var isHalfWidth = require('../validate.js').isHalfWidth,
    expect      = require('chai').expect;

describe('isHalfWidth API Tests', function () {
    describe('Valid tests for isHalfWidth API', function () {
        it('ｱﾃﾞﾁｬｴｳｨｵﾌﾟ contains half width characters', function () {
            expect(isHalfWidth('ｱﾃﾞﾁｬｴｳｨｵﾌﾟ')).to.be.true;
        });

        it('ｱﾃﾞﾁｬｴｳｨ contains half width characters', function () {
            expect(isHalfWidth('ｱﾃﾞﾁｬｴｳｨ')).to.be.true;
        });

        it('ｬｴｳ contains half width characters', function () {
            expect(isHalfWidth('ｬｴｳ')).to.be.true;
        });

        it('ギヰヺタヰｬｴｳ contains half width characters', function () {
            expect(isHalfWidth('ギヰヺタヰｬｴｳ')).to.be.true;
        });
    });

    describe('Invalid tests for isHalfWidth API', function () {
        it('Empty string does not contain half width characters', function () {
            expect(isHalfWidth('')).to.be.false;
        });

        it('undefined does not contain half width characters', function () {
            expect(isHalfWidth(undefined)).to.be.false;
        });

        it('null does not contain half width characters', function () {
            expect(isHalfWidth(null)).to.be.false;
        });

        it('ギヰヺタヰ does not contain half width characters', function () {
            expect(isHalfWidth('ギヰヺタヰ')).to.be.false;
        });

        it('ポヲルダマ does not contain half width characters', function () {
            expect(isHalfWidth('ポヲルダマ')).to.be.false;
        });
    });
});