var isJSON = require('../validate.js').isJSON,
    expect = require('chai').expect;

describe('isJSON API Tests', function () {
    describe('Valid tests for isJSON API', function () {
        var str1 = "{ \"key\" : 123 }";
        it('JSON valid tests - 1', function () {
            expect(isJSON(str1)).to.be.true;
        });

        var str2 = "{ \"key\" : 123, \"key2\"  : { \"abc\" : \"hello\" } }";
        it('JSON valid tests - 2', function () {
            expect(isJSON(str2)).to.be.true;
        });

        var obj = {
            abc : {
                mnp : 1
            }
        };

         var a = {a : 'a', b : 'b', c : 'c', d : 'd'};
         var b = {a : 'a', b : 'b', c : { x : 'x', y : 'y', z : { key1 : 'value1', key2 : 'value2'}}};
         var c = {a : 'a', b : 'b', c : { x : 'x', y : 'y', z : { key1 : 'value1', key2 : 'value2', }}};  // Extra comma

        it('JSON valid tests - 3', function () {
            expect(isJSON(obj)).to.be.true;
        });

        it('JSON valid tests - 4', function () {
            expect(isJSON(a)).to.be.true;
        });

        it('JSON valid tests - 5', function () {
            expect(isJSON(b)).to.be.true;
        });

        it('JSON valid tests - 6', function () {
            expect(isJSON(c)).to.be.true;
        });

        it('new Object() returns a JSON value', function () {
            expect(isJSON(new Object())).to.be.true;
        });
    });

    describe('Invalid tests for isJSON API', function () {
        it('null is not a valid JSON value', function () {
            expect(isJSON(null)).to.be.false;
        });

        it('undefined is not a valid JSON value', function () {
            expect(isJSON(undefined)).to.be.false;
        });

        it('empty string is not a JSON value', function () {
            expect(isJSON('')).to.be.false;
        });

        it('ᴁᴪᴙݝۺ contains invalid JSON value', function () {
            expect(isJSON('ᴁᴪᴙݝۺ')).to.be.false;
        });

        it('247238 is not valid JSON value', function () {
            expect(isJSON(247238)).to.be.false;
        });

        it('Infinity is not a JSON value', function () {
            expect(isJSON(Infinity)).to.be.false;
        });

        it('Infinity / Infinity is not a JSON value', function () {
            expect(isJSON(Infinity / Infinity)).to.be.false;
        });
    });
});