var startsWith = require('../validate.js').startsWith,
    expect     = require('chai').expect;

describe('Starts With API Tests', function () {
    describe('Valid tests for starts with API for String inputs', function () {
        it('Blue Whale, Killer Whale starts with Blue', function () {
            expect(startsWith('Blue Whale, Killer Whale', 'Blue')).to.be.true;
        });

        it('Empty string starts with empty string', function () {
            expect(startsWith('', '')).to.be.true;
        });

        it('Null starts with empty string', function () {
            expect(startsWith(null, '')).to.be.true;
        });

        it('HelloFoo starts with foo at position 5', function () {
            expect(startsWith('HelloFoo', 'Foo', 5)).to.be.true;
        });

        it('Brave new world starts with world at position 10', function () {
            expect(startsWith('Brave new world', 'world', 10)).to.be.true;
        });

        it('Äspress starts with a unicode character Ä', function () {
            expect(startsWith('Äspress', 'Ä')).to.be.true;
        });
    });

    describe('Invalid tests for starts with API for String inputs', function () {
        it('Blue Whale, Killer Whale does not start with Blue', function () {
            expect(startsWith('Blue Whale, Killer Whale', 'blue')).to.be.false;
        });

        it('Brave new world does not start with world', function () {
            expect(startsWith('Brave new world', 'world')).to.be.false;
        });
    });


    describe('Valid tests for starts with API for Number inputs', function () {
        it('123456 starts with 123', function () {
            expect(startsWith(123456, 123)).to.be.true;
        });

        it('123456 starts with 234 at position 1', function () {
            expect(startsWith(123456, 234, 1)).to.be.true;
        });
    });


    describe('Invalid tests for starts with API for Number inputs', function () {
        it('23456 does not start with 123', function () {
            expect(startsWith(23456, 123)).to.be.false;
        });
    });

    describe('Valid tests for starts with API for Array inputs', function () {
        it('[1, 2, 3, 4] starts with [1, 2, 3]', function () {
            expect(startsWith([1, 2, 3, 4], [1, 2, 3])).to.be.true;
        });

        it('[1, 2, 3, 4] starts with [1, 2, 3, 4]', function () {
            expect(startsWith([1, 2, 3, 4], [1, 2, 3, 4])).to.be.true;
        });

        it('[1, 2, 3, 4] starts with [2, 3] at position 1', function () {
            expect(startsWith([1, 2, 3, 4], [2, 3], 1)).to.be.true;
        });

        it('[1, 2, 3, 4] starts with [2, 3, 4] at position 1', function () {
            expect(startsWith([1, 2, 3, 4], [2, 3, 4], 1)).to.be.true;
        });

        it('[1, 2, 3, 4] starts with 1 with strict mode set to true', function () {
            expect(startsWith([1, 2, 3, 4], 1, true)).to.be.true;
        });

        it('[1, 2, 3, 4] starts with string 1 with strict mode set to false', function () {
            expect(startsWith([1, 2, 3, 4], '1', false)).to.be.true;
        });
    });

    describe('Invalid tests for starts with API for Array inputs', function () {
        it('[1, 2, 3, 4] does not start with [2, 3, 4, 5]', function () {
            expect(startsWith([1, 2, 3, 4], [2, 3, 4, 5])).to.be.false;
        });

        it('[1, 2, 3, 4] does not start with [1, 2, 3, 4, 5]', function () {
            expect(startsWith([1, 2, 3, 4], [1, 2, 3, 4, 5])).to.be.false;
        });

        it('[1, 2, 3, 4] starts with string 1 with strict mode set to true', function () {
            expect(startsWith([1, 2, 3, 4], '1', true)).to.be.false;
        });
    });
});
