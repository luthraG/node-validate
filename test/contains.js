var contains = require('../validate.js').contains,
    expect   = require('chai').expect;

describe('contains API Tests', function () {
    describe('Valid tests for contains API', function () {
        var baseStr = 'This is this and that is that';
        var searchStr = 'this';
        
        it('contains value test 1', function () {
            expect(contains(baseStr, searchStr)).to.be.true;
        });

        baseStr = 'GAURAV IS AWESOME';
        searchStr = 'awesome';

        it('contains value test 2', function () {
            expect(contains(baseStr, searchStr)).to.be.true;
        });

        baseStr = 'awesome';
        searchStr = 'awe';

        it('contains value test 3', function () {
            expect(contains(baseStr, searchStr)).to.be.true;
        });

        baseStr = 'This is an epic line';
        searchStr = 'epic';

        it('contains value test 4', function () {
            expect(contains(baseStr, searchStr)).to.be.true;
        });

        baseStr = 'null';
        searchStr = 'null';

        it('contains value test 5', function () {
            expect(contains(baseStr, searchStr)).to.be.true;
        });

        baseStr = 'undefined is not null';
        searchStr = 'null';

        it('contains value test 6', function () {
            expect(contains(baseStr, searchStr)).to.be.true;
        });

        baseStr = 'GAURAV IS AWESOME';
        searchStr = 'AWESOME';

        it('contains value test 7', function () {
            expect(contains(baseStr, searchStr)).to.be.true;
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