var isSystemError   = require('../validate.js').isSystemError,
    expect          = require('chai').expect;

describe('isSystemError API Tests', function () {
    describe('Valid tests for isSystemError API', function () {
        var error = new Error();
        error.code = 'EACCES';

        it('Error with code EACCES is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EADDRINUSE';
        it('Error with code EADDRINUSE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EBADRQC';
        it('Error with code EBADRQC is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ECONNREFUSED'
        it('Error with code ECONNREFUSED is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EDEADLOCK'
        it('Error with code EDEADLOCK is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

         error.code = 'EEXIST'
        it('Error with code EEXIST is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EDESTADDRREQ'
        it('Error with code EDESTADDRREQ is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EHOSTUNREACH'
        it('Error with code EHOSTUNREACH is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EISDIR'
        it('Error with code EISDIR is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ELIBBAD'
        it('Error with code ELIBBAD is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ELIBMAX'
        it('Error with code ELIBMAX is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EMFILE'
        it('Error with code EMFILE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ENFILE'
        it('Error with code ENFILE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ENOENT'
        it('Error with code ENOENT is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ENOLCK'
        it('Error with code ENOLCK is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ENOMEDIUM'
        it('Error with code ENOMEDIUM is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ENOTDIR'
        it('Error with code ENOTDIR is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ENOTUNIQ'
        it('Error with code ENOTUNIQ is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ENOSTR'
        it('Error with code ENOSTR is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EPERM'
        it('Error with code EPERM is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EPIPE'
        it('Error with code EPIPE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ESHUTDOWN'
        it('Error with code ESHUTDOWN is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ESOCKTNOSUPPORT'
        it('Error with code ESOCKTNOSUPPORT is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ERANGE'
        it('Error with code ERANGE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EREMOTE'
        it('Error with code EREMOTE is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EUSERS'
        it('Error with code EUSERS is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ETIMEDOUT'
        it('Error with code ETIMEDOUT is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'EXDEV'
        it('Error with code EXDEV is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });

        error.code = 'ETIME'
        it('Error with code ETIME is a valid system error', function () {
            expect(isSystemError(error)).to.be.true;
        });
    });

    describe('Invalid tests for isSystemError API', function () {
        it('Error is not a system error', function () {
            expect(isSystemError(new Error())).to.be.false;
        });

        it('TypeError is not a system error', function () {
            expect(isSystemError(new TypeError)).to.be.false;
        });

        it('URIError is not a system error', function () {
            expect(isSystemError(new URIError())).to.be.false;
        });

        it('EvalError is not a system error', function () {
            expect(isSystemError(new EvalError())).to.be.false;
        });

        it('ReferenceError is not a system error', function () {
            expect(isSystemError(new ReferenceError())).to.be.false;
        });

         it('RangeError is not a system error', function () {
            expect(isSystemError(new RangeError())).to.be.false;
        });
    });
});