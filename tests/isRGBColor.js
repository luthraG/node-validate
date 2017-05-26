var isRGBColor  = require('../validate.js').isRGBColor,
    expect      = require('chai').expect;

describe('isRGBColor API Tests', function () {
    describe('Valid tests for isRGBColor API', function () {
        it('rgb(255, 255, 255) is a valid rgbColor value', function () {
            expect(isRGBColor('rgb(255, 255, 255)')).to.be.true;
        });

        it('rgb(10, 0, 0) is a valid rgbColor value', function () {
            expect(isRGBColor('rgb(10, 0, 0)')).to.be.true;
        });

        it('rgb(0, 255,   255) is a valid rgbColor value', function () {
            expect(isRGBColor('rgb(0, 255,    255)')).to.be.true;
        });

        it('rgb(0, 0, 0) is a valid rgbColor value', function () {
            expect(isRGBColor('rgb(0, 0, 0)')).to.be.true;
        });

        it('hello 16 rgb(255, 255, 255) is not a valid rgbColor value', function () {
            expect(isRGBColor('hello 16 rgb(255, 255, 255)')).to.be.false;
        });        
    });

    describe('Invalid tests for isRGBColor API', function () {
        it('Date.now() is not a valid rgbColor value', function () {
            expect(isRGBColor(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid rgbColor value', function () {
            expect(isRGBColor(Date.UTC())).to.be.false;
        });

        var date = new Date();
        it('Date.prototype.toString() is not a valid rgbColor value', function () {
            expect(isRGBColor(date.toString())).to.be.false;
        });

        it('null does not contain a valid rgbColor value', function () {
            expect(isRGBColor(null)).to.be.false;
        });

        it('Empty string does not contain a valid rgbColor value', function () {
            expect(isRGBColor('')).to.be.false;
        });

        it('undefined does not contain a valid rgbColor value', function () {
            expect(isRGBColor(undefined)).to.be.false;
        });

        it('#HelloWorld does not contain a valid rgbColor value', function () {
            expect(isRGBColor('#HelloWorld')).to.be.false;
        });
    });
});