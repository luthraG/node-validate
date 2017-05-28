var isError = require('../validate.js').isError,
    expect  = require('chai').expect;

describe('isError API Tests', function () {
    describe('Valid tests for isError API', function () {
        it('new Error returns an error', function () {
            expect(isError(new Error())).to.be.true;
        });

        it('new RangeError returns an error', function () {
            expect(isError(new RangeError())).to.be.true;
        });

        it('new ReferenceError returns an error', function () {
            expect(isError(new ReferenceError())).to.be.true;
        });

        it('new SyntaxError returns an error', function () {
            expect(isError(new SyntaxError())).to.be.true;
        });

        it('new TypeError returns an error', function () {
            expect(isError(new TypeError())).to.be.true;
        });

        it('new EvalError returns an error', function () {
            expect(isError(new EvalError())).to.be.true;
        });

        it('new URIError returns an error', function () {
            expect(isError(new URIError())).to.be.true;
        });
    });

    describe('Invalid tests for isError API', function () {
        it('new Object() is not an error', function () {
            expect(isError(new Object())).to.be.false;
        });

        var custom = {
            message : 'Sample Message',
            name    : 'Sample Error'
        };

        it('custom object with message and name is not an error', function () {
            expect(isError(custom)).to.be.false;
        });

        it('JSON object is not an error', function () {
            expect(isError({x : 0, y : 0})).to.be.false;
        });

        it('null is not an error', function () {
            expect(isError(null)).to.be.false;
        });

        it('String #helloworld is not an error', function () {
            expect(isError('#helloworld')).to.be.false;
        });
    });
});