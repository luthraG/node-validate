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

- **isArray(value)** - check if the value passed is Array.
- **isBase64(str)** - check if a string is base64 encoded.
- **isBlank(str)** - Check if a string is blank.
- **isEmpty(str)** - check if a string is empty. A string containing only whitespaces is blank string but not empty string.
- **isFalse(value)** - check if the value passed is false.
- **isJSON(str)** - check if a string is a valid JSON string.
- **isLowerCase(str)** - check if a string is in lowercase.
- **isNumber(value)** - check if the value passed is Number object.
- **isNumeric(str)** - check if a string is number(Integer/Floating point et al.).
- **isObject(value)** - check if the value passed is Object.
- **isTrue(value)** - check if the value passed is true.
- **isString(value)** - check if the value passed is string.
- **isUpperCase(str)** - check if a string is in uppercase.
- **isWhiteSpace(str)** - check if a string contains only whitespaces.

[npm-url]: https://npmjs.com/package/node-ratify
[npm-image]: http://img.shields.io/npm/v/validator.svg
