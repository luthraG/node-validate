# node-ratify

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

A library of string, array and javascript object validators.

### Server-side usage

```javascript
var ratify = require('node-ratify');

ratify.isBase64('bm9kZS1yYXRpZnk='); //=> true
```

The library can also be installed through [npm][npm]

```bash
$ npm install -g node-ratify
$ npm install --save node-ratify
```

### Client-side usage

```html
<script type="text/javascript" src="validate.min.js"></script>
<script type="text/javascript">
  validate.isBase64('bm9kZS1yYXRpZnk='); //=> true
</script>
```

The library can also be installed through [bower][bower]

```bash
$ bower install node-ratify
```

### Clone the repo

```bash
$ git clone https://github.com/luthraG/node-validate.git
```

### Validators

- **contains(str)** - check if the string contains another string(Case sensitive search).
- **containsDeepKey(obj)** - Safely reach into a 'nested' object and returns true if specified key is present.
- **containsIgnoreCase(str)** - check if the string contains another string(Case insensitive search).
- **containsJapanese(str)** - check if the string contains japanese characters.
- **containsKey(obj, key)** - Safely reach into a object and returns true if specified key is present. 
- **hasAnyMethod(obj)** - check if the object has any method present inside it.
- **isAlpha(str)** - check if the string contains only alphabets, both upper and lower case.
- **isAlphanumeric(str)** - check if the string contains alphabets and numbers.
- **isArray(value)** - check if the value passed is Array.
- **isAscii(value)** - check if the string contains only ascii characters.
- **isBase64(str)** - check if a string is base64 encoded.
- **isBlank(str)** - check if a string is blank.
- **isBoolean(str)** - check if the value is boolean value i.e. true, false, 1, or 0.
- **isDataURI(value)** - check if value is a valid data URI or not.
- **isDate(value)** - check if the value is date object or not.
- **isEmpty(str)** - check if a string is empty. A string containing only whitespaces is blank string but not empty string.
- **isError(value)** - check if value is an error object or not
- **isFalse(value)** - check if the value passed is false.
- **isFilePath(value)** - check if the value is a valid file path i.e. window file path and unix file path.
- **isFullWidth(str)** - check if the specified string contains any full width characters or not.
- **isFunction(value)** - check if the value is function or not.
- **isHalfWidth(str)** - check if the specified string contains any half width characters or not.
- **isHexaColor(str)** - check if the specified string is valid hexadecimal color value or not.
- **isHexadecimal(str)** - check if the string is a hexadecimal number.
- **isInRange(value, left, right)** - check if string lies between two values i.e. left and right.
- **isISO8601(str)** - check if string is a valid ISO8601 value.
- **isJSON(str)** - check if a string is a valid JSON string.
- **isLatitude(str)** - check if the string is valid latitude value.
- **isLongitude(str)** - check if the string is valid longitude value.
- **isLowerCase(str)** - check if a string is in lowercase.
- **isMACAddress(str)** - check if the string value is a valid MAC address.
- **isMap(value)** - check if the value is map or not.
- **isMD5(str)** - check if the string value is MD5 hash.
- **isMethodPresent(obj, methodName)** - check if the object has the specified method present inside it.
- **isMultiByte(str)** - check if string contains one or more multibyte characters.
- **isNegative(value)** - check if input value if negative value or not.
- **isNonNegative(value)** - check if input value if a non negative value or not.
- **isNonPositive(value)** - check if input value if a non positive value or not.
- **isNull(value)** - check if the value is null or undefined or NaN.
- **isNumber(value)** - check if the value passed is Number object.
- **isNumeric(str)** - check if a string is number(Integer/Floating point et al.).
- **isObject(value)** - check if the value passed is Object.
- **isPalindrome(str)** - check if input string is a palindrome or not.
- **isPort(str)** - check if input string is a valid port number or not.
- **isPositive(str)** - check if input value if positive value or not.
- **isPrintableASCII(str)** - check if all the characters of input string are printable ASCII characters or not.
- **isRegExp(value)** - check if the value is RegExp or not.
- **isRGBColor(str)** - check if string is a valid rgb value.
- **isSemver(str)** - check if specified string is valid semver as per semantics versioning rule.
- **isSet(value)** - check if the specified object is set or not
- **isStrictBoolean(value)** - check if the value is boolean object or not.
- **isStrictObject(value)** - check if the value is Object or not.
- **isString(value)** - check if the value passed is string.
- **isSystemError(value)** - check is the value is system error object or not.
- **isTitleCase(value)** - check is the string is title case i.e. first letter of each word in the string is capital case.
- **isTrue(value)** - check if the value passed is true.
- **isUndefined(value)** - check if value is a undefined or not.
- **isUnixFilePath(value)** - check if value is valid unix file path.
- **isUpperCase(str)** - check if a string is in uppercase.
- **isURIEncoded(str)** - check if multi word string is URI encoded.
- **isUUID(str)** - check if the specified string is uuid(of specified version).
- **isValidEmail(str)** - check if the string is a valid email address.
- **isVariableWidth(str)** - check if the specified string contains both full width and half width characters.
- **isWeakMap(value)** - check if the value is weakmap or not.
- **isWeakSet(value)** - check if value is a weak set or not.
- **isWinFilePath(value)** - check if value is valid window file path.
- **isWhiteSpace(str)** - check if a string contains only whitespaces.
- **objectEquals(obj1, obj2)** - check if two objects(String, Object, Number, Date, function, RegExp, Array) are equal or not.
- **startsWith(str, starts, position, strict)** - check if a string/number/array starts with another string/number/array.<br />
It accepts two optional parameters - position and strict. Client can specify the optional position value to tell where it will check for start.<br />
The optional parameters strict, which is set to false by default, indicates whether number values should be converted to string or not while comparing
- **endsWith(str, ends, position, strict)** - check if a string/number/array ends with another string/number/array.<br />
It accepts two optional parameters - position and strict. Client can specify the optional position value to tell where it will check for end.<br />
The optional parameters strict, which is set to false by default, indicates whether number values should be converted to string or not while comparing

