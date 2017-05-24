var isLongitude = require('../validate.js').isLongitude,
    expect      = require('chai').expect;

describe('isLongitude API Tests', function () {
    describe('Valid tests for isLongitude API', function () {
        it('-11.0755230155188023250483 is a valid longitude', function () {
            expect(isLongitude('-11.0755230155188023250483')).to.be.true;
        });

        it('+90 is a valid longitude', function () {
            expect(isLongitude('+90')).to.be.true;
        });

        it('-11 is a valid longitude', function () {
            expect(isLongitude('-11')).to.be.true;
        });

        it('8.231660416393905911567004035042756922177725437220401017864812437232633903 is a valid longitude', function () {
            expect(isLongitude('8.231660416393905911567004035042756922177725437220401017864812437232633903')).to.be.true;
        });

        it('+40.585173125962944800938197230564942033272329821068727539155872246933530994433689087 is a valid longitude', function () {
            expect(isLongitude('+40.585173125962944800938197230564942033272329821068727539155872246933530994433689087')).to.be.true;
        });

        it('-85.7090024443174443443802331509183187934515953763183 is a valid longitude', function () {
            expect(isLongitude('-85.7090024443174443443802331509183187934515953763183')).to.be.true;
        });
    });

    describe('Invalid tests for isLongitude API', function () {
        it('v1.0 is not a valid longitude', function () {
            expect(isLongitude('v1.0')).to.be.false;
        });

        it('null is not a valid longitude', function () {
            expect(isLongitude(null)).to.be.false;
        });

        it('empty string is not a valid longitude', function () {
            expect(isLongitude('')).to.be.false;
        });

        it('undefined is not a valid longitude', function () {
            expect(isLongitude(undefined)).to.be.false;
        });

        it('12@ is not a valid longitude', function () {
            expect(isLongitude('12@')).to.be.false;
        });

        it('new Object() is not a valid longitude', function () {
            expect(isLongitude(new Object())).to.be.false;
        });

    });
});