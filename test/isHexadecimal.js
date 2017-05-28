var isHexadecimal   = require('../validate.js').isHexadecimal,
    expect          = require('chai').expect;

describe('isHexadecimal API Tests', function () {
    describe('Valid tests for isHexadecimal API', function () {
        it('1F is a valid hexdecimal value', function () {
            expect(isHexadecimal('1F')).to.be.true;
        });

        it('af is a valid hexdecimal value', function () {
            expect(isHexadecimal('af')).to.be.true;
        });

        it('1234bef is a valid hexdecimal value', function () {
            expect(isHexadecimal('1234bef')).to.be.true;
        });

        it('0x1f is not a valid hexdecimal value', function () {
            expect(isHexadecimal('0x1f')).to.be.false;
        });

        it('0x1F is not a valid hexdecimal value', function () {
            expect(isHexadecimal('0x1F')).to.be.false;
        });

        it('asdfg is not a valid hexdecimal value', function () {
            expect(isHexadecimal('asdfg')).to.be.false;
        });

        it('hellow is not a valid hexdecimal value', function () {
            expect(isHexadecimal('hellow')).to.be.false;
        });
    });

    describe('Invalid tests for isHexadecimal API', function () {
        it('null is not a valid hexadecimal value', function () {
            expect(isHexadecimal(null)).to.be.false;
        });

        it('undefined is not a valid hexadecimal value', function () {
            expect(isHexadecimal(undefined)).to.be.false;
        });

        it('empty string is not a hexadecimal value', function () {
            expect(isHexadecimal('')).to.be.false;
        });

        it('ᴁᴪᴙݝۺ contains invalid hexadecimal value', function () {
            expect(isHexadecimal('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 does not contain valid hexadecimal value', function () {
            expect(isHexadecimal(247238)).to.be.false;
        });

        it('new Object() is not a hexadecimal value', function () {
            expect(isHexadecimal(new Object())).to.be.false;
        });

        it('Infinity is not a hexadecimal value', function () {
            expect(isHexadecimal(Infinity)).to.be.false;
        });
    });
});