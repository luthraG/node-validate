var isPrintableASCII = require('../validate.js').isPrintableASCII,
    expect           = require('chai').expect;

describe('isPrintableASCII API Tests', function () {
    describe('Valid tests for isPrintableASCII API', function () {
        it('@@Hello World@@ contains printable ASCII characters', function () {
            expect(isPrintableASCII('@@Hello World@@')).to.be.true;
        });

        it('#helloworld contains printable ASCII characters', function () {
            expect(isPrintableASCII('#helloworld')).to.be.true;
        });

        it('!!!Draculla!!! contains printable ASCII characters', function () {
            expect(isPrintableASCII('!!!Draculla!!!')).to.be.true;
        });

        it('&&**&&(())&&**&& contains printable ASCII characters', function () {
            expect(isPrintableASCII('&&**&&(())&&**&&')).to.be.true;
        });

        it('\t is not printable ASCII characters', function () {
            expect(isPrintableASCII('\t')).to.be.false;
        });
    });

    describe('Invalid tests for isPrintableASCII API', function () {
        it('Empty string does not contain printable ASCII characters', function () {
            expect(isPrintableASCII('')).to.be.false;
        });

        it('undefined does not contain printable ASCII characters', function () {
            expect(isPrintableASCII(undefined)).to.be.false;
        });

        it('null does not contain printable ASCII characters', function () {
            expect(isPrintableASCII(null)).to.be.false;
        });

        it('ギヰヺタヰ does not contain printable ASCII characters', function () {
            expect(isPrintableASCII('ギヰヺタヰ')).to.be.false;
        });

        it('ポヲルダマ does not contain printable ASCII characters', function () {
            expect(isPrintableASCII('ポヲルダマ')).to.be.false;
        });

        it('\n\r does not contain printable ASCII characters', function () {
            expect(isPrintableASCII('\n\r')).to.be.false;
        });

        it('\t does not contain printable ASCII characters', function () {
            expect(isPrintableASCII('\t')).to.be.false;
        });
    });
});