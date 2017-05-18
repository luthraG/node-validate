var ok          = require('assert').ok;
var strictEqual = require('assert').strictEqual;
var startsWith  = require('../validate.js').startsWith;

(function testStartsWith() {
    ok(startsWith('Blue Whale, Killer Whale', 'Blue'), 'Blue Whale, Killer Whale starts with Blue');
    ok(!startsWith('Blue Whale, Killer Whale', 'blue'), 'Blue Whale, Killer Whale does not start with Blue');
    ok(!startsWith('Brave new world', 'world'), 'Brave new world does not start with world');
    ok(startsWith(123456, 123), '123456 starts with 123');
    ok(startsWith(123456, 234, 1), '123456 starts with 234 at position 1');
    ok(!startsWith(23456, 123), '23456 does not start with 123');
    ok(startsWith('', ''), 'empty string starts with empty string');
    ok(startsWith(null, ''), 'null starts with empty string');
    ok(startsWith('HelloFoo', 'Foo', 5), 'HelloFoo starts with foo at position 6');
    ok(startsWith('Brave new world', 'world', 10), 'Brave new world starts with world at position 10');
    ok(startsWith('Äspress', 'Ä'), 'Äspress starts with a unicode character Ä');

    strictEqual(startsWith('gaurav', 'gau'), true);
    strictEqual(startsWith('GAURAV', 'GA'), true);
    strictEqual(startsWith('GAURAV', 'ga'), false);
    strictEqual(startsWith('GAURAV', 'gaurav'), false);
    strictEqual(startsWith('GAURAV', 'GAU', 0), true);
    strictEqual(startsWith('GAURAV', 'RAV', 3), true);
 
})();