var containsJapanese = require('../validate.js').containsJapanese,
    expect           = require('chai').expect;

describe('containsJapanese API Tests', function () {
    describe('Valid tests for containsJapanese API', function () {
        it('こんにちは contains japanese characters', function () {
            expect(containsJapanese('こんにちは')).to.be.true;
        });

        it('世界 contains japanese characters', function () {
            expect(containsJapanese('世界')).to.be.true;
        });

        it('ガウラフ contains japanese characters', function () {
            expect(containsJapanese('ガウラフ')).to.be.true;
        });

        it('批准する contains japanese characters', function () {
            expect(containsJapanese('批准する')).to.be.true;
        });

        it('ノード批准 contains japanese characters', function () {
            expect(containsJapanese('ノード批准')).to.be.true;
        });
    });

    describe('Invalid tests for containsJapanese API', function () {
        it('Empty string does not contain japanese characters', function () {
            expect(containsJapanese('')).to.be.false;
        });

        it('undefined does not contain japanese characters', function () {
            expect(containsJapanese(undefined)).to.be.false;
        });

        it('null does not contain japanese characters', function () {
            expect(containsJapanese(null)).to.be.false;
        });

        it('helloworld does not contain japanese characters', function () {
            expect(containsJapanese('helloworld')).to.be.false;
        });

        it('নোড-অনুমোদন does not contain japanese characters', function () {
            expect(containsJapanese('নোড-অনুমোদন')).to.be.false;
        });
    });
});