### Examples

```javascript
var ratify = require('node-ratify');

// Check if the value is string or not
ratify.isString(new String('hello')); // returns true

// Check if the value is Number or not
ratify.isNumber(7); // returns true
ratify.isNumber(false); // returns false

// Check if the value is Array or not
ratify.isArray('7'); // returns false
ratify.isArray(['5', '7']); // returns true

// Check if the value is Object or not 
// (Value could be String object, Number Object, Array Object, Date object etc.)
ratify.isObject(new Array(7, 11)); // returns true
ratify.isObject(''); // returns false

// Check if the value is Object or not 
ratify.isStrictObject({}); // returns true
ratify.isStrictObject(new Array(7, 11)); // returns false

// Check if the value is RegExp or not
ratify.isRegExp('/abc/'); // returns false
ratify.isRegExp(/abc/); // returns true

// Check if the value is Boolean object or not
ratify.isStrictBoolean(false) // returns true

// Check if the value is Boolean or not
ratify.isBoolean() // returns false
ratify.isBoolean(1) // returns true
ratify.isBoolean(false) // returns true

// Check if the value is Function or not
function test() {return true;}
function test2() {};
var arr = ['Item1', 'Item2', 'Item3'];
var obj = {};

ratify.isFunction(test) // returns true
ratify.isFunction(test2) // returns true
ratify.isFunction(arr) // returns false
ratify.isFunction(obj) // returns false
ratify.isFunction(null) // returns false

// Check if the string is a lowercase string
ratify.isLowerCase('gaurav') // returns true
ratify.isLowerCase() // returns false

// Check if the string is a uppercase string
ratify.isUpperCase('GAURAV') // returns true
ratify.isUpperCase() // returns false

// Check is the string is title case 
// i.e. first letter of each word in the string is capital case
ratify.isTitleCase('hello World') // returns false
ratify.isTitleCase('HATs Off To YOU') // returns true

// Check if the string is a number
ratify.isNumeric('7') // returns true
ratify.isNumeric(-Infinity) // returns true

// Check if the string/object is valid JSON
var a = {a : 'a', b : 'b', c : 'c', d : 'd'};
var b = {a : 'a', b : 'b', c : { x : 'x', y : 'y', z : 
            { key1 : 'value1', key2 : 'value2'}}};
var c = {a : 'a', b : 'b', c : { x : 'x', y : 'y', z : 
            { key1 : 'value1', key2 : 'value2', }}};  // Extra comma

ratify.isJSON("\n{\"a\" : \"5\"}\n"); // returns true
ratify.isJSON(a); // returns true
ratify.isJSON(b); // returns true
ratify.isJSON(c); // returns true
ratify.isJSON('/abc/'); // returns false

// Check if the string is base64 encoded
ratify.isBase64('gaurav') // returns false
ratify.isBase64('Zm9vYg==') // returns true

// Check if the string contains only alphabets, both upper and lower case
ratify.isAlpha()  // returns false
ratify.isAlpha('asd')  // returns true
ratify.isAlpha('123')  // returns false

// Check if the string contains alphabets and numbers
ratify.isAlphanumeric('abc') // returns true
ratify.isAlphanumeric(new Object()) // returns false
ratify.isAlphanumeric('134766678') // returns true

// Check if the string is a hexadecimal number
ratify.isHexadecimal('1f') // returns true
ratify.isHexadecimal('0x1F') // returns false
ratify.isHexadecimal('efa0123') // returns true

// Check if the string contains only ascii characters
ratify.isAscii('ᴁᴪᴙݝۺ') // returns false
ratify.isAscii(undefined) // returns false

// Check if the value is null
ratify.isNull(false) // returns false
ratify.isNull(0/0) // returns true

// Check if the string is a valid email address
ratify.isValidEmail('luthra.zenith@google.com'); // returns true
ratify.isValidEmail('luthra.zenithgoogle.com'); // returns false

// Check if the specified string is uuid(of specified version)
ratify.isUUID('4925123f-85a1-46bd-bfef-14026fbd4800', 4); // returns true
ratify.isUUID('4956123f-89a1-36bd-cfef-14026fbd1270', 3); // returns true

// Check if String is URI encoded
ratify.isURIEncoded('gaurav'); // returns true

// Check if the string doesn't contain anything
ratify.isEmpty(null); // returns true
ratify.isEmpty(''); // returns true
ratify.isEmpty('    '); // returns false

// Check if the string contains only whitespaces
ratify.isWhiteSpace('    '); // returns true
ratify.isWhiteSpace(null); // returns false

// Check if the string is blank : i.e. 
// either it is empty or only contains whitespaces
ratify.isBlank(''); // returns true
ratify.isBlank('    '); // returns true

// Check if the string contains another string(Case sensitive search)
var baseStr = 'This is me and that is you';
var searchStr = 'this';

ratify.contains(baseStr, searchStr); // returns false
ratify.contains(baseStr, 'This'); // returns true

// Check if the string contains another string(Case insensitive search)
var baseStr = 'This is this and that is that';
var searchStr = 'this';

ratify.containsIgnoreCase(baseStr, searchStr); // returns true
ratify.containsIgnoreCase(baseStr, 'hello'); // returns false

// Safely search into a object and returns true if specified key is present. 
// Returns false if the intended target is not present.

var o = { qwe : { asd : { zxc : 123 } } };
ratify.containsKey(o, 'qwe'); // returns true
ratify.containsKey(o, 'zxc'); // returns false, as it is not present at top level

// Safely reach into a nested object and returns true if specified key is present. 
// Returns false if any of the intermediate subobjects or the intended target are not present.

var o = { qwe : { asd : { zxc : 123 } } };
ratify.containsDeepKey(o, 'qwe'); // returns true
ratify.containsDeepKey(o, 'zxc'); // returns true
ratify.containsDeepKey(o, 'qwe', 'asd'); // returns true

// Check if input string is a palindrome or not

var str1 = 'abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba';
var str2 = 'eye';
var str3 = 'Hello';

ratify.isPalindrome(str1); // returns true
ratify.isPalindrome(str2); // returns true
ratify.isPalindrome(str3); // returns false

// Check if two objects(String, Object, Number, Date, function, RegExp, Array)
// are equal

var o = { qwe : { asd : { zxc : 123 } } };
var m = { qwe : { asd : { zxc : 123 } } };

ratify.objectEquals(o, m); // returns true
ratify.objectEquals(new Number(5), 5); // returns true
ratify.objectEquals(['1', '2', '3'], ['3', '2', '1']); // returns false

// Check if the object has any method present inside it

var o = { qwe : { asd : { zxc : 123 } } };
var m = { qwe : 123, dummy : function() {console.log('Hello')} };

ratify.hasAnyMethod(o); // returns false
ratify.hasAnyMethod(m); // returns true

// Check if the object has the specified method present inside it

var o = { qwe : { asd : { zxc : 123 } } };
var m = { qwe : 123, dummy : function() {console.log('Hello')} };

ratify.isMethodPresent(o); // returns false
ratify.isMethodPresent(null); // returns false
ratify.isMethodPresent(m); // returns false
ratify.isMethodPresent(m, 'dummy'); // returns true

//
// Check if a string/number/array starts with another string/number/array at specified position.
// Returns boolean true or false
// Setting strict to true will not convert number to string while comparing
//
ratify.startsWith('Blue Whale, Killer Whale', 'Blue');          // returns true
ratify.startsWith('Blue Whale, Killer Whale', 'Blue', 10);      // returns false
ratify.startsWith('Brave new world', 'world');                  // returns false
ratify.startsWith('Brave new world', 'world', 10);              // returns true
ratify.startsWith('123456', '234', 1);                          // returns true
ratify.startsWith([1, 2, 3, 4], [1, 2, 3]);                     // returns true
ratify.startsWith([1, 2, 3, 4], 1);                             // returns true
ratify.startsWith([1, 2, 3, 4], '1', true);                     // returns false as strict mode = true


//
// Check if a string/number/array ends with another string/number/array at specified position.
// Returns boolean true or false
// Setting strict to true will not convert number to string while comparing
//
ratify.endsWith('Blue Whale, Killer Whale', 'Whale');             // returns true
ratify.endsWith('Blue Whale, Killer Whale', 'Killer Whale', 10);  // returns false
ratify.endsWith('Blue Whale, Killer Whale', 'Killer Whale', 12);  // returns true
ratify.endsWith('Brave new world', 'world');                      // returns true
ratify.endsWith('Brave new world', 'world', 11);                  // returns false
ratify.endsWith('123456', '23456', 1);                            // returns true
ratify.endsWith('123456', '2345', 1);                             // returns false
ratify.endsWith([1, 2, 3, 4], [2, 3, 4]);                         // returns true
ratify.endsWith([1, 2, 3, 4], 4);                                 // returns true
ratify.endsWith([1, 2, 3, 4], '4', true);                         // returns false as strict mode = true

//
// Check if the specified string is md5 hash or not
//
ratify.isMD5('');                                   // returns false
ratify.isMD5(null);                                 // returns false
ratify.isMD5('e4d909c290d0fb1ca068ffaddf22cbd0');   // returns true
ratify.isMD5('9e107d9d372bb6826bd81d3542a419d6');   // returns true
ratify.isMD5('hello world');                        // returns false

//
// Check if the specified string is valid MAC address or not
//
ratify.isMACAddress('');                    // returns false
ratify.isMACAddress(null);                  // returns false
ratify.isMACAddress('78:0C:B8:D8:ED:74');   // returns true
ratify.isMACAddress('78-0C-B8-D8-ED-74');   // returns true
ratify.isMACAddress('78:0K:B8:M8:DF:74');   // returns false

//
// Check if the specified string is valid hexadecimal color value or not
//
ratify.isHexaColor('');                 // returns false
ratify.isHexaColor(null);               // returns false
ratify.isHexaColor('#ffe4e1');          // returns true
ratify.isHexaColor('#ff4545');          // returns true
ratify.isHexaColor('#800080');          // returns true
ratify.isHexaColor('800080');           // returns true
ratify.isHexaColor('#8K0K8K');          // returns false
ratify.isHexaColor('#helloworld');      // returns false

//
// Check if the specified object is set or not
//
ratify.isSet('');                 // returns false
ratify.isSet(null);               // returns false
ratify.isSet(new Set());          // returns true
ratify.isSet(new Set(1, 2, 3));   // returns true
ratify.isSet(new WeakSet);        // returns false
ratify.isSet(new Set[1, 2, 3]);   // returns true

//
// Check if the specified object is weakset or not
//
ratify.isWeakSet('');               // returns false
ratify.isWeakSet(null);             // returns false
ratify.isWeakSet(new WeakSet());    // returns true
ratify.isWeakSet(new Set);          // returns false
ratify.isWeakSet(new WeakSet[{}]);  // returns true

//
// Check if passed value is undefined or not
//
ratify.isUndefined(undefined);      // returns true
ratify.isUndefined(null);           // returns false
ratify.isUndefined(void 0);         // returns true
ratify.isUndefined(new Object);     // returns false

//
// Check if passed object is error object or not
//
ratify.isError(new Error());                // returns true
ratify.isError(new RangeError());           // returns true
ratify.isError(new ReferenceError());       // returns true
ratify.isError(new TypeError());            // returns true

//
// Check if passed object is system error object or not
//
var error = new Error();
error.code = 'ECONNRESET';

ratify.isSystemError(new Error());          // returns false
ratify.isSystemError(error);                // returns true
ratify.isSystemError(new ReferenceError()); // returns false
ratify.isSystemError(new TypeError());      // returns false

//
// Check if passed object is date object or not
//
ratify.isDate(new Date());       // returns true
ratify.isDate('5/23/2017');      // returns false

//
// Check if passed value is map or not
//
ratify.isMap('');                 // returns false
ratify.isMap(null);               // returns false
ratify.isMap(new Map());          // returns true
ratify.isMap(new WeakMap);        // returns false
ratify.isMap(new Map([['key1', 'value1'], ['key2', 'value2']]));   // returns true

//
// Check if passed value is weak map or not
//
ratify.isWeakMap('');               // returns false
ratify.isWeakMap(null);             // returns false
ratify.isWeakMap(new WeakMap());    // returns true
ratify.isWeakMap(new Map);          // returns false

//
// Check if passed string contains half width characters
//
ratify.isHalfWidth('');               // returns false
ratify.isHalfWidth(null);             // returns false
ratify.isHalfWidth('ｱﾃﾞﾁｬｴｳｨｵﾌﾟ');      // returns true
ratify.isHalfWidth('ｱﾃﾞﾁｬｴｳｨ');         // returns true

//
// Check if passed string contains full width characters
//
ratify.isFullWidth('');               // returns false
ratify.isFullWidth(null);             // returns false
ratify.isFullWidth('ポヲルダマ');      // returns true
ratify.isFullWidth('ポヲルダ');        // returns true

//
// Check if passed string contains japanese characters
//
ratify.containsJapanese('');            // returns false
ratify.containsJapanese(null);          // returns false
ratify.containsJapanese('世界');        // returns true
ratify.containsJapanese('こんにちは');  // returns true

//
// Check if passed all the characters of passed string are printable ASCII characters or not
//
ratify.isPrintableASCII('');            // returns false
ratify.isPrintableASCII(null);          // returns false
ratify.isPrintableASCII('世界');          // returns false
ratify.isPrintableASCII('Helloworld');   // returns true
ratify.isPrintableASCII('\n\t\t');      // returns false

//
// Check if string is both half width and full width characters
//
ratify.isVariableWidth('ギヰヺタヰｬｴｳ');        // returns true
ratify.isVariableWidth('ポヲルダマ');          // returns false
ratify.isVariableWidth('ｱﾃﾞﾁｬｴｳｨｵﾌﾟ');          // returns false

//
// Check if string is a valid port number
//
ratify.isPort('0');        // returns false
ratify.isPort('8000');     // returns true
ratify.isPort('-421');     // returns false

//
// Check if string is a value that follows semantics versioning rule
//
ratify.isSemver('v1.0.0');              // returns true
ratify.isSemver('1.0.0-alpha.1');       // returns true
ratify.isSemver('alpha.beta.gamma');    // returns false

//
// Check if the string is a valid latitude value
//
ratify.isLatitude('+90');               // returns true
ratify.isLatitude('+40.58517');         // returns true
ratify.isLatitude('alpha.beta.gamma');  // returns false

//
// Check if the string is a valid longitude value
//
ratify.isLongitude('+90');               // returns true
ratify.isLongitude('+40.58517');         // returns true
ratify.isLongitude('alpha.beta.gamma');  // returns false

//
// Check if string is a valid windows path
//
ratify.isWinFilePath('C:\\BatmanSharedDevice\\');       // returns true
ratify.isWinFilePath('C:\BatmanSharedDevice');          // returns false
ratify.isWinFilePath('/mnt/data/tmp');                  // returns false

//
// Check if string is a valid unix path
//
ratify.isUnixFilePath('C:\\BatmanSharedDevice\\');      // returns false
ratify.isUnixFilePath('\mnt\data');                     // returns true
ratify.isUnixFilePath('/mnt/data/tmp');                 // returns false

//
// Check is string is a valid file path i.e. wither unix file path or windows file path
//
ratify.isFilePath('C:\\BatmanSharedDevice\\');          // returns true
ratify.isFilePath('\mnt\data');                         // returns true
ratify.isFilePath('/mnt/data');                         // returns false

//
// Check if string contains one or more multibyte characters
//
ratify.isMultiByte('節點');               // returns true
ratify.isMultiByte('helloworld');        // returns false
ratify.isMultiByte('こんにちは');         // returns true

//
// Check if string lies between two values i.e. left and right
//
ratify.isInRange('100', '10', '200');         // returns true
ratify.isInRange('90.1', '-21', '22');        // returns false
ratify.isInRange('Helloworld10', '10', '20'); // returns false

//
// Check if the value being passed is positive value
//
ratify.isPositive('100.21');         // returns true
ratify.isPositive('90.1');          // returns true
ratify.isPositive('-90.1');         // returns false
ratify.isPositive('Helloworld10');  // returns false

//
// Check if the value being passed is negative value
//
ratify.isNegative('100.21');         // returns false
ratify.isNegative('90.1');          // returns false
ratify.isNegative('-90.1');         // returns true
ratify.isNegative('Helloworld10');  // returns false

//
// Check if value being passed is non positive value.
//
ratify.isNonPositive('100.21');         // returns false
ratify.isNonPositive('-90.1');         // returns true
ratify.isNonPositive('0');              // returns true

//
// Check if value being passed is non negative value.
//
ratify.isNonNegative('100.21');         // returns true
ratify.isNonNegative('-90.1');         // returns false
ratify.isNonNegative('0');              // returns true

//
// Check if value is a valid data URI
//
ratify.isDataURI('data:,Hello%2C%20World!');                            // returns true
ratify.isDataURI('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D');    // returns true
ratify.isDataURI('');                                                   // returns false

//
// Check if value is a valid iso8601 string
//
ratify.isISO8601('2009-12T12:34');           // returns true
ratify.isISO8601('2010-02-18T16:23,25');     // returns true
ratify.isISO8601('2009-05-19T14a39r');       // returns false

//
// Check if value is valid RGB color value
//
ratify.isRGBColor('rbg(255, 255, 255)');           // returns true
ratify.isRGBColor('rbg(255, 255, 0)');             // returns true
ratify.isRGBColor('hello rbg(255, 255, 255)');     // returns false

```

### License(MIT)

```
Copyright (c) 2017 Gaurav Luthra(luthra.zenith@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[npm-url]: https://www.npmjs.com/package/node-ratify
[npm-image]: https://img.shields.io/npm/v/node-ratify.svg

[npm]: https://www.npmjs.com/
[bower]: http://bower.io/

[travis-url]: https://travis-ci.org/luthraG/node-validate
[travis-image]: http://img.shields.io/travis/luthraG/node-validate.svg

[coveralls-url]: https://coveralls.io/github/luthraG/node-validate
[coveralls-image]: https://coveralls.io/repos/github/luthraG/node-validate/badge.svg