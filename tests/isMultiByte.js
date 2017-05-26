var isMultiByte = require('../validate.js').isMultiByte,
    expect      = require('chai').expect;

describe('isMultiByte API Tests', function () {
    describe('Valid tests for isMultiByte API', function () {
        it('こんにちは世界 is a multi byte string', function () {
            expect(isMultiByte('こんにちは世界')).to.be.true;
        });

        it('こんにちは is a multi byte string', function () {
            expect(isMultiByte('こんにちは')).to.be.true;
        });

        it('世界 is a multi byte string', function () {
            expect(isMultiByte('世界')).to.be.true;
        });

        it('你好 is a multi byte string', function () {
            expect(isMultiByte('你好')).to.be.true;
        });

        it('節點 is a multi byte string', function () {
            expect(isMultiByte('節點')).to.be.true;
        });

        it('批准 is a multi byte string', function () {
            expect(isMultiByte('批准')).to.be.true;
        });

        it('節點批准 is a multi byte string', function () {
            expect(isMultiByte('節點批准')).to.be.true;
        });

        it('hello節world contains a multi byte character', function () {
            expect(isMultiByte('hello節world')).to.be.true;
        });
    });

    describe('Invalid tests for isMultiByte API', function () {
        it('null is not a multibyte string', function () {
            expect(isMultiByte(null)).to.be.false;
        });

        it('undefined is not a multibyte string', function () {
            expect(isMultiByte(undefined)).to.be.false;
        });

        it('Hello World does not contain multibyte string', function () {
            expect(isMultiByte('Hello World')).to.be.false;
        });

        it('Hello does not contain multibyte string', function () {
            expect(isMultiByte('Hello')).to.be.false;
        });

        it('World does not contain multibyte string', function () {
            expect(isMultiByte('World')).to.be.false;
        });

        it('node-ratify does not contain multibyte string', function () {
            expect(isMultiByte('node-ratify')).to.be.false;
        });

        it('ratify does not contain multibyte string', function () {
            expect(isMultiByte('ratify')).to.be.false;
        });
    });
});