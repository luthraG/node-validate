var isVariableWidth = require('../validate.js').isVariableWidth,
    expect          = require('chai').expect;

describe('isVariableWidth API Tests', function () {
    describe('Valid tests for isVariableWidth API', function () {
        it('ｱﾃﾞﾁｬｴｳｨｵﾌﾟｱﾃﾞﾁｬｴｳヺ contains variable width characters', function () {
            expect(isVariableWidth('ｱﾃﾞﾁｬｴｳｨｵﾌﾟｱﾃﾞﾁｬｴｳヺ')).to.be.true;
        });

        it('ｱﾃﾞﾁｬｴｳｨヺタヰ contains variable width characters', function () {
            expect(isVariableWidth('ｱﾃﾞﾁｬｴｳｨヺタヰ')).to.be.true;
        });

        it('ヺｬｴｳ contains variable width characters', function () {
            expect(isVariableWidth('ヺｬｴｳ')).to.be.true;
        });

        it('ギヰヺタヰｬｴｳ contains variable width characters', function () {
            expect(isVariableWidth('ギヰヺタヰｬｴｳ')).to.be.true;
        });
    });

    describe('Invalid tests for isVariableWidth API', function () {
        it('Empty string does not contain variable width characters', function () {
            expect(isVariableWidth('')).to.be.false;
        });

        it('undefined does not contain variable width characters', function () {
            expect(isVariableWidth(undefined)).to.be.false;
        });

        it('null does not contain variable width characters', function () {
            expect(isVariableWidth(null)).to.be.false;
        });

        it('ギヰヺタヰ does not contain variable width characters', function () {
            expect(isVariableWidth('ギヰヺタヰ')).to.be.false;
        });

        it('ポヲルダマ does not contain variable width characters', function () {
            expect(isVariableWidth('ポヲルダマ')).to.be.false;
        });

        it('ｱﾃﾞﾁｬｴｳｨ does not contain variable width characters', function () {
            expect(isVariableWidth('ポヲルダマ')).to.be.false;
        });
    });
});