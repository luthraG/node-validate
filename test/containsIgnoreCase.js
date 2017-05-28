var containsIgnoreCase = require('../validate.js').containsIgnoreCase,
    expect   = require('chai').expect;

describe('containsIgnoreCase API Tests', function () {
    describe('Valid tests for containsIgnoreCase API', function () {
        var baseStr = 'This is this and that is that';
        var searchStr = 'this';
        
        it('containsIgnoreCase value test 1', function () {
            expect(containsIgnoreCase(baseStr, searchStr)).to.be.true;
        });

        var baseStr1 = 'GAURAV IS AWESOME';
        var searchStr1 = 'awesome';

        it('containsIgnoreCase value test 2', function () {
            expect(containsIgnoreCase(baseStr1, searchStr1)).to.be.true;
        });

        var baseStr2 = 'awesome';
        var searchStr2 = 'awe';

        it('containsIgnoreCase value test 3', function () {
            expect(containsIgnoreCase(baseStr2, searchStr2)).to.be.true;
        });

        var baseStr3 = 'This is an epic line';
        var searchStr3 = 'epic';

        it('containsIgnoreCase value test 4', function () {
            expect(containsIgnoreCase(baseStr3, searchStr3)).to.be.true;
        });

        var baseStr4 = 'null';
        var searchStr4 = 'null';

        it('containsIgnoreCase value test 5', function () {
            expect(containsIgnoreCase(baseStr4, searchStr4)).to.be.true;
        });

        var baseStr5 = 'undefined is not null';
        var searchStr5 = 'null';

        it('containsIgnoreCase value test 6', function () {
            expect(containsIgnoreCase(baseStr5, searchStr5)).to.be.true;
        });

        var baseStr6 = 'GAURAV IS AWESOME';
        var searchStr6 = 'AWESOME';

        it('containsIgnoreCase value test 7', function () {
            expect(containsIgnoreCase(baseStr6, searchStr6)).to.be.true;
        });
    });

    describe('Invalid tests for containsIgnoreCase API', function () {
        it('containsIgnoreCase value - invalid test 1', function () {
            expect(containsIgnoreCase('hellow', null)).to.be.false;
        });

        it('containsIgnoreCase value - invalid test 2', function () {
            expect(containsIgnoreCase('hellow', undefined)).to.be.false;
        });

        it('containsIgnoreCase value - invalid test 3', function () {
            expect(containsIgnoreCase(undefined, null)).to.be.false;
        });

        it('containsIgnoreCase value - invalid test 4', function () {
            expect(containsIgnoreCase(undefined, 'null')).to.be.false;
        });

        it('containsIgnoreCase value - invalid test 5', function () {
            expect(containsIgnoreCase(null, null)).to.be.false;
        });

        it('containsIgnoreCase value - invalid test 5', function () {
            expect(containsIgnoreCase(undefined, undefined)).to.be.false;
        });

        it('containsIgnoreCase value - invalid test 6', function () {
            expect(containsIgnoreCase(new Date(), 'undefined')).to.be.false;
        });

        it('containsIgnoreCase value - invalid test 7', function () {
            expect(containsIgnoreCase(new Date(), new Date())).to.be.false;
        });
    });
});