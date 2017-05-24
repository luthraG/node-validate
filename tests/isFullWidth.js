var isFullWidth = require('../validate.js').isFullWidth,
    expect      = require('chai').expect;

describe('isFullWidth API Tests', function () {
    describe('Valid tests for isFullWidth API', function () {
        it('ツヴト contains full width characters', function () {
            expect(isFullWidth('ツヴト')).to.be.true;
        });

        it('ギヰヺタヰ contains full width characters', function () {
            expect(isFullWidth('ギヰヺタヰ')).to.be.true;
        });

        it('ポヲルダマ contains full width characters', function () {
            expect(isFullWidth('ポヲルダマ')).to.be.true;
        });

        it('ギヰヺタヰｬｴｳ contains full width characters', function () {
            expect(isFullWidth('ギヰヺタヰｬｴｳ')).to.be.true;
        });
    });

    describe('Invalid tests for isFullWidth API', function () {
        it('Empty string does not contain full width characters', function () {
            expect(isFullWidth('')).to.be.false;
        });

        it('undefined does not contain full width characters', function () {
            expect(isFullWidth(undefined)).to.be.false;
        });

        it('null does not contain full width characters', function () {
            expect(isFullWidth(null)).to.be.false;
        });

        it('ｱﾃﾞﾁｬｴｳｨｵﾌﾟ does not contain full width characters', function () {
            expect(isFullWidth('ｱﾃﾞﾁｬｴｳｨｵﾌﾟ')).to.be.false;
        });

        it('ｬｴｳ does not contain full width characters', function () {
            expect(isFullWidth('ｬｴｳ')).to.be.false;
        });
    });
});