var contains = require('../validate.js').contains,
    expect   = require('chai').expect;

describe('contains API Tests', function () {
    describe('Valid tests for contains API', function () {
        var baseStr = 'This is this and that is that';
        var searchStr = 'this';
        
        it('contains value test 1', function () {
            expect(contains(baseStr, searchStr)).to.be.true;
        });

        var baseStr1 = 'GAURAV IS AWESOME';
        var searchStr1 = 'awesome';

        it('contains value test 2', function () {
            expect(contains(baseStr1, searchStr1)).to.be.false;
        });

        var baseStr2 = 'awesome';
        var searchStr2 = 'awe';

        it('contains value test 3', function () {
            expect(contains(baseStr2, searchStr2)).to.be.true;
        });

        var baseStr3 = 'This is an epic line';
        var searchStr3 = 'epic';

        it('contains value test 4', function () {
            expect(contains(baseStr3, searchStr3)).to.be.true;
        });

        var baseStr4 = 'null';
        var searchStr4 = 'null';

        it('contains value test 5', function () {
            expect(contains(baseStr4, searchStr4)).to.be.true;
        });

        var baseStr5 = 'undefined is not null';
        var searchStr5 = 'null';

        it('contains value test 6', function () {
            expect(contains(baseStr5, searchStr5)).to.be.true;
        });

        var baseStr6 = 'GAURAV IS AWESOME';
        var searchStr6 = 'AWESOME';

        it('contains value test 7', function () {
            expect(contains(baseStr6, searchStr6)).to.be.true;
        });
    });

    describe('Invalid tests for contains API', function () {
        it('contains value - invalid test 1', function () {
            expect(contains('hellow', null)).to.be.false;
        });

        it('contains value - invalid test 2', function () {
            expect(contains('hellow', undefined)).to.be.false;
        });

        it('contains value - invalid test 3', function () {
            expect(contains(undefined, null)).to.be.false;
        });

        it('contains value - invalid test 4', function () {
            expect(contains(undefined, 'null')).to.be.false;
        });

        it('contains value - invalid test 5', function () {
            expect(contains(null, null)).to.be.false;
        });

        it('contains value - invalid test 5', function () {
            expect(contains(undefined, undefined)).to.be.false;
        });

        it('contains value - invalid test 6', function () {
            expect(contains(new Date(), 'undefined')).to.be.false;
        });

        it('contains value - invalid test 7', function () {
            expect(contains(new Date(), new Date())).to.be.false;
        });
    });
});