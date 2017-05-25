var isWinPath = require('../validate.js').isWinPath,
    expect    = require('chai').expect;

describe('isWinPath API Tests', function () {
    describe('Valid tests for isWinPath API', function () {
        it('C:\\BatmanSharedDevice', function () {
            expect(isWinPath('C:\\BatmanSharedDevice')).to.be.true;
        });

        it('C:\\BatmanSharedDevice\\', function () {
            expect(isWinPath('C:\\BatmanSharedDevice\\')).to.be.true;
        });

        it('C:\\BatmanSharedDevice\Images', function () {
            expect(isWinPath('C:\\BatmanSharedDevice\Images')).to.be.true;
        });

        it('m:\\helloworld\\', function () {
            expect(isWinPath('m:\\helloworld\\')).to.be.true;
        });

        it('m:\\hello   world\\', function () {
            expect(isWinPath('m:\\hello   world\\')).to.be.true;
        });
    });

    describe('Invalid tests for isWinPath API', function () {
        it('null is not a valid windows path', function () {
            expect(isWinPath(null)).to.be.false;
        });

        it('undefined is not a valid windows path', function () {
            expect(isWinPath(undefined)).to.be.false;
        });

        it('empty string is not a valid windows path', function () {
            expect(isWinPath('')).to.be.false;
        });

        it('/mnt/data/tmp/ is not a valid windows path', function () {
            expect(isWinPath('/mnt/data/tmp/')).to.be.false;
        });

        it('C:\BatmanSharedDevice\Images is not a valid windows path', function () {
            expect(isWinPath('C:\BatmanSharedDevice\Images')).to.be.false;
        });
    });
});