var isLatitude  = require('../validate.js').isLatitude,
    expect      = require('chai').expect;

describe('isLatitude API Tests', function () {
    describe('Valid tests for isLatitude API', function () {
        it('-11.0755230155188023250483 is a valid latitude', function () {
            expect(isLatitude('-11.0755230155188023250483')).to.be.true;
        });

        it('+90 is a valid latitude', function () {
            expect(isLatitude('+90')).to.be.true;
        });

        it('-11 is a valid latitude', function () {
            expect(isLatitude('-11')).to.be.true;
        });

        it('8.231660416393905911567004035042756922177725437220401017864812437232633903 is a valid latitude', function () {
            expect(isLatitude('8.231660416393905911567004035042756922177725437220401017864812437232633903')).to.be.true;
        });

        it('+40.585173125962944800938197230564942033272329821068727539155872246933530994433689087 is a valid latitude', function () {
            expect(isLatitude('+40.585173125962944800938197230564942033272329821068727539155872246933530994433689087')).to.be.true;
        });

        it('-85.7090024443174443443802331509183187934515953763183 is a valid latitude', function () {
            expect(isLatitude('-85.7090024443174443443802331509183187934515953763183')).to.be.true;
        });

    });

    describe('Invalid tests for isLatitude API', function () {
        it('v1.0 is not a valid latitude', function () {
            expect(isLatitude('v1.0')).to.be.false;
        });

        it('null is not a valid latitude', function () {
            expect(isLatitude(null)).to.be.false;
        });

        it('empty string is not a valid latitude', function () {
            expect(isLatitude('')).to.be.false;
        });

        it('undefined is not a valid latitude', function () {
            expect(isLatitude(undefined)).to.be.false;
        });

        it('12@ is not a valid latitude', function () {
            expect(isLatitude('12@')).to.be.false;
        });

        it('new Object() is not a valid latitude', function () {
            expect(isLatitude(new Object())).to.be.false;
        });

    });
});