var isMD5   = require('../validate.js').isMD5,
    expect  = require('chai').expect;

describe('MD5 API Tests', function () {
    describe('Valid tests for isMD5 API', function () {
        it('e4d909c290d0fb1ca068ffaddf22cbd0 is md5 hash value', function () {
            expect(isMD5('e4d909c290d0fb1ca068ffaddf22cbd0')).to.be.true;
        });

        it('9e107d9d372bb6826bd81d3542a419d6 is md5 hash value', function () {
            expect(isMD5('9e107d9d372bb6826bd81d3542a419d6')).to.be.true;
        });

        it('B529D8871187ECC7FE5F152142B3440A is md5 hash value', function () {
            expect(isMD5('B529D8871187ECC7FE5F152142B3440A')).to.be.true;
        });
    });

    describe('Invalid tests for isMD5 API', function () {
        it('Empty string is not a md5 hash value', function () {
            expect(isMD5('')).to.be.false;
        });

        it('Null is not a md5 hash value', function () {
            expect(isMD5(null)).to.be.false;
        });

        it('Undefined is not a md5 hash value', function () {
            expect(isMD5(undefined)).to.be.false;
        });

        it('HelloFoo is not a md5 hash value', function () {
            expect(isMD5('HelloFoo')).to.be.false;
        });
    });
});