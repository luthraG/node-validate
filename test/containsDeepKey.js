var containsDeepKey = require('../validate.js').containsDeepKey,
    expect          = require('chai').expect;

describe('containsDeepKey API Tests', function () {
    describe('Valid tests for containsDeepKey API', function () {
        var o  = { qwe : { asd : { zxc : 123 } } };
        var o1 = { qwe : { asd : { zxc : { qwer : 4212} } } };

        it('A keys exists in object - case 1', function () {
            expect(containsDeepKey(o, 'qwe')).to.be.true;
        });

        it('A keys exists in object - case 2 - level 2', function () {
            expect(containsDeepKey(o, 'qwe', 'asd')).to.be.true;
        });

        it('A keys exists in object - case 3 - level 3', function () {
            expect(containsDeepKey(o, 'qwe', 'asd', 'zxc')).to.be.true;
        });

        it('A keys exists in object - case 4 - level 4', function () {
            expect(containsDeepKey(o1, 'qwe', 'asd', 'zxc', 'qwer')).to.be.true;
        });

        it('Key does not exists in object', function () {
            expect(containsDeepKey(o, 'asd')).to.be.false;
        });

        var obj2 = '{ \"qwe\" : { \"asd\" : { \"zxc\" : 123 } } }';
        it('A keys exists in JSON string', function () {
            expect(containsDeepKey(obj2, 'qwe', 'asd')).to.be.true;
        });
    });

    describe('Invalid tests for containsDeepKey API', function () {
        it('null does not exists in null', function () {
            expect(containsDeepKey(null, null)).to.be.false;
        });

        it('undefined does not exists in null', function () {
            expect(containsDeepKey(null, undefined)).to.be.false;
        });

        it('undefined does not exists in undefined', function () {
            expect(containsDeepKey(undefined, undefined)).to.be.false;
        });

        it('Empty string does not exists in empty string', function () {
            expect(containsDeepKey('', '')).to.be.false;
        });

        it('abc does not exists in null', function () {
            expect(containsDeepKey(null, 'abc')).to.be.false;
        });

        it('A second level key does not exists in null', function () {
            expect(containsDeepKey(null, 'abc', 'xyz')).to.be.false;
        });

        var o  = { qwe : { asd : { zxc : 123 } } };

        it('A level one key exists but level two key does not exists in an object', function () {
            expect(containsDeepKey(o, 'qwe', 'xyz')).to.be.false;
        });

        var obj = "hello";

        it('hello does not exists in string hello', function () {
            expect(containsDeepKey(obj, 'hello')).to.be.false;
        });
    });
});