var isFunction = require('../validate.js').isFunction,
    expect     = require('chai').expect;

describe('isFunction API Tests', function () {
    describe('Valid tests for isFunction API', function () {
        function test() {
            return true;
        }

        function test2() {

        };

        var arr = ['Item1', 'Item2', 'Item3'];
        
        var obj = {};

        it('Valid function - case 1', function () {
            expect(isFunction(test)).to.be.true;
        });

        it('Valid function - case 2', function () {
            expect(isFunction(test2)).to.be.true;
        });

        it('Invalid value - passed array', function () {
            expect(isFunction(arr)).to.be.false;
        });

        it('Invalid value - passed object', function () {
            expect(isFunction(obj)).to.be.false;
        });

    });

    describe('Invalid tests for isFunction API', function () {
        it('hellow is not a valid function', function () {
            expect(isFunction('hellow')).to.be.false;
        });

        it('1+2+3 is not a valid function', function () {
            expect(isFunction(1+2+3)).to.be.false;
        });

        it('Infinity is not a valid function', function () {
            expect(isFunction(Infinity)).to.be.false;
        });

        it('No parameters to method is not a valid function', function () {
            expect(isFunction()).to.be.false;
        });

        it('null is not a valid function', function () {
            expect(isFunction(null)).to.be.false;
        });

        it('undefined is not a valid function', function () {
            expect(isFunction(undefined)).to.be.false;
        });

        it('0/0 is not a valid function', function () {
            expect(isFunction(0/0)).to.be.false;
        });

        it('Infinity / Infinity is not a valid function', function () {
            expect(isFunction((Infinity / Infinity))).to.be.false;
        });

        it('Infinity + (-Infinity) is not a valid function', function () {
            expect(isFunction((Infinity + (-Infinity)))).to.be.false;
        });

        it('0 * (-Infinity) is not a valid function', function () {
            expect(isFunction((0 * (-Infinity)))).to.be.false;
        });
    });
});