var objectEquals = require('../validate.js').objectEquals,
    expect       = require('chai').expect;

var a = { a: 'text', b: [ 0, 1 ] },
    b = { a: 'text', b: [ 0, 1 ] },
    c = { a: 'text', b: 0 },
    d = { a: 'text', b: false },
    e = { a: 'text', b: [ 1, 0 ] },
    i = {
        a: 'text',
        c: {
            b: [ 1, 0 ]
        }
    },
    j = {
        a: 'text',
        c: {
            b: [ 1, 0 ]
        }
    },
    k = { a: 'text', b: null },
    l = { a: 'text', b: undefined };

var func  = function (x) { return true; },
    func2 = function (x) { return true; };

describe('objectEquals API Tests', function () {
    function Car(make, model, year, owner) {
      // do nothing
    }

    describe('Valid tests for objectEquals API', function () {
        it('null is equal to null', function () {
            expect(objectEquals(null, null)).to.be.true;
        });

        it('undefined is equal to undefined', function () {
            expect(objectEquals(undefined, undefined)).to.be.true;
        });

        var obj = {"abc" : { "xyz" : { "mno" : 123 } } };
        it('obj is equal to its copy', function () {
            expect(objectEquals(obj, Object.assign({}, obj))).to.be.true;
        });

        it('When obj1 constructor is equal to obj2 constructor', function () {
            expect(objectEquals(new Car(1990), new Car(1990))).to.be.true;
        });

        var reg1 = /123/,
            reg2 = /abc/;

        it('Two regex objects are equal to each other if same references are used - case 1', function () {
            expect(objectEquals(reg1, reg1)).to.be.true;
        });

        it('Two regex objects are equal to each other if same references are used - case 2', function () {
            expect(objectEquals(reg2, reg2)).to.be.true;
        });

        it('5 is equal to 5', function () {
            expect(objectEquals(5, 5)).to.be.true;
        });

        it('new Number(5) is equal to 5', function () {
            expect(objectEquals(new Number(5), 5)).to.be.true;
        });

        it('hello is equal to hello', function () {
            expect(objectEquals('hello', 'hello')).to.be.true;
        });

        it('[] is equal to []', function () {
            expect(objectEquals([], [])).to.be.true;
        });

        it('[1,2,3] is equal to [1,2,3]', function () {
            expect(objectEquals([1,2,3], [1,2,3])).to.be.true;
        });

        it('{} is equal to {}', function () {
            expect(objectEquals({}, {})).to.be.true;
        });

        it('{a:1,b:2} is equal to {a:1,b:2}', function () {
            expect(objectEquals({a:1,b:2},{a:1,b:2})).to.be.true;
        });

        it('{a:1,b:2} is equal to {a:1,b:2}', function () {
            expect(objectEquals({a:1,b:2},{b:2,a:1})).to.be.true;
        });

        it('a is equal to b', function () {
            expect(objectEquals(a, b)).to.be.true;
        });

        it('i is equal to j', function () {
            expect(objectEquals(i, j)).to.be.true;
        });

        it('func is equal to func', function () {
            expect(objectEquals(func, func)).to.be.true;
        });

        it('func2 is equal to func2', function () {
            expect(objectEquals(func2, func2)).to.be.true;
        });

        it('{ a: { b: func } } is equal to { a: { b: func } }', function () {
            expect(objectEquals({ a: { b: func } }, { a: { b: func } })).to.be.true;
        });

        it('new Date("2017-05-28") is equal to new Date("2017-05-28")', function () {
            expect(objectEquals(new Date("2017-05-28"), new Date("2017-05-28"))).to.be.true;
        });
    });

    describe('Invalid tests for objectEquals API', function () {
        var obj = {"abc" : { "xyz" : { "mno" : 123 } } };
        it('null is not equal to a valid object', function () {
            expect(objectEquals(null, obj)).to.be.false;
        });

        it('undefined is not equal to a valid object', function () {
            expect(objectEquals(undefined, obj)).to.be.false;
        });

        it('abc is not a equal to a valid object', function () {
            expect(objectEquals('abc', obj)).to.be.false;
        });

        it('123 not a equal to a valid object', function () {
            expect(objectEquals(123, obj)).to.be.false;
        });

        it('new Array(1, 2, 3) is not equal to a JSON object', function () {
            expect(objectEquals(new Array(1, 2, 3), obj)).to.be.false;
        });

        it('undefined is not equal to null', function () {
            expect(objectEquals(undefined, null)).to.be.false;
        });

        it('null is not equal to undefined', function () {
            expect(objectEquals(null, undefined)).to.be.false;
        });

        it('5 is not equal to 15', function () {
            expect(objectEquals(5, 15)).to.be.false;
        });

        it('[1,2,3] is not equal to [1,2,3,4]', function () {
            expect(objectEquals([1,2,3], [1,2,3,4])).to.be.false;
        });

        it('{a:1,b:2} is not equal to {a:1,b:3}', function () {
            expect(objectEquals({a:1,b:2},{a:1,b:3})).to.be.false;
        });

        it('d is not equal to k', function () {
            expect(objectEquals(d, k)).to.be.false;
        });

        it('k is not equal to l', function () {
            expect(objectEquals(k, l)).to.be.false;
        });

        it('a is not equal to c', function () {
            expect(objectEquals(a, c)).to.be.false;
        });

        it('c is not equal to d', function () {
            expect(objectEquals(c, d)).to.be.false;
        });

        it('a is not equal to e', function () {
            expect(objectEquals(a, e)).to.be.false;
        });

        it('[1, 2, undefined] is not equal to [1, 2]', function () {
            expect(objectEquals([1, 2, undefined], [1, 2])).to.be.false;
        });

        it('[1, 2, 3] is not equal to { 0: 1, 1: 2, 2: 3 }', function () {
            expect(objectEquals([1, 2, 3], { 0: 1, 1: 2, 2: 3 })).to.be.false;
        });

        it('new Date(1234) is not equal to 1234', function () {
            expect(objectEquals(new Date(1234), 1234)).to.be.false;
        });

        it('{ a: { b: func } } is not equal to { a: { b: func2 } }', function () {
            expect(objectEquals({ a: { b: func } }, { a: { b: func2 } })).to.be.false;
        });

        it('func is not equal to func2', function () {
            expect(objectEquals(func, func2)).to.be.false;
        });

        it('func is not equal to func2', function () {
            expect(objectEquals(func, func2)).to.be.false;
        });

        it('Two regex objects are not equal to each other if same references are not used - case 1', function () {
            expect(objectEquals(/123/, /123/)).to.be.false;
        });

        it('Two regex objects are not equal to each other if same references are not used - case 2', function () {
            expect(objectEquals(/abc/, /abc/)).to.be.false;
        });

        it('new Date("2017-05-28") is not equal to new Date("2017-06-28")', function () {
            expect(objectEquals(new Date("2017-05-28"), new Date("2017-06-28"))).to.be.false;
        });
    });
});