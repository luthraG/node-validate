
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
function isRegExp(value) {
	return (Object.prototype.toString.call(value) === '[object RegExp]');
}

// ************************************************************************************************
//
// isStrictBoolean
//
// Check if the value is Boolean object or not
//
// Examples:
// 		isStrictBoolean(new Boolean(true)) // returns true
// 		isStrictBoolean(new Boolean(false)) // returns true
// 		isStrictBoolean(true) // returns true
// 		isStrictBoolean(false) // returns true
//
// ************************************************************************************************
function isStrictBoolean(value) {
	return (Object.prototype.toString.call(value) === '[object Boolean]');
}

// ************************************************************************************************
//
// isBoolean
//
// Check if the value is Boolean or not
//
// Examples:
// 		isBoolean() // returns false
// 		isBoolean(new Boolean(false)) // returns true
// 		isBoolean(true) // returns true
// 		isBoolean('1') // returns true
// 		isBoolean(false) // returns true
//
// ************************************************************************************************
function isBoolean(value) {
	if (isNull(value))
		return false;

	return (['true', 'false', '1', '0'].indexOf(value.toLowerCase().toString()) >= 0);
}

// ************************************************************************************************
//
// isFunction
//
// Check if the value is Function or not
//
// Examples:
// function test() {return true;}
// function test2() {};
// var arr = ['Item1', 'Item2', 'Item3'];
// var obj = {};
//  	isFunction(test) // returns true
//  	isFunction(test2) // returns true
//  	isFunction(arr) // returns false
//  	isFunction(obj) // returns false
//  	isFunction(null) // returns false
//
// ************************************************************************************************
function isFunction(value) {
	return (Object.prototype.toString.call(value) === '[object Function]');
}

// ************************************************************************************************
//
// isTrue
//
// Check if the value is Boolean(true) or not
//
// Examples:
// 		isTrue(true) // returns true
//      isTrue(false) // returns false
//      isTrue(new Boolean(true)) // returns false
//
// ************************************************************************************************
function isTrue (value) {
	return (value === true);
}

// ************************************************************************************************
//
// isFalse
//
// Check if the value is Boolean(false) or not
//
// Examples:
// 		isFalse(true) // returns false
//      isFalse(false) // returns true
//      isFalse(new Boolean(false)) // returns false
//
// ************************************************************************************************
function isFalse(value) {
	return (value === false);
}

// ************************************************************************************************
//
// isLowerCase
//
// Check if the string is a lowercase string
//
// Examples :
// 		isLowerCase(null) // returns false
// 		isLowerCase() // returns true
// 		isLowerCase(true) // returns false
// 		isLowerCase('gaurav') // returns true
//
// ************************************************************************************************
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
// Examples :
// 		isUpperCase(null) // returns false
// 		isUpperCase() // returns true
// 		isUpperCase(false) // returns false
// 		isUpperCase('GAURAV') // returns true
//
// ************************************************************************************************
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
// Examples :
// 		isTitleCase('') // returns true
// 		isTitleCase('Gaurav') // returns true
// 		isTitleCase('Gaurav Luthra') // returns true
// 		isTitleCase('hello World') // returns false
// 		isTitleCase('HATs Off To YOU') // returns true
//
// ************************************************************************************************
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
// Examples:
// 		isNumeric('7') // returns true
// 		isNumeric('17.87') // returns true
// 		isNumeric('\t\t') // returns false
// 		isNumeric(-Infinity) // returns true
// 		isNumeric(false) // returns false
//
// ************************************************************************************************
function isNumeric (value) {
	return (!isNaN(parseFloat(value)));
}

// ************************************************************************************************
//
// isJSON
//
// Check if the string/object is valid JSON
//
// Examples:
//	var a = {a : 'a', b : 'b', c : 'c', d : 'd'};
//  var b = {a : 'a', b : 'b', c : { x : 'x', y : 'y', z : { key1 : 'value1', key2 : 'value2'}}};
//	var c = {a : 'a', b : 'b', c : { x : 'x', y : 'y', z : { key1 : 'value1', key2 : 'value2', }}};  // Extra comma
//
//     isJSON(null); // returns false
//     isJSON('/abc/'); // returns false
//     isJSON({}); // returns true
//     isJSON(new Object()); // returns true
//     isJSON(a); // returns true
//     isJSON(b); // returns true
//     isJSON(c); // returns true
//     isJSON("{\"a\" : \"5\"}"); // returns true
//     isJSON("\n{\"a\" : \"5\"}\n"); // returns true
//
// ************************************************************************************************
function isJSON(value) {
	var retVal = false;
	try {
		if (isString(value))
			return ((typeof JSON.parse(value)) === 'object');
		else if(typeof value === 'object' && value !== null && isNaN(value))
			return ((typeof JSON.parse(JSON.stringify(value))) === 'object');
	} catch(e) {}

	return retVal;
}

