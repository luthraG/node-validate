var containsKey = require('../validate.js').containsKey,
    expect      = require('chai').expect;

describe('containsKey API Tests', function () {
    describe('Valid tests for containsKey API', function () {
        var o  = { qwe : { asd : { zxc : 123 } } };
        var o1 = { mno : { asd : { zxc : { qwer : 4212} } } };

        it('A keys exists in object - case 1', function () {
            expect(containsKey(o, 'qwe')).to.be.true;
        });

        it('A keys exists in object - case 2', function () {
            expect(containsKey(o1, 'mno')).to.be.true;
        });

        it('Key does not exists in object', function () {
            expect(containsKey(o, 'asd')).to.be.false;
        });

        var obj2 = '{ \"qwe\" : { \"asd\" : { \"zxc\" : 123 } } }';
        it('A keys exists in JSON string', function () {
            expect(containsKey(obj2, 'qwe')).to.be.true;
        });

    });

    describe('Invalid tests for containsKey API', function () {
        it('null does not exists in null', function () {
            expect(containsKey(null, null)).to.be.false;
        });

        it('undefined does not exists in null', function () {
            expect(containsKey(null, undefined)).to.be.false;
        });

        it('undefined does not exists in undefined', function () {
            expect(containsKey(undefined, undefined)).to.be.false;
        });

        it('Empty string does not exists in empty string', function () {
            expect(containsKey('', '')).to.be.false;
        });

        it('abc does not exists in null', function () {
            expect(containsKey(null, 'abc')).to.be.false;
        });

        it('A second level key does not exists in null', function () {
            expect(containsKey(null, 'abc', 'xyz')).to.be.false;
        });

        var obj = "hello";

        it('hello does not exists in string hello', function () {
            expect(containsKey(obj, 'hello')).to.be.false;
        });
    });
});