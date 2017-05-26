var isDataURI   = require('../validate.js').isDataURI,
    expect      = require('chai').expect;

describe('isDataURI API Tests', function () {
    describe('Valid tests for isDataURI API', function () {
        it('Valid data URI for image/gif', function () {
            expect(isDataURI('data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7')).to.be.true;
        });

        it('Valid data URI for image/jpeg', function () {
            expect(isDataURI('data:image/jpeg;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7')).to.be.true;
        });

        it('Valid data URI for plain text data', function () {
            expect(isDataURI('data:,Hello%2C%20World!')).to.be.true;
        });

        it('Valid data URI for base64-encoded version of text data', function () {
            expect(isDataURI('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).to.be.true;
        });

        it('Valid data URI for HTML document', function () {
            expect(isDataURI('data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E!')).to.be.true;
        });

        it('Valid data URI for HTML document that executes an alert', function () {
            expect(isDataURI('data:text/html;charset=utf-8,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E')).to.be.true;
        });
    });

    describe('Invalid tests for isDataURI API', function () {
        it('Date.now() is not a valid data URI', function () {
            expect(isDataURI(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid data URI', function () {
            expect(isDataURI(Date.UTC())).to.be.false;
        });

        var date = new Date();
        it('Date.prototype.toString() is not a valid data URI', function () {
            expect(isDataURI(date.toString())).to.be.false;
        });

        it('null is not a valid data URI', function () {
            expect(isDataURI(null)).to.be.false;
        });

        it('Empty string is not a valid data URI', function () {
            expect(isDataURI('')).to.be.false;
        });

        it('undefined is not a valid data URI', function () {
            expect(isDataURI(undefined)).to.be.false;
        });

        it('#HelloWorld is not a valid data URI', function () {
            expect(isDataURI('#HelloWorld')).to.be.false;
        });
    });
});