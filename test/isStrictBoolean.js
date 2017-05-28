var isStrictBoolean = require('../validate.js').isStrictBoolean,
    expect          = require('chai').expect;

describe('isStrictBoolean API Tests', function () {
    describe('Valid tests for isStrictBoolean API', function () {
        it('true is a valid boolean value', function () {
            expect(isStrictBoolean(true)).to.be.true;
        });

        it('false is a valid boolean value', function () {
            expect(isStrictBoolean(false)).to.be.true;
        });

        it('new Boolean(true) is a valid boolean value', function () {
            expect(isStrictBoolean(new Boolean(true))).to.be.true;
        });

        it('new Boolean(false) is a valid boolean value', function () {
            expect(isStrictBoolean(new Boolean(false))).to.be.true;
        });
    });

    describe('Invalid tests for isStrictBoolean API', function () {
        it('hellow is not a valid boolean value', function () {
            expect(isStrictBoolean('hellow')).to.be.false;
        });

        it('1+2+3 is not a valid boolean value', function () {
            expect(isStrictBoolean(1+2+3)).to.be.false;
        });

        it('Infinity is not a valid boolean value', function () {
            expect(isStrictBoolean(Infinity)).to.be.false;
        });

        it('No parameters to method is not a valid boolean value', function () {
            expect(isStrictBoolean()).to.be.false;
        });

        it('null is not a valid boolean value', function () {
            expect(isStrictBoolean(null)).to.be.false;
        });

        it('undefined is not a valid boolean value', function () {
            expect(isStrictBoolean(undefined)).to.be.false;
        });

        it('0/0 is not a valid boolean value', function () {
            expect(isStrictBoolean(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid boolean value', function () {
            expect(isStrictBoolean((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is not a valid boolean value', function () {
            expect(isStrictBoolean((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid boolean value', function () {
            expect(isStrictBoolean((0 * (-Infinity)))).to.be.false;
        });

        it('string TRUE is not a valid boolean value', function () {
            expect(isStrictBoolean('TRUE')).to.be.false;
        });

        it('string True is not a valid boolean value', function () {
            expect(isStrictBoolean('True')).to.be.false;
        });

        it('string truE is not a valid boolean value', function () {
            expect(isStrictBoolean('truE')).to.be.false;
        });

        it('string FALSE is not a valid boolean value', function () {
            expect(isStrictBoolean('FALSE')).to.be.false;
        });

        it('string false is not a valid boolean value', function () {
            expect(isStrictBoolean('false')).to.be.false;
        });

        it('string False is not a valid boolean value', function () {
            expect(isStrictBoolean('False')).to.be.false;
        });

        it('string 1 is not a valid boolean value', function () {
            expect(isStrictBoolean('1')).to.be.false;
        });

        it('string 0 is not a valid boolean value', function () {
            expect(isStrictBoolean('0')).to.be.false;
        });
    });
});