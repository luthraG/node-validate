var isISO8601   = require('../validate.js').isISO8601,
    expect      = require('chai').expect;

describe('isISO8601 API Tests', function () {
    describe('Valid tests for isISO8601 API', function () {
        it('2009-12T12:34 is a valid iso8601 value', function () {
            expect(isISO8601('2009-12T12:34')).to.be.true;
        });

        it('2009 is a valid iso8601 value', function () {
            expect(isISO8601('2009')).to.be.true;
        });

        it('2009-12T12:34 is a valid iso8601 value', function () {
            expect(isISO8601('2009-12T12:34')).to.be.true;
        });

        it('2009-05-19 00:00 is a valid iso8601 value', function () {
            expect(isISO8601('2009-05-19 00:00')).to.be.true;
        });

        it('2010-02-18T16:23:48,444 is a valid iso8601 value', function () {
            expect(isISO8601('2010-02-18T16:23:48,444')).to.be.true;
        });

        it('2009-05-19 143922.500 is a valid iso8601 value', function () {
            expect(isISO8601('2009-05-19 143922.500')).to.be.true;
        });

        it('2010-02-18T16:23,25 is a valid iso8601 value', function () {
            expect(isISO8601('2010-02-18T16:23,25')).to.be.true;
        });

        it('2009-W51-1 is a valid iso8601 value', function () {
            expect(isISO8601('2009-W51-1')).to.be.true;
        });

        it('20090621T0545Z is a valid iso8601 value', function () {
            expect(isISO8601('20090621T0545Z')).to.be.true;
        });
    });

    describe('Invalid tests for isISO8601 API', function () {
        it('Date.now() is not a valid iso8601 value', function () {
            expect(isISO8601(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid iso8601 value', function () {
            expect(isISO8601(Date.UTC())).to.be.false;
        });

        var date = new Date();
        it('Date.prototype.toString() is not a valid iso8601 value', function () {
            expect(isISO8601(date.toString())).to.be.false;
        });

        it('null is not a valid iso8601 value', function () {
            expect(isISO8601(null)).to.be.false;
        });

        it('Empty string is not a valid iso8601 value', function () {
            expect(isISO8601('')).to.be.false;
        });

        it('undefined is not a valid iso8601 value', function () {
            expect(isISO8601(undefined)).to.be.false;
        });

        it('#HelloWorld is not a valid iso8601 value', function () {
            expect(isISO8601('#HelloWorld')).to.be.false;
        });

        it('2009-05-19T14a39r is not a valid iso8601 value', function () {
            expect(isISO8601('2009-05-19T14a39r')).to.be.false;
        });

        it('2009-05-19 14:39:22+06a00 is not a valid iso8601 value', function () {
            expect(isISO8601('2009-05-19 14:39:22+06a00')).to.be.false;
        });

        it('200912-01 is not a valid iso8601 value', function () {
            expect(isISO8601('200912-01')).to.be.false;
        });

        it('2007-04-05T24:50 is not a valid iso8601 value', function () {
            expect(isISO8601('2007-04-05T24:50')).to.be.false;
        });
    });
});