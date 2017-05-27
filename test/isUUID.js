var isUUID = require('../validate.js').isUUID,
    expect = require('chai').expect;

describe('isUUID API Tests', function () {
    describe('Valid tests for isUUID API', function () {
        it('4925123f-85a1-46bd-bfef-14026fbd4800 is a valid UUID - version 4', function () {
            expect(isUUID('4925123f-85a1-46bd-bfef-14026fbd4800', 4)).to.be.true;
        });

        it('4925123f-85a1-46bd-bfef-14026fbd4800 is a valid UUID', function () {
            expect(isUUID('4925123f-85a1-46bd-bfef-14026fbd4800')).to.be.true;
        });

        it('4956123f-89a1-36bd-cfef-14026fbd1270 is a valid UUID value - version 3', function () {
            expect(isUUID('4956123f-89a1-36bd-cfef-14026fbd1270', 3)).to.be.true;
        });

        it('4956123f-89a1-36bd-cfef-14026fbd1270 is a valid UUID value', function () {
            expect(isUUID('4956123f-89a1-36bd-cfef-14026fbd1270')).to.be.true;
        });

        it('b54d7180-42fd-11e7-9598-0800200c9a66 is a valid UUID value', function () {
            expect(isUUID('b54d7180-42fd-11e7-9598-0800200c9a66')).to.be.true;
        });

        it('4956123f-89a1-56bd-8fef-14026fbd1270 is a valid UUID value - version 5', function () {
            expect(isUUID('4956123f-89a1-56bd-8fef-14026fbd1270', 5)).to.be.true;
        });

        it('4956123f-89a1-56bd-8fef-14026fbd1270 is a valid UUID value', function () {
            expect(isUUID('4956123f-89a1-56bd-8fef-14026fbd1270')).to.be.true;
        });

        it('4956123f-89a1-56bd-Afef-14026fbd1270 is a valid UUID value - version 5', function () {
            expect(isUUID('4956123f-89a1-56bd-9fef-14026fbd1270', 5)).to.be.true;
        });

        it('4956123f-89a1-56bd-Afef-14026fbd1270 is a valid UUID value', function () {
            expect(isUUID('4956123f-89a1-56bd-Afef-14026fbd1270')).to.be.true;
        });
    });

    describe('Invalid tests for isUUID API', function () {
        it('Date.now() is not a valid UUID', function () {
            expect(isUUID(Date.now())).to.be.false;
        });

        it('Date.UTC() is not a valid UUID', function () {
            expect(isUUID(Date.UTC())).to.be.false;
        });

        it('Boolean true is not a valid UUID', function () {
            expect(isUUID(true)).to.be.false;
        });

        it('undefined is not a valid UUID', function () {
            expect(isUUID(undefined)).to.be.false;
        });

        it('null is not a valid UUID', function () {
            expect(isUUID(null)).to.be.false;
        });
    });
});