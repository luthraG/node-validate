var isFilePath  = require('../validate.js').isFilePath,
    expect      = require('chai').expect;

describe('isFilePath API Tests', function () {
    describe('Valid tests for isFilePath API', function () {
        it('/mnt/data/tmp/ is a valid unix path', function () {
            expect(isFilePath('/mnt/data/tmp/')).to.be.true;
        });

        it('/home/batman/workspace/ is a valid unix path', function () {
            expect(isFilePath('/home/batman/workspace/')).to.be.true;
        });

        it('/HOME/BATMAN/WORKSPACE/ is a valid unix path', function () {
            expect(isFilePath('/HOME/BATMAN/WORKSPACE/')).to.be.true;
        });

        it('/j7Dw4KrDhEr8fYdggz0FoKNYK2iTYDgH1QcpzqJmeLw7LZA0Cv.C is a valid unix path', function () {
            expect(isFilePath('/j7Dw4KrDhEr8fYdggz0FoKNYK2iTYDgH1QcpzqJmeLw7LZA0Cv.C')).to.be.true;
        });

        it('/mnt/data/tmp_tmp_again/ is a valid unix path', function () {
            expect(isFilePath('/mnt/data/tmp_tmp_again/')).to.be.true;
        });

        it('C:\\BatmanSharedDevice is a valid file path', function () {
            expect(isFilePath('C:\\BatmanSharedDevice')).to.be.true;
        });

        it('C:\\BatmanSharedDevice\Images is a valid file path', function () {
            expect(isFilePath('C:\\BatmanSharedDevice\Images')).to.be.true;
        });
    });

    describe('Invalid tests for isFilePath API', function () {
        it('null is not a valid file path', function () {
            expect(isFilePath(null)).to.be.false;
        });

        it('undefined is not a valid file path', function () {
            expect(isFilePath(undefined)).to.be.false;
        });

        it('empty string is not a valid file path', function () {
            expect(isFilePath('')).to.be.false;
        });

        it('C:\BatmanSharedDevice\Images is not a file unix path', function () {
            expect(isFilePath('C:\BatmanSharedDevice\Images')).to.be.false;
        });
    });
});