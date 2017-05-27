var isHexaColor = require('../validate.js').isHexaColor,
    expect      = require('chai').expect;

describe('Hexadecimal Color API Tests', function () {
    describe('Valid tests for isHexaColor API', function () {
        it('#ffe4e1 is a valid hexacolor value', function () {
            expect(isHexaColor('#ffe4e1')).to.be.true;
        });

        it('#ff4545 is valid hexacolor value', function () {
            expect(isHexaColor('#ff4545')).to.be.true;
        });

        it('#800080 is valid hexacolor value', function () {
            expect(isHexaColor('#800080')).to.be.true;
        });

        it('800080 is valid hexacolor value', function () {
            expect(isHexaColor('800080')).to.be.true;
        });

        it('ff4545 is valid hexacolor value', function () {
            expect(isHexaColor('ff4545')).to.be.true;
        });
    });

    describe('Invalid tests for isHexaColor API', function () {
        it('Empty string is not a hexadecimal color value', function () {
            expect(isHexaColor('')).to.be.false;
        });

        it('Null is not a hexadecimal color value', function () {
            expect(isHexaColor(null)).to.be.false;
        });

        it('Undefined is not a hexadecimal color value', function () {
            expect(isHexaColor(undefined)).to.be.false;
        });

        it('#HelloFoo is not a hexadecimal color value', function () {
            expect(isHexaColor('#helloworld')).to.be.false;
        });

        it('#8K0K8K is not a hexadecimal color value', function () {
            expect(isHexaColor('#8K0K8K')).to.be.false;
        });
    });
});