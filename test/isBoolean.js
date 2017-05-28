var isBoolean = require('../validate.js').isBoolean,
    expect    = require('chai').expect;

describe('isBoolean API Tests', function () {
    describe('Valid tests for isBoolean API', function () {
        it('string TRUE is a valid boolean value', function () {
            expect(isBoolean('TRUE')).to.be.true;
        });

        it('string True is a valid boolean value', function () {
            expect(isBoolean('True')).to.be.true;
        });

        it('string truE is a valid boolean value', function () {
            expect(isBoolean('truE')).to.be.true;
        });

        it('string FALSE is a valid boolean value', function () {
            expect(isBoolean('FALSE')).to.be.true;
        });

        it('string false is a valid boolean value', function () {
            expect(isBoolean('false')).to.be.true;
        });

        it('string False is a valid boolean value', function () {
            expect(isBoolean('False')).to.be.true;
        });

        it('string 1 is a valid boolean value', function () {
            expect(isBoolean('1')).to.be.true;
        });

        it('string 0 is a valid boolean value', function () {
            expect(isBoolean('0')).to.be.true;
        });

        it('true is a valid boolean value', function () {
            expect(isBoolean(true)).to.be.true;
        });

        it('false is a valid boolean value', function () {
            expect(isBoolean(false)).to.be.true;
        });
    });

    describe('Invalid tests for isBoolean API', function () {
        it('hellow is not a valid boolean value', function () {
            expect(isBoolean('hellow')).to.be.false;
        });

        it('1+2+3 is not a valid boolean value', function () {
            expect(isBoolean(1+2+3)).to.be.false;
        });

        it('Infinity is not a valid boolean value', function () {
            expect(isBoolean(Infinity)).to.be.false;
        });

        it('No parameters to method is not a valid boolean value', function () {
            expect(isBoolean()).to.be.false;
        });

        it('null is not a valid boolean value', function () {
            expect(isBoolean(null)).to.be.false;
        });

        it('undefined is not a valid boolean value', function () {
            expect(isBoolean(undefined)).to.be.false;
        });

        it('0/0 is not a valid boolean value', function () {
            expect(isBoolean(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid boolean value', function () {
            expect(isBoolean((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is not a valid boolean value', function () {
            expect(isBoolean((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid boolean value', function () {
            expect(isBoolean((0 * (-Infinity)))).to.be.false;
        });
    });
});