var endsWith = require('../validate.js').endsWith,
    expect   = require('chai').expect;

describe('Ends With API Tests', function () {
    describe('Valid tests for ends with API for String inputs', function () {
        it('Blue Whale, Killer Whale ends with Whale', function () {
            expect(endsWith('Blue Whale, Killer Whale', 'Whale')).to.be.true;
        });

        it('Blue Whale, Killer Whale ends with Whale at position 12', function () {
            expect(endsWith('Blue Whale, Killer Whale', 'Killer Whale', 12)).to.be.true;
        });

        it('HelloFoo ends with foo at position 5', function () {
            expect(endsWith('HelloFoo', 'Foo', 5)).to.be.true;
        });

        it('Brave new world ends with world at position 10', function () {
            expect(endsWith('Brave new world', 'world', 10)).to.be.true;
        });

        it('null ends with null', function () {
            expect(endsWith(null, null)).to.be.true;
        });

        it('null ends with empty string', function () {
            expect(endsWith(null, '')).to.be.true;
        });

        it('Brave new world ends with world', function () {
            expect(endsWith('Brave new world', 'world')).to.be.true;
        });

        it('Brave new world ends with new world at position 6', function () {
            expect(endsWith('Brave new world', 'new world', 6)).to.be.true;
        });

        it('Äspress ends with a unicode character Ä', function () {
            expect(endsWith('ÄspressÄ', 'Ä')).to.be.true;
        });

        it('Brave new world ends with world at position 20 --> Since it is greater than string length hence it defaults', function () {
            expect(endsWith('Brave new world', 'world', 20)).to.be.true;
        });

        it('Brave new world ends with new world at position 20 --> Since it is greater than string length hence it defaults', function () {
            expect(endsWith('Brave new world', 'Brave new world', 20)).to.be.true;
        });
    });

    describe('Invalid tests for ends with API for String inputs', function () {
        it('Blue Whale, Killer Whale does not end with Blue', function () {
            expect(endsWith('Blue Whale, Killer Whale', 'blue')).to.be.false;
        });

        it('Brave new world does not end with world', function () {
            expect(endsWith('Brave new world', 'World')).to.be.false;
        });
    });


    describe('Valid tests for ends with API for Number inputs', function () {
        it('123456 ends with 456', function () {
            expect(endsWith(123456, 456)).to.be.true;
        });

        it('247237 ends with 237', function () {
            expect(endsWith(247237, 237)).to.be.true;
        });
    });


    describe('Invalid tests for ends with API for Number inputs', function () {
        it('123456 does not end with 1234567', function () {
            expect(endsWith(123456, 1234567)).to.be.false;
        });

        it('123456 does not end with 1234567 at position 1', function () {
            expect(endsWith(123456, 2345678, 1)).to.be.false;
        });

        it('23456 does not end with 123', function () {
            expect(endsWith(23456, 123)).to.be.false;
        });
    });

    describe('Valid tests for ends with API for Array inputs', function () {
        it('[1, 2, 3, 4] ends with [2, 3, 4]', function () {
            expect(endsWith([1, 2, 3, 4], [2, 3, 4])).to.be.true;
        });

        it('[1, 2, 3, 4] ends with [1, 2, 3] at position 1', function () {
            expect(endsWith([1, 2, 3, 4], [2, 3, 4], 1)).to.be.true;
        });

        it('[1, 2, 3, 4] ends with 4 at position 4 with stict mode set to true', function () {
            expect(endsWith([1, 2, 3, 4], 4, true)).to.be.true;
        });

        it('[1, 2, 3, 4] ends with \"4\" with stict mode set to false', function () {
            expect(endsWith([1, 2, 3, 4], '4', false)).to.be.true;
        });

        it('hello ends with ["hello"]', function () {
            expect(endsWith("hello", ["hello"])).to.be.true;
        });
    });

    describe('Invalid tests for ends with API for Array inputs', function () {
        it('[1, 2, 3, 4] does not end with [1, 2, 3] at position 2', function () {
            expect(endsWith([1, 2, 3, 4], [2, 3, 4], 2)).to.be.false;
        });

        it('[1, 2, 3, 4] does not end with \"4\"" at position 4 with stict mode set to true', function () {
            expect(endsWith([1, 2, 3, 4], '4', true)).to.be.false;
        });

        it('[1, 2, 3, 4] does not end with [2, 3, 4, 5]', function () {
            expect(endsWith([1, 2, 3, 4], [2, 3, 4, 5])).to.be.false;
        });

        it('[1, 2, 3, 4] does not end with [1, 2, 3, 4, 5]', function () {
            expect(endsWith([1, 2, 3, 4], [1, 2, 3, 4, 5])).to.be.false;
        });
    });
});
