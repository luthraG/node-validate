var isMACAddress    = require('../validate.js').isMACAddress,
    expect          = require('chai').expect;

describe('MAC address API Tests', function () {
    describe('Valid tests for isMACAddress API', function () {
        it('78:0C:B8:D8:ED:74 is valid MAC address', function () {
            expect(isMACAddress('78:0C:B8:D8:ED:74')).to.be.true;
        });

        it('78-0C-B8-D8-ED-74 is valid MAC address', function () {
            expect(isMACAddress('78-0C-B8-D8-ED-74')).to.be.true;
        });
    });

    describe('Invalid tests for isMACAddress API', function () {
        it('Empty string is not a a valid MAC address', function () {
            expect(isMACAddress('')).to.be.false;
        });

        it('Null is not a valid MAC address', function () {
            expect(isMACAddress(null)).to.be.false;
        });

        it('Undefined is not a valid MAC address', function () {
            expect(isMACAddress(undefined)).to.be.false;
        });

        it('78:0K:B8:M8:DF:74 is not a valid MAC address', function () {
            expect(isMACAddress('78:0K:B8:M8:DF:74')).to.be.false;
        });

        it('78-0C-B8-D8:ED:74 is not a valid MAC address', function () {
            expect(isMACAddress('78-0C-B8-D8:ED:74')).to.be.false;
        });
    });
});