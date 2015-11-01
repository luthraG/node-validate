
var        alpha = /^[A-Z]+$/i,
    alphanumeric = /^[0-9A-Z]+$/i,
           ascii = /^[\x00-\x7F]+$/,
          base64 = /^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/i,
           email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     hexadecimal = /^[0-9A-F]+$/i;

// https://en.wikipedia.org/wiki/Universally_unique_identifier#Definition
var uuid = {
        '3': /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-3[0-9A-Fa-f]{3}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/i
      , '4': /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/i
      , '5': /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-5[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/i
      , all: /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[1-5][0-9A-Fa-f]{3}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/i
    };


// ************************************************************************************************
//
// isString
//
// Check if the value is string or not
//
//
// Examples:
//     isString(null); // returns false
//     isString(''); // returns true
//     isString('hello'); // returns true
//     isString(new String('hellow')); // returns true
//
function isString (value) {
	return (Object.prototype.toString.call(value) === '[object String]');
}

// ************************************************************************************************
//
// isNumber
//
// Check if the value is Number or not
//
//
// Examples:
//     isNumber(null); // returns false
//     isNumber('7'); // returns false
//     isNumber(7); // returns true
//     isNumber(new Number(7)); // returns true
//
function isNumber (value) {
	return (Object.prototype.toString.call(value) === '[object Number]');
}

// ************************************************************************************************
//
// isArray
//
// Check if the value is Array or not
//
//
// Examples:
//     isArray(null); // returns false
//     isArray('7'); // returns false
//     isArray(['5', '7']); // returns true
//     isArray(new Array(7, 11)); // returns true
//
function isArray(value) {
	return (Object.prototype.toString.call(value) === '[object Array]');
}

// ************************************************************************************************
//
// isObject
//
// Check if the value is Object or not 
// (Value could be String object, Number Object, Array Object, Date object etc.)
//
// Examples:
//     isObject(null); // returns true
//     isObject(new Number(5)); // returns true
//     isObject({}); // returns true
//     isObject(new Array(7, 11)); // returns true
//     isObject(''); // returns false
//
function isObject(value) {
	return (typeof value === 'object');
}

// ************************************************************************************************
//
// isStrictObject
//
// Check if the value is Object or not 
//
// Examples:
//     isStrictObject(null); // returns false
//     isStrictObject(new Number(5)); // returns false
//     isStrictObject({}); // returns true
//     isStrictObject(new Array(7, 11)); // returns false
//     isStrictObject(''); // returns false
//
function isStrictObject(value) {
	return (Object.prototype.toString.call(value) === '[object Object]');
}

// ************************************************************************************************
//
// isRegExp
//
// Check if the value is RegExp or not
//
// Examples:
//     isRegExp(null); // returns false
//     isRegExp('/abc/'); // returns false
//     isRegExp(/abc/); // returns true
//     isRegExp(new RegExp('abc')); // returns true
//
function isRegExp(value) {
	return (Object.prototype.toString.call(value) === '[object RegExp]');
}

// ************************************************************************************************
//
// isStrictBoolean
//
// Check if the value is Boolean object or not
//
function isStrictBoolean(value) {
	return (Object.prototype.toString.call(value) === '[object Boolean]');
}

// ************************************************************************************************
//
// isBoolean
//
// Check if the value is Boolean or not
//
function isBoolean(value) {
	if (isNull(value))
		return false;

	return (['true', 'false', '1', '0'].indexOf(value.toString()) >= 0);
}

// ************************************************************************************************
//
// isFunction
//
// Check if the value is Function or not
//
function isFunction(value) {
	return (Object.prototype.toString.call(value) === '[object Function]');
}

// ************************************************************************************************
//
// isTrue
//
// Check if the value is Boolean(true) or not
//
function isTrue (value) {
	return (value === true);
}

// ************************************************************************************************
//
// isFalse
//
// Check if the value is Boolean(false) or not
//
function isFalse(value) {
	return (value === false);
}

// ************************************************************************************************
//
// isLowerCase
//
// Check if the string is a lowercase string
//
function isLowerCase (value) {
	if (isString(value))
		return value === value.toLowerCase();
	else
		return false;
}

// ************************************************************************************************
//
// isUpperCase
//
// Check if the string is a uppercase string
//
function isUpperCase (value) {
	if (isString(value))
		return value === value.toUpperCase();
	else
		return false;
}

// ************************************************************************************************
//
// isTitleCase
//
// Check is the string is title case 
// i.e. first letter of each word in the string is capital case
//
function isTitleCase(value) {
	
	var retVal = false;

	if (isString(value)) {

		var values = value.split(' ');

		retVal = true;
		for (var i = 0, len = values.length; i < len; i++) {
			if ((values[i].trim().length > 0) && (!isUpperCase(values[i].charAt(0)))) {
				return false;
			}				
		};
	}

	return retVal;
}

// ************************************************************************************************
//
// isNumeric
//
// Check if the string is a number
//
function isNumeric (value) {
	return (!isNaN(parseFloat(value)));
}

// ************************************************************************************************
//
// isJSON
//
// Check if the string is valid JSON
//
function isJSON(value) {
	var retVal = false;
	try {
		if (isString(value))
			return ((typeof JSON.parse(value)) === 'object');
	} catch(e) {}

	return retVal;
}

// ************************************************************************************************
//
// isBase64
//
// Check if the string is base64 encoded
//
function isBase64(value) {
	if (isString(value))
		return base64.test(value);

	return false;
}

// ************************************************************************************************
//
// isAlpha
//
// Check if the string contains only alphabets, both upper and lower case
//
function isAlpha(str) {
	if (isString(str))
		return alpha.test(str);

	return false;
}

// ************************************************************************************************
//
// isAlphanumeric
//
// Check if the string contains alphabets and numbers
//
function isAlphanumeric(str) {
	if (isString(str))
		return alphanumeric.test(str);

	return false;
}

// ************************************************************************************************
//
// isHexadecimal
//
// Check if the string is a hexadecimal number
//
function isHexadecimal(str) {
	if (isString(str))
		return hexadecimal.test(str);

	return false;
}

// ************************************************************************************************
//
// isAscii
//
// Check if the string contains only ascii characters
//
function isAscii(str) {
	if (isString(str))
		return ascii.test(str);

	return false;
}

// ************************************************************************************************
//
// isNull
//
// Check if the value is null
//
function isNull (value) {
	return (value === null || typeof value === 'undefined' || (isNaN(value) && !value.length));
}

// ************************************************************************************************
//
// isValidEmail
//
// Check if the string is a valid email address
//
// Argument(s):
// 1. str : Input email address
//
// Examples:
//     isValidEmail(null); // returns false
//     isValidEmail(''); // returns false
//     isValidEmail('luthra.zenith@google.com'); // returns true
//     isValidEmail('luthra.zenithgoogle.com'); // returns false
//
function isValidEmail (str) {
	if (!isString(str))
		return false;

	// http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
	// http://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
	if (str.length > 254)
		return false;


	// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript/46181#46181
	var valid = email.test(str);
	if (!valid)
		return false;

	// http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
	var emailParts = str.split("@");
	if(emailParts[0].length > 64)
		return false;

	var domainParts = parts[1].split(".");

	// None of the domain part should be greater than 63 characters
	if(domainParts.some(function(part) { 
		return part.length > 63; 
	})) {
		return false;
	}

	return true;

}

// ************************************************************************************************
//
// isUUID
//
// Check if the specified string is uuid(of specified version)
//
// Argument(s):
// 1. str : string that needs to be checked if it is UUID
// 2. version : UUID version, there are total of 5 UUID version viz. 1,2,3,4,5
//
// Examples:
//     isUUID(null); // returns false
//     isUUID(''); // returns false
//     isUUID('4925123f-85a1-46bd-bfef-14026fbd4800', 4); // returns true
//     isUUID('4956123f-89a1-36bd-cfef-14026fbd1270', 3); // returns true
//
function isUUID (str, version) {
	if (!isString(str))
		return false;

	var uuidPattern = uuid[version ? version : 'all'];
        
    return (uuidPattern && uuidPattern.test(str));
}

// ************************************************************************************************
//
// isURIEncoded
//
// Check if String is URI encoded
//
// Argument(s):
// 1. str : input string to be checked if it has been URI encoded
//
// Examples:
//     isURIEncoded(null); // returns false
//     isURIEncoded(''); // returns true
//     isURIEncoded('gaurav'); // returns true
//
function isURIEncoded (str) {
	if (!isString(str))
		return false;

	var decoded = decodeURI(str);

	if (decoded == str)
		return false;

	return true;
}

// ************************************************************************************************
//
// isEmpty
//
// Check if the string doesn't contain anything
//
// Argument(s):
// 1. value : input string to be checked for emptyness
//
// Examples:
//     isEmpty(null); // returns true
//     isEmpty(''); // returns true
//     isEmpty('    '); // returns false
//
function isEmpty (value) {
	return (isNull(value) || value.length == 0);
}

// ************************************************************************************************
//
// isWhiteSpace
//
// Check if the string contains only whitespaces
//
// Argument(s):
// 1. value : input string to be checked for whitespaces
//
// Examples:
//     isWhiteSpace(null); // returns false
//     isWhiteSpace(''); // returns true
//     isWhiteSpace('    '); // returns true
//
function isWhiteSpace (value) {
	return (isString(value) && value.trim().length == 0);
}

// ************************************************************************************************
//
// isBlank
//
// Check if the string is blank : i.e. either it is empty or only contains whitespaces
//
// Argument(s):
// 1. value : Value to be checked for 'blankness'
//
// Examples:
//     isBlank(null); // returns true
//     isBlank(''); // returns true
//     isBlank('    '); // returns true
//
function isBlank (value) {
	return (isEmpty(value) || isWhiteSpace(value));
}

// ************************************************************************************************
//
// contains
//
// Check if the string contains another string(Case sensitive search)
//
// Argument(s):
// 1. baseStr : Base string in which we need to look
// 2. searchStr : String to be searched in base str
//
// Examples:
// 	   var baseStr = 'This is me and that is you';
// 	   var searchStr = 'this';
//     contains(baseStr, searchStr); // returns false
//     contains(baseStr, 'This'); // returns true
//     contains('I am your friend', 'you'); // returns true
//
function contains (baseStr, searchStr) {
	if (!isString(baseStr) || !isString(searchStr))
		return false;

	if (baseStr.indexOf(searchStr) > -1)
		return true;

	return false;
}

// ************************************************************************************************
//
// containsIgnoreCase
//
// Check if the string contains another string(Case insensitive search)
//
// Argument(s):
// 1. baseStr : Base string in which we need to look
// 2. searchStr : String to be searched in base str
//
// Examples:
// 	   var baseStr = 'This is this and that is that';
// 	   var searchStr = 'this';
//     containsIgnoreCase(baseStr, searchStr); // returns true
//     containsIgnoreCase(baseStr, 'hello'); // returns false
//     containsIgnoreCase('I am your friend', 'you'); // returns true
//
function containsIgnoreCase (baseStr, searchStr) {
	if (!isString(baseStr) || !isString(searchStr))
		return false;

	if (baseStr.toLowerCase().indexOf(searchStr.toLowerCase()) > -1)
		return true;

	return false;
}

// ************************************************************************************************
//
// containsKey
//
// Safely reach into a object and returns true if specified key is present. 
// Returns false if the intended target is not present.
//
// Examples:
//     var o = { qwe : { asd : { zxc : 123 } } };
//     containsKey(o, 'qwe'); // returns true
//     containsKey(o, 'zxc'); // returns false, as it is not present at top level
//     containsKey(o, 'qwer'); // returns false.  there's no 'qwer' inside o
//     containsKey(null, 'qwe'); // returns false. The object to look into is not there.
//
// ************************************************************************************************
function containsKey (obj, key) {

	// If JSON string is passed instead of JSON object
	// Check if it is valid JSON string
	if (typeof obj === 'string' && !isJSON(obj))
		return false;

	if (typeof obj === 'string')
		obj = JSON.parse(obj);

	if (isStrictObject(obj))
		return obj.hasOwnProperty(key);

	return false;
}

// ************************************************************************************************
//
// containsDeepKey
//
// Safely reach into a nested object and returns true if specified key is present. 
// Returns false if any of the intermediate subobjects or the intended target are not present.
// 
// Arguments:
// 1. obj : Object to search in : It should be a valid JSON object/string
// 2. key(s) : Comman seprated keys, with parent key first
//
// Examples:
//     var o = { qwe : { asd : { zxc : 123 } } };
//     containsDeepKey(o, 'qwe'); // returns true
//     containsDeepKey(o, 'zxc'); // returns true
//     containsDeepKey(o, 'qwe', 'asd'); // returns true
//     containsDeepKey(null, 'qwe'); // returns false. The object to look into is not there.
//
// ************************************************************************************************
function containsDeepKey (obj) {

	// If JSON string is passed instead of JSON object
	// Check if it is valid JSON string
	if (typeof obj === 'string' && !isJSON(obj))
		return false;

	if (typeof obj === 'string')
		obj = JSON.parse(obj);

	if (!isStrictObject(obj))
		return false;

	var args = Array.prototype.slice.call(arguments, 1);

	for (var i = 0; i < args.length; i++) {
	    if (!obj || !obj.hasOwnProperty(args[i])) {
	      return false;
	    }
	    obj = obj[args[i]];
	}
	  
	return true;
}

// ************************************************************************************************
//
// isPalindrome
//
// Check if input string is a palindrome or not
// 
// Argument(s):
// 1. str : The string to be checked for palindrome
//
// Examples:
//     var str1 = 'abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba';
//     var str2 = 'eye';
//     var str3 = 'Hello';
//     isPalindrome(str1); // returns true
//     isPalindrome(str2); // returns true
//     isPalindrome(str3); // returns false
//
function isPalindrome(str) {
	if (!isString(str))
		return false;

    var   endInx = str.length - 1,
        startIdx = 0;

    while (endInx > startIdx) {
      if (str.charAt(startIdx++) !== str.charAt(endInx--)) 
      	return false;
    }
    return true;
}

// ************************************************************************************************
//
// objectEquals
//
// Check if two objects(String, Object, Number, Date, function, RegExp, Array)
//  are equal
//
// Argument(s):
// 1. x : First object to check for equality
// 2. y : Second object to check with equality
//
// Examples:
// 	   var o = { qwe : { asd : { zxc : 123 } } };
// 	   var m = { qwe : { asd : { zxc : 123 } } };
//     objectEquals(o, m); // returns true
//     objectEquals(new Number(5), 5); // returns true
//     objectEquals(['1', '2', '3'], ['3', '2', '1']); // returns false
//     objectEquals(['1', '2', '3'], ['1', '2', '3']); // returns true
//
function objectEquals(x, y) {
	'use strict';

    if (x === null || x === undefined || y === null || y === undefined)
    	return x === y;

    if (x.constructor !== y.constructor) 
    	return false;

    if ((typeof x === 'function' && typeof y === 'function') ||
       (x instanceof Date && y instanceof Date) ||
       (x instanceof RegExp && y instanceof RegExp) ||
       (x instanceof String && y instanceof String) ||
       (x instanceof Number && y instanceof Number)) {
        return x.toString() === y.toString();
    }
    
    if (x === y || x.valueOf() === y.valueOf()) 
    	return true;

    if (Array.isArray(x) && Array.isArray(y) && x.length !== y.length) 
    	return false;

    // If they are strictly equal, they both need to be object at least
    if (!(x instanceof Object)) 
    	return false;

    if (!(y instanceof Object)) 
    	return false;

    // recursive object equality check
    var p = Object.keys(x);
    return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
        p.every(function (i) { return objectEquals(x[i], y[i]); });
}

exports = module.exports = {
	isString             : isString,
	isNumber             : isNumber,
	isArray		         : isArray,
	isObject	         : isObject,
	isStrictObject       : isStrictObject,
	isRegExp	      	 : isRegExp,
	isBoolean 			 : isBoolean,
	isStrictBoolean 	 : isStrictBoolean,
	isFunction   		 : isFunction,
	isTrue		   		 : isTrue,
	isFalse		   		 : isFalse,
	isLowerCase    		 : isLowerCase,
	isUpperCase    		 : isUpperCase,
	isTitleCase    		 : isTitleCase,
	isNumeric            : isNumeric,
	isJSON         		 : isJSON,
	isBase64       		 : isBase64,
	isEmpty        		 : isEmpty,
	isBlank        		 : isBlank,
	isWhiteSpace   		 : isWhiteSpace,
	isAlpha        		 : isAlpha,
	isAlphanumeric 		 : isAlphanumeric,
	isHexadecimal  		 : isHexadecimal,
	isAscii   			 : isAscii,
	isValidEmail  		 : isValidEmail,
	isUUID				 : isUUID,
	isURIEncoded         : isURIEncoded,
	containsKey 		 : containsKey,
	containsDeepKey      : containsDeepKey,
	contains  			 : contains,
	containsIgnoreCase   : containsIgnoreCase,
	isPalindrome         : isPalindrome,
	objectEquals		 : objectEquals,
	isNull				 : isNull
};