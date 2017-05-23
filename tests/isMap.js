var isMap   = require('../validate.js').isMap,
    expect  = require('chai').expect;

describe('isMap API Tests', function () {
    describe('Valid tests for isMap API', function () {
        it('new Map() returns a valid map object', function () {
            expect(isMap(new Map())).to.be.true;
        });

        it('new Map([["key1", "value1"], ["key2", "value2"]]) returns a valid map object)', function () {
            expect(isMap(new Map([['key1', 'value1'], ['key2', 'value2']]))).to.be.true;
        });

        it('new Map returns a valid map object', function () {
            expect(isMap(new Map)).to.be.true;
        });
    });

    describe('Invalid tests for isMap API', function () {
        it('Empty string is not a map object', function () {
            expect(isMap('')).to.be.false;
        });

        it('Null is not a map object', function () {
            expect(isMap(null)).to.be.false;
        });

        it('Undefined is not a map object', function () {
            expect(isMap(undefined)).to.be.false;
        });

        it('new WeakMap is not a map object', function () {
            expect(isMap(new WeakMap())).to.be.false;
        });
    });
});