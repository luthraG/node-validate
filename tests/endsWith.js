var ok          = require('assert').ok;
var strictEqual = require('assert').strictEqual;
var endsWith    = require('../validate.js').endsWith;

(function testEndsWith() {
    ok(endsWith('Blue Whale, Killer Whale', 'Whale'), 'Blue Whale, Killer Whale ends with Whale');
    ok(endsWith('Blue Whale, Killer Whale', 'Killer Whale', 12), 'Blue Whale, Killer Whale ends with Whale at position 12');
    ok(!endsWith('Blue Whale, Killer Whale', 'blue'), 'Blue Whale, Killer Whale does not end with Blue');
    ok(!endsWith('Brave new world', 'World'), 'Brave new world does not end with world');
    ok(endsWith(123456, 456), '123456 ends with 456');
    ok(!endsWith(123456, 1234567), '123456 does not end with 1234567');
    ok(!endsWith(123456, 2345678, 1), '123456 does not end with 2345678 at position 1');
    ok(!endsWith(23456, 123), '23456 does not end with 123');
    ok(endsWith('', ''), 'empty string ends with empty string');
    ok(endsWith(null, ''), 'null ends with empty string');
    ok(endsWith(null, null), 'null ends with null');
    ok(endsWith('HelloFoo', 'Foo', 5), 'HelloFoo ends with foo at position 5');
    ok(endsWith('Brave new world', 'world', 10), 'Brave new world ends with world at position 10');
    ok(endsWith('Brave new world', 'world'), 'Brave new world ends with world');
    ok(endsWith('Brave new world', 'new world', 6), 'Brave new world ends with new world at position 6');
    ok(endsWith('ÄspressÄ', 'Ä'), 'Äspress ends with a unicode character Ä');
    ok(endsWith('Brave new world', 'world', 20), 'Brave new world ends with world at position 20 --> Since it is greater than string length hence it defaults');
    ok(endsWith('Brave new world', 'Brave new world', 20), 'Brave new world ends with new world at position 20 --> Since it is greater than string length hence it defaults');
    ok(endsWith([1, 2, 3, 4], [2, 3, 4]), '[1, 2, 3, 4] ends with [2, 3, 4]');
    ok(!endsWith([1, 2, 3, 4], [2, 3, 4, 5]), '[1, 2, 3, 4] does not end with [2, 3, 4, 5]');
    ok(!endsWith([1, 2, 3, 4], [1, 2, 3, 4, 5]), '[1, 2, 3, 4] does not end with [1, 2, 3, 4, 5]');
    ok(endsWith([1, 2, 3, 4], [2, 3, 4], 1), '[1, 2, 3, 4] ends with [2, 3, 4] at position 1');
    ok(endsWith([1, 2, 3, 4], 4, true), '[1, 2, 3, 4] ends with number 4 with strict mode true');
    ok(endsWith([1, 2, 3, 4], '4', false), '[1, 2, 3, 4] ends with string 4 with strict mode set to false');

    strictEqual(endsWith('gaurav', 'av'), true);
    strictEqual(endsWith('GAURAV', 'AV'), true);
    strictEqual(endsWith('GAURAV', 'av'), false);
    strictEqual(endsWith('GAURAV', 'gaurav'), false);
    strictEqual(endsWith('GAURAV', 'RAV'), true);
    strictEqual(endsWith('GAURAV', 'RAV', 3), true);
    strictEqual(endsWith(['GAURAV', 'LUTHRA'], 'LUTHRA'), true);
    strictEqual(endsWith(['GAURAV', 'LUTHRA'], 'LUTHRA', 1), true);
    strictEqual(endsWith(['GAURAV', '123'], 123, true), false);
    strictEqual(endsWith(['GAURAV', '123'], 123, false), true);

})();