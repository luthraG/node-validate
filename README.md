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

- **isBase64(str)** - check if a string is base64 encoded.

[npm-url]: https://npmjs.com/package/node-ratify
[npm-image]: http://img.shields.io/npm/v/validator.svg
