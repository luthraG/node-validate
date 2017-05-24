var isPort = require('../validate.js').isPort,
    expect = require('chai').expect;

describe('isPort API Tests', function () {
    describe('Valid tests for isPort API', function () {
        it('String 8080 is a valid port number', function () {
            expect(isPort('8080')).to.be.true;
        });

        it('8080 is a valid port number', function () {
            expect(isPort(8080)).to.be.true;
        });

        it('1000 is a valid port number', function () {
            expect(isPort('1000')).to.be.true;
        });

        it('8000 is a valid port number', function () {
            expect(isPort('8000')).to.be.true;
        });

        it('9200 is a valid port number', function () {
            expect(isPort('9200')).to.be.true;
        });

        it('27017 is a valid port number', function () {
            expect(isPort('27017')).to.be.true;
        });
    });

    describe('Invalid tests for isPort API', function () {
        it('-8080 is not a valid port', function () {
            expect(isPort('-8080')).to.be.false;
        });

        it('Infinity is not a valid port', function () {
            expect(isPort('Infinity')).to.be.false;
        });

        it('FXX123 is not a valid port number', function () {
            expect(isPort('FXX123')).to.be.false;
        });

        it('0/0 is not a valid port number', function () {
            expect(isPort('0/0')).to.be.false;
        });

        it('069hello is not a valid port number', function () {
            expect(isPort('069hello')).to.be.false;
        });
    });
});