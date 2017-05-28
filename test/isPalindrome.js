var isPalindrome = require('../validate.js').isPalindrome,
    expect       = require('chai').expect;

describe('isPalindrome API Tests', function () {
    describe('Valid tests for isPalindrome API', function () {
        it('qwewq is a valid palindrome', function () {
            expect(isPalindrome('qwewq')).to.be.true;
        });

        var str = "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba";
        it('A valid plaindrome input 2', function () {
            expect(isPalindrome(str)).to.be.true;
        });

        it('A valid plaindrome input 3', function () {
            expect(isPalindrome('eye')).to.be.true;
        });

        it('Empty string is a plaindrome', function () {
            expect(isPalindrome('')).to.be.true;
        });

    });

    describe('Invalid tests for isPalindrome API', function () {
        it('null is not a plaindrome', function () {
            expect(isPalindrome(null)).to.be.false;
        });

        it('undefined is not a plaindrome', function () {
            expect(isPalindrome(undefined)).to.be.false;
        });

        it('abc is not a plaindrome', function () {
            expect(isPalindrome('abc')).to.be.false;
        });

        it('123', function () {
            expect(isPalindrome(123)).to.be.false;
        });

        it('new Array(1, 2, 3) is not a plaindrome', function () {
            expect(isPalindrome(new Array(1, 2, 3))).to.be.false;
        });
    });
});