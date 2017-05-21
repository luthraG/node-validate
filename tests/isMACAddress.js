var ok          	= require('assert').ok;
var isMACAddress    = require('../validate.js').isMACAddress;

(function testMACAddress() {
    ok(!isMACAddress(''), 'Empty string is not a a valid MAC address');
    ok(!isMACAddress(null), 'null is not a valid MAC address');
    ok(isMACAddress('78:0C:B8:D8:ED:74'), 'String \"78:0C:B8:D8:ED:74\" is a valid MAC address');
    ok(isMACAddress('78-0C-B8-D8-ED-74'), 'String \"78-0C-B8-D8-ED-74\" is a valid MAC address');
    ok(!isMACAddress('78:0K:B8:M8:DF:74'), 'String \"78:0K:B8:M8:DF:74\" is not a valid MAC address');
    ok(!isMACAddress('78-0C-B8-D8:ED:74'), 'String \"78-0C-B8-D8:ED:74\" is not a valid MAC address');
})();