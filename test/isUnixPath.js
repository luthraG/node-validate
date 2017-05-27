var isUnixPath  = require('../validate.js').isUnixFilePath,
    expect      = require('chai').expect;

describe('isUnixPath API Tests', function () {
    describe('Valid tests for isUnixPath API', function () {
        it('/mnt/data/tmp/ is a valid unix path', function () {
            expect(isUnixPath('/mnt/data/tmp/')).to.be.true;
        });

        it('/home/batman/workspace/ is a valid unix path', function () {
            expect(isUnixPath('/home/batman/workspace/')).to.be.true;
        });

        it('/HOME/BATMAN/WORKSPACE/ is a valid unix path', function () {
            expect(isUnixPath('/HOME/BATMAN/WORKSPACE/')).to.be.true;
        });

        it('/j7Dw4KrDhEr8fYdggz0FoKNYK2iTYDgH1QcpzqJmeLw7LZA0Cv.C is a valid unix path', function () {
            expect(isUnixPath('/j7Dw4KrDhEr8fYdggz0FoKNYK2iTYDgH1QcpzqJmeLw7LZA0Cv.C')).to.be.true;
        });

        it('/mnt/data/tmp_tmp_again/ is a valid unix path', function () {
            expect(isUnixPath('/mnt/data/tmp_tmp_again/')).to.be.true;
        });

         it('My files are save at /home/batman/workspace/ is not a valid unix path', function () {
            expect(isUnixPath('My files are save at /home/batman/workspace/')).to.be.false;
        });
    });

    describe('Invalid tests for isUnixPath API', function () {
        it('null is not a valid unix path', function () {
            expect(isUnixPath(null)).to.be.false;
        });

        it('undefined is not a valid unix path', function () {
            expect(isUnixPath(undefined)).to.be.false;
        });

        it('empty string is not a valid unix path', function () {
            expect(isUnixPath('')).to.be.false;
        });

        it('C:\BatmanSharedDevice\Images is not a valid unix path', function () {
            expect(isUnixPath('C:\BatmanSharedDevice\Images')).to.be.false;
        });

        it('C:\\BatmanSharedDevice is not a valid unix path', function () {
            expect(isUnixPath('C:\\BatmanSharedDevice')).to.be.false;
        });
    });
});