var isSemver = require('../validate.js').isSemver,
    expect   = require('chai').expect;

describe('isSemver API Tests', function () {
    describe('Valid tests for isSemver API', function () {
        it('v0.0.0 is a valid semantic version number', function () {
            expect(isSemver('v0.0.0')).to.be.true;
        });

        it('v1.0.0 is a valid semantic version number', function () {
            expect(isSemver('v1.0.0')).to.be.true;
        });

        it('1.0.0-alpha.1 is a valid semantic version number', function () {
            expect(isSemver('1.0.0-alpha.1')).to.be.true;
        });

        it('1.0.0-alpha.beta is a valid semantic version number', function () {
            expect(isSemver('1.0.0-alpha.beta')).to.be.true;
        });

        it('1.0.0-alpha+001 is a valid semantic version number', function () {
            expect(isSemver('1.0.0-alpha+001')).to.be.true;
        });

        it('1.0.0+20130313144700 is a valid semantic version number', function () {
            expect(isSemver('1.0.0+20130313144700')).to.be.true;
        });

        it('1.0.0-beta+exp.sha.5114f85 is a valid semantic version number', function () {
            expect(isSemver('1.0.0-beta+exp.sha.5114f85')).to.be.true;
        });

        it('This is v1.0.0 verion contains a valid semantic version number', function () {
            expect(isSemver('This is v1.0.0 verion')).to.be.false;
        });
    });

    describe('Invalid tests for isSemver API', function () {
        it('v1.0 is not a semantic version number', function () {
            expect(isSemver('v1.0')).to.be.false;
        });

        it('-1.0.3 is not a semantic version number', function () {
            expect(isSemver('-1.0.3')).to.be.false;
        });

        it('alpha.beta.gamma is not a semantic version number', function () {
            expect(isSemver('alpha.beta.gamma')).to.be.false;
        });

        it('1.0.0-beta+exp.sha.5114f85. is not a semantic version number', function () {
            expect(isSemver('1.0.0-beta+exp.sha.5114f85.')).to.be.false;
        });
    });
});