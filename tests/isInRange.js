var isInRange = require('../validate.js').isInRange,
    expect = require('chai').expect;

describe('isInRange API Tests', function () {
    describe('Valid tests for isInRange API', function () {
        it('100 lies within 10 and 200', function () {
            expect(isInRange('100', '10', '200')).to.be.true;
        });

        it('100.00 lies within 10.00 and 200', function () {
            expect(isInRange(100.00, 10.00, 200)).to.be.true;
        });

        it('100.00 does not lie within 100.00 and 99.00', function () {
            expect(isInRange(100.00, 100.00, 99.00)).to.be.false;
        });

        it('100.00hello does not lie within 100.00 and 121.00', function () {
            expect(isInRange('100.00hello', 100.00, 121.00)).to.be.false;
        });

        it('11 lies within -11 and +11', function () {
            expect(isInRange('11', '-11', '+11')).to.be.true;
        });

        it('Infinity lies within -Infinity and +Infinity', function () {
            expect(isInRange('Infinity', '-Infinity', '+Infinity')).to.be.true;
        });

        it('421hop does not lie within 421 and 521', function () {
            expect(isInRange('421hop', '421', '521')).to.be.false;
        });
    });

    describe('Invalid tests for isInRange API', function () {
        it('421e+0 does not lie within 421e+0 and 421e+0', function () {
            expect(isInRange('421e+0', '421e+0', '421e+0')).to.be.false;
        });

        it('left not provided with value being 100 and right being 10', function () {
            expect(isInRange('100', null, '10')).to.be.false;
        });

        it('right not provided with value being 100 and left being 10', function () {
            expect(isInRange('100', '10')).to.be.false;
        });

        it('value not provided with left being 10 and right being 100', function () {
            expect(isInRange(null, '10', '10')).to.be.false;
        });
    });
});