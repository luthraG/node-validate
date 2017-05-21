var ok          = require('assert').ok;
var isMD5       = require('../validate.js').isMD5;

(function testEndsWith() {
    ok(!isMD5(''), 'Empty string is not a md5 hash value');
    ok(!isMD5(null), 'null is not a md5 hash value');
    ok(!isMD5('Hello World'), 'String \"Hello World\" is not a md5 hash value');
    ok(isMD5('e4d909c290d0fb1ca068ffaddf22cbd0'), 'e4d909c290d0fb1ca068ffaddf22cbd0 is md5 hash value');
    ok(isMD5('9e107d9d372bb6826bd81d3542a419d6'), '9e107d9d372bb6826bd81d3542a419d6 is md5 hash value');
    ok(isMD5('B529D8871187ECC7FE5F152142B3440A'), 'B529D8871187ECC7FE5F152142B3440A is md5 hash value');
})();