// ************************************************************************************************
//
// isBase64
//
// Check if the string is base64 encoded
//
// Examples:
// 		isBase64('Z2F1cmF2') // returns false
// 		isBase64('e1wiYVwiIDoge1wiYlwiIDoge1wiY1wiIDogdHJ1ZX19LCBcImRcIiA6IHtcImVcIiA6IHtcImZcIiA6IHRydWV9fX0=') // returns true
// 		isBase64('gaurav') // returns false
// 		isBase64('Zm9vYg==') // returns true
//
// ************************************************************************************************
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
// Examples :
//		isAlpha('') //returns false
//		isAlpha()  // returns false
//      isAlpha('asd')  // returns true
//      isAlpha('123')  // returns false
//      isAlpha('bkjkjkjk') // returns true
//      isAlpha('k nk') // returns false
//
// ************************************************************************************************
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
// Examples :
// 		isAlphanumeric('abc') // returns true
// 		isAlphanumeric('abc123۞') // returns false
// 		isAlphanumeric(new Object()) // returns false
// 		isAlphanumeric('134766678') // returns true
// 		isAlphanumeric() // returns false
// 		isAlphanumeric(null) // returns false
// 		isAlphanumeric('12345abc') // returns true
// 		isAlphanumeric(2345abc) // returns false
//
// ************************************************************************************************
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
// Examples :
// 		isHexadecimal('1f') // returns true
// 		isHexadecimal('0x1f') // returns false
// 		isHexadecimal('1F') // returns true
// 		isHexadecimal('0x1F') // returns false
//      isHexadecimal('asdfg') // returns false
//		isHexadecimal('efa0123') // returns true
//
// ************************************************************************************************
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
// Examples :
// 		isAscii(' ') // returns false
// 		isAscii(' ') // returns true
// 		isAscii(null) // returns false
// 		isAscii(undefined) // returns false
// 		isAscii('{}') // returns true
//		isAscii('gaurav+luthra') // returns true
//		isAscii('gaurav%luthra') // returns true
// 		isAscii('ᴁ') // returns false
//		isAscii('ᴁᴪᴙݝۺ') // returns false
//
// ************************************************************************************************
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
// Examples :
// 		isNull() // returns true
// 		isNull(undefined) // returns true
// 		isNull(null) // returns true
// 		isNull(0/0) // returns true
// 		isNull(false) // returns false
// 		isNull(new Object()) // returns true
//
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// ************************************************************************************************
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
// Safely search into a object and returns true if specified key is present. 
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
// ************************************************************************************************
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
// ************************************************************************************************
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


// ************************************************************************************************
//
// hasAnyMethod
//
// Check if the object has any method present inside it
//
// Argument(s):
// obj : Object which needs to be checked ffor method presence
//
// Examples:
// 	   var o = { qwe : { asd : { zxc : 123 } } };
// 	   var m = { qwe : 123, dummy : function() {console.log('Hello')} };
//     hasAnyMethod(o); // returns false
//     hasAnyMethod(null); // returns false
//     hasAnyMethod(m); // returns true
//     hasAnyMethod(new Array()); // returns false
//
// ************************************************************************************************
function hasAnyMethod(obj) {
	
	if (isStrictObject(obj)) {
		var names = Object.getOwnPropertyNames(obj);

		for (var i = names.length - 1; i >= 0; i--) {
			if (typeof obj[names[i]] === 'function')
				return true;
		};
	}
	return false;
}

// ************************************************************************************************
//
// isMethodPresent
//
// Check if the object has the specified method present inside it
//
// Argument(s):
// obj : Object which needs to be checked ffor method presence
// methodName : Name of the method to look for
//
// Examples:
// 	   var o = { qwe : { asd : { zxc : 123 } } };
// 	   var m = { qwe : 123, dummy : function() {console.log('Hello')} };
//     isMethodPresent(o); // returns false
//     isMethodPresent(null); // returns false
//     isMethodPresent(m); // returns false
//     isMethodPresent(m, 'dummy'); // returns true
//
// ************************************************************************************************
function isMethodPresent(obj, methodName) {

	if (!hasAnyMethod(obj) || isEmpty(methodName))
		return false;

	var names = Object.getOwnPropertyNames(obj);

	for (var i = names.length - 1; i >= 0; i--) {

		if ((typeof obj[names[i]] === 'function') &&
			names[i] == methodName)
			return true;
	};

	return false;
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
	isNull				 : isNull,
	hasAnyMethod		 : hasAnyMethod,
	isMethodPresent		 : isMethodPresent
};