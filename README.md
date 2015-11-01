# node-ratify

[![NPM version][npm-image]][npm-url]

A library of string validators.

## Installation

	'npm install node-ratify'

### Server-side usage

```javascript
var ratify = require('node-ratify');

ratify.isBase64('bm9kZS1yYXRpZnk='); // true
```

### Validators

- **isAlpha(str)** - check if the string contains only alphabets, both upper and lower case.
- **isAlphanumeric(str)** - check if the string contains alphabets and numbers.
- **isArray(value)** - check if the value passed is Array.
- **isAscii(value)** - check if the string contains only ascii characters.
- **isBase64(str)** - check if a string is base64 encoded.
- **isBlank(str)** - check if a string is blank.
- **isBoolean(str)** - Check if the value is boolean value i.e. true, false, 1, or 0.
- **contains(str)** - check if the string contains another string(Case sensitive search).
- **containsIgnoreCase(str)** - check if the string contains another string(Case insensitive search).
- **containsKey(obj, key)** - Safely reach into a object and returns true if specified key is present.
- **containsDeepKey(obj)** - Safely reach into a 'nested' object and returns true if specified key is present. 
- **isEmpty(str)** - check if a string is empty. A string containing only whitespaces is blank string but not empty string.
- **isHexadecimal(str)** - Check if the string is a hexadecimal number.
- **isFalse(value)** - check if the value passed is false.
- **isFunction(value)** - check if the value is function or not.
- **isJSON(str)** - check if a string is a valid JSON string.
- **isLowerCase(str)** - check if a string is in lowercase.
- **isNull(value)** - check if the value is null or undefined or Nan.
- **isNumber(value)** - check if the value passed is Number object.
- **isNumeric(str)** - check if a string is number(Integer/Floating point et al.).
- **isObject(value)** - check if the value passed is Object.
- **objectEquals(obj1, obj2)** - check if two objects(String, Object, Number, Date, function, RegExp, Array) are equal or not.
- **isPalindrome(str)** - check if input string is a palindrome or not.
- **isRegExp(value)** - check if the value is RegExp or not.
- **isStrictBoolean(value)** - check if the value is boolean object or not.
- **isStrictObject(value)** - check if the value is Object or not.
- **isString(value)** - check if the value passed is string.
- **isTitleCase(value)** - check is the string is title case i.e. first letter of each word in the string is capital case.
- **isTrue(value)** - check if the value passed is true.
- **isUpperCase(str)** - check if a string is in uppercase.
- **isURIEncoded(str)** - check if String is URI encoded.
- **isUUID(str)** - check if the specified string is uuid(of specified version).
- **isValidEmail(str)** - check if the string is a valid email address.
- **isWhiteSpace(str)** - check if a string contains only whitespaces.

[npm-url]: https://npmjs.com/package/node-ratify
[npm-image]: http://img.shields.io/npm/v/validator.svg
