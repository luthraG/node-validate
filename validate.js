
var          alpha  = /^[A-Z]+$/i,
      alphanumeric  = /^[0-9A-Z]+$/i,
             ascii  = /^[\x00-\x7F]+$/,
            base64  = /^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/i,
           dataURI  = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i,
             email  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
         fullWidth  = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
         halfWidth  = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
         hexaColor  = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
       hexadecimal  = /^[0-9A-F]+$/i,
           iso8601  = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
          latitude  = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/,
         longitude  = /^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/,
          japanese  = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
       macAddress1  = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
       macAddress2  = /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/,
               md5  = /^[A-Fa-f0-9]{32}$/,
         multiByte  = /[^\x00-\x7F]/,
    printableASCII  = /^[\x20-\x7E]+$/,
          rgbColor  = /^rgb\(\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*\)$/,
            semver  = /^v?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/,
          unixPath  = /^((?:\/[a-zA-Z0-9\.\:]+(?:_[a-zA-Z0-9\:\.]+)*(?:\-[\:a-zA-Z0-9\.]+)*)+\/?)$/,
           winPath  = /^[a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/;

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
//      isStrictBoolean(new Boolean(true)) // returns true
//      isStrictBoolean(new Boolean(false)) // returns true
//      isStrictBoolean(true) // returns true
//      isStrictBoolean(false) // returns true
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
//      isBoolean() // returns false
//      isBoolean(new Boolean(false)) // returns true
//      isBoolean(true) // returns true
//      isBoolean('1') // returns true
//      isBoolean(false) // returns true
//
// ************************************************************************************************
function isBoolean(value) {
    if (isNull(value))
        return false;

    return (['true', 'false', '1', '0'].indexOf(isString(value) ? value.toLowerCase().toString() : value.toString()) >= 0);
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
//      isFunction(test) // returns true
//      isFunction(test2) // returns true
//      isFunction(arr) // returns false
//      isFunction(obj) // returns false
//      isFunction(null) // returns false
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
//      isTrue(true) // returns true
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
//      isFalse(true) // returns false
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
//      isLowerCase(null) // returns false
//      isLowerCase() // returns true
//      isLowerCase(true) // returns false
//      isLowerCase('gaurav') // returns true
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
//      isUpperCase(null) // returns false
//      isUpperCase() // returns true
//      isUpperCase(false) // returns false
//      isUpperCase('GAURAV') // returns true
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
//      isTitleCase('') // returns true
//      isTitleCase('Gaurav') // returns true
//      isTitleCase('Gaurav Luthra') // returns true
//      isTitleCase('hello World') // returns false
//      isTitleCase('HATs Off To YOU') // returns true
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
//      isNumeric('7') // returns true
//      isNumeric('17.87') // returns true
//      isNumeric('\t\t') // returns false
//      isNumeric(-Infinity) // returns true
//      isNumeric(false) // returns false
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
//  var a = {a : 'a', b : 'b', c : 'c', d : 'd'};
//  var b = {a : 'a', b : 'b', c : { x : 'x', y : 'y', z : { key1 : 'value1', key2 : 'value2'}}};
//  var c = {a : 'a', b : 'b', c : { x : 'x', y : 'y', z : { key1 : 'value1', key2 : 'value2', }}};  // Extra comma
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
//      isBase64('Z2F1cmF2') // returns false
//      isBase64('e1wiYVwiIDoge1wiYlwiIDoge1wiY1wiIDogdHJ1ZX19LCBcImRcIiA6IHtcImVcIiA6IHtcImZcIiA6IHRydWV9fX0=') // returns true
//      isBase64('gaurav') // returns false
//      isBase64('Zm9vYg==') // returns true
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
//      isAlpha('') //returns false
//      isAlpha()  // returns false
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
//      isAlphanumeric('abc') // returns true
//      isAlphanumeric('abc123۞') // returns false
//      isAlphanumeric(new Object()) // returns false
//      isAlphanumeric('134766678') // returns true
//      isAlphanumeric() // returns false
//      isAlphanumeric(null) // returns false
//      isAlphanumeric('12345abc') // returns true
//      isAlphanumeric(2345abc) // returns false
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
//      isHexadecimal('1f') // returns true
//      isHexadecimal('0x1f') // returns false
//      isHexadecimal('1F') // returns true
//      isHexadecimal('0x1F') // returns false
//      isHexadecimal('asdfg') // returns false
//      isHexadecimal('efa0123') // returns true
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
//      isAscii(' ') // returns false
//      isAscii(null) // returns false
//      isAscii(undefined) // returns false
//      isAscii('{}') // returns true
//      isAscii('gaurav+luthra') // returns true
//      isAscii('gaurav%luthra') // returns true
//      isAscii('ᴁ') // returns false
//      isAscii('ᴁᴪᴙݝۺ') // returns false
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
//      isNull() // returns true
//      isNull(undefined) // returns true
//      isNull(null) // returns true
//      isNull(0/0) // returns true
//      isNull(false) // returns false
//      isNull(new Object()) // returns true
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
    if (!isString(str) || (isString(str) && str.length === 0) )
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

    var domainParts = emailParts[1].split(".");

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
// Check if a multi word string is URI encoded
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

    if (decoded === str)
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
//     var baseStr = 'This is me and that is you';
//     var searchStr = 'this';
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
//     var baseStr = 'This is this and that is that';
//     var searchStr = 'this';
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
//     var o = { qwe : { asd : { zxc : 123 } } };
//     var m = { qwe : { asd : { zxc : 123 } } };
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

    if (x instanceof Function)
      return x === y;

    if (x instanceof RegExp)
        return x === y;

     if ((x instanceof String && y instanceof String) ||
       (x instanceof Number && y instanceof Number)) {
        return x.toString() === y.toString();
    }
    
    if (x === y || x.valueOf() === y.valueOf()) 
        return true;

    if (Array.isArray(x) && Array.isArray(y) && x.length !== y.length) 
        return false;

    if (x instanceof Date)
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
// obj : Object which needs to be checked for method presence
//
// Examples:
//     var o = { qwe : { asd : { zxc : 123 } } };
//     var m = { qwe : 123, dummy : function() {console.log('Hello')} };
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
//     var o = { qwe : { asd : { zxc : 123 } } };
//     var m = { qwe : 123, dummy : function() {console.log('Hello')} };
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

// ************************************************************************************************
//
// startsWith
//
// Check if a string/number/array starts with another string/number/array at specified position. Returns boolean true or false
//
//
// Examples:
//     startsWith('Blue Whale, Killer Whale', 'Blue');          // returns true
//     startsWith('Blue Whale, Killer Whale', 'Blue', 10);      // returns false
//     startsWith('Brave new world', 'world');                  // returns false
//     startsWith('Brave new world', 'world', 10);              // returns true
//     startsWith('123456', '234', 1);                          // returns true
//     startsWith([1, 2, 3, 4], [2, 3, 4], 1);                  // returns true
//     startsWith([1, 2, 3, 4], [1, 2, 3, 4]);                  // returns true
//     startsWith([1, 2, 3, 4], '1', true);                     // returns false
//     startsWith([1, 2, 3, 4], '1', false);                    // returns true
//
// ************************************************************************************************
function startsWith (base, starts, position, strict) {
    if (base == null)    base = '';
    if (starts == null)  starts = '';
    if (isStrictBoolean(position)) {
        strict   = position;
        position = null;
    }

    // Check if base is array
    if (isArray(base)) {
        // If starts is not an array then convert it to an array
        starts = isArray(starts) ? starts : (strict ? [ starts ] : [ '' + starts ]);
    } else if (isArray(starts)) {
        // If base is not array then convert it to an array
        base = isArray(base) ? base : (strict ? [ base ] : [ '' + base ]);
    } else {
        base   = '' + base;
        starts = '' + starts;
    }

    // position should be not null, should be a positive number which is lesser than length of string/number/array
    position = (position !== null && isNumber(position) && (position > 0) && (position <= base.length) ) ? position : 0;

    if (isArray(base)) {
        base = (base.length >= starts.length) ? (base.slice(position, (starts.length + position)) || []) : [];

        if (base.length !== starts.length)
            return false;
        for (var i = base.length; i--;) {
            if ((strict && (base[i] !== starts[i])) || (!strict && (base[i] + '' !== starts[i] + '')))
                return false;
        }

        return true;
    } else {
        return (base.lastIndexOf(starts, position) === position);
    }
}

// ************************************************************************************************
//
// endsWith
//
// Check if a string/number/array ends with specified string/number/array at specified position. Returns boolean true or false
//
//
// Examples:
//     endsWith('Blue Whale, Killer Whale', 'Whale');                   // returns true
//     endsWith('Blue Whale, Killer Whale', 'Killer Whale', 10);        // returns false
//     endsWith('Blue Whale, Killer Whale', 'Killer Whale', 12);        // returns true
//     endsWith('Brave new world', 'world');                            // returns true
//     endsWith('Brave new world', 'world', 11);                        // returns false
//     endsWith('123456', '23456', 1);                                  // returns true
//     endsWith('123456', '2345', 1);                                   // returns false
//     endsWith(123456, 23456);                                         // returns true
//     endsWith([1, 2, 3, 4], [2, 3, 4]);                               // returns true
//
//
// ************************************************************************************************
function endsWith (base, ends, position, strict) {
    if (base == null) base = '';
    if (ends == null) ends = '';
    if (isStrictBoolean(position)) {
        strict   = position;
        position = null;
    }

    // Check if base is array
    if (isArray(base)) {
        // If ends is not an array then convert it to an array
        ends = isArray(ends) ? ends : (strict ? [ ends ] : [ '' + ends ]);
    } else if (isArray(ends)) {
        // If base is not array then convert it to an array
        base = isArray(base) ? base : (strict ? [ base ] : [ '' + base ]);
    } else {
        base = '' + base;
        ends = '' + ends;
    }

    if (isNull(position) || (position >= base.length) || (position < 0))
        position = (base.length > ends.length) ? (base.length - ends.length) : 0;
    else
        position = position;

    if (isArray(base)) {
        base = base.slice(position) || [];

        if (base.length !== ends.length)
            return false;
        for (var i = base.length; i--;) {
            if ((strict && (base[i] !== ends[i])) || (!strict && (base[i] + '' !== ends[i] + '')))
                return false;
        }

        return true;
    } else {
        return (base.indexOf(ends, position) === position);
    }
}

// ************************************************************************************************
//
// isMD5
//
// Check if value is MD5 hash
//
// Argument(s):
// str : It takes a strings which needs to be checked for md5 hash value
//
// Examples:
//     isMD5('');                                   // returns false
//     isMD5(null);                                 // returns false
//     isMD5('e4d909c290d0fb1ca068ffaddf22cbd0');   // returns true
//     isMD5('9e107d9d372bb6826bd81d3542a419d6');   // returns true
//     isMD5('hello world');                        // returns false
//
// ************************************************************************************************
function isMD5(hash) {
    if (!isString(hash))
        return false;
    else
        return md5.test(hash);
}

// ************************************************************************************************
//
// isMACAddress
//
// Check if value is a valid MAC Address 
//
// Argument(s):
// str : It takes a strings which needs to be checked for MAC address
//
// Examples:
//     isMACAddress('');                                   // returns false
//     isMACAddress(null);                                 // returns false
//     isMACAddress('e4d909c290d0fb1ca068ffaddf22cbd0');   // returns true
//     isMACAddress('9e107d9d372bb6826bd81d3542a419d6');   // returns true
//     isMACAddress('hello world');                        // returns false
//
// ************************************************************************************************
function isMACAddress(str) {
    if (!isString(str))
        return false;
    else
        return macAddress1.test(str) || macAddress2.test(str);
}

// ************************************************************************************************
//
// isHexaColor
//
// Check if value is a valid hexadecimal color value
//
// Argument(s):
// str : It takes a strings which needs to be checked for hexa decimal color value
//
// Examples:
//     isHexaColor('');                 // returns false
//     isHexaColor(null);               // returns false
//     isHexaColor('#ffe4e1');          // returns true
//     isHexaColor('#ff4545');          // returns true
//     isHexaColor('#800080');          // returns true
//     isHexaColor('800080');           // returns true
//     isHexaColor('#8K0K8K');          // returns false
//     isHexaColor('#helloworld');      // returns false
//
// ************************************************************************************************
function isHexaColor(str) {
    if (!isString(str))
        return false;
    else
        return hexaColor.test(str);
}

// ************************************************************************************************
//
// isSet
//
// Check if value is a set or not
//
// Argument(s):
// obj : It takes an object as argument that needs to be checked if it is set or not 
//
// Examples:
//     isSet('');                 // returns false
//     isSet(null);               // returns false
//     isSet(new Set());          // returns true
//     isSet(new WeakSet);        // returns false
//     isSet(new Set[1, 2, 3]);   // returns true
//
// ************************************************************************************************
function isSet(obj) {
   return (Object.prototype.toString.call(obj) === '[object Set]');
}

// ************************************************************************************************
//
// isWeakSet
//
// Check if value is a weak set or not
//
// Argument(s):
// obj : It takes an object as argument that needs to be checked if it is set or not 
//
// Examples:
//     isWeakSet('');               // returns false
//     isWeakSet(null);             // returns false
//     isWeakSet(new WeakSet());    // returns true
//     isWeakSet(new Set);          // returns false
//     isWeakSet(new WeakSet[{}]);  // returns true
//
// ************************************************************************************************
function isWeakSet(obj) {
   return (Object.prototype.toString.call(obj) === '[object WeakSet]');
}

// ************************************************************************************************
//
// isUndefined
//
// Check if value is a undefined or not
//
// Argument(s):
// value : Argument that needs to be checked if it is undefined or not
//
// Examples:
//     isUndefined(undefined);          // returns true
//     isUndefined(null);               // returns false
//     isUndefined(void 0);             // returns true
//     isUndefined(new Object);         // returns false
//
// ************************************************************************************************
function isUndefined (value) {
    return (value === undefined);
}

// ************************************************************************************************
//
// isError
//
// Check if value is an error object or not
//
// Argument(s):
// obj : Argument that needs to be checked if it is error object or not
//
// Examples:
//     isError(new Error());                // returns true
//     isError(new RangeError());           // returns true
//     isError(new ReferenceError());       // returns true
//     isError(new TypeError());            // returns true
//
// ************************************************************************************************
function isError (obj) {
    return (isObject(obj) && obj !== null) ?
            ((Object.prototype.toString.call(obj) === '[object Error]') ||
                (Object.prototype.toString.call(obj) === '[object DOMException]') ||
                (isString(obj.message) && isString(obj.name) && (obj.constructor !== {}.constructor))) :
            false;
}

// ************************************************************************************************
//
// isSystemError
//
// Check if value is a system error object or not
//
// Argument(s):
// error : Argument that needs to be checked if it is system error object or not
//
// Examples:
//     var error = new Error();
//     error.code = 'ECONNRESET';
//     isSystemError(new Error());              // returns false
//     isSystemError(error);                    // returns true
//     isSystemError(new ReferenceError());     // returns false
//     isSystemError(new TypeError());          // returns false
//
// ************************************************************************************************
function isSystemError (error) {
    if (!isError(error) || !(error && error.code)) {
        return false;
    } else {
        return SYSTEM_ERROR_CODES[error.code];
    }
}

// ************************************************************************************************
//
// isDate
//
// Check if value is a date object or not
//
// Argument(s):
// value : Argument that needs to be checked if it is date object or not
//
// Examples:
//     isDate(new Date());       // returns true
//     isDate('5/23/2017');      // returns false
//
// ************************************************************************************************
function isDate (value) {
    return (isObject(value) && value !== null && (Object.prototype.toString.call(value) === '[object Date]'));
}

// ************************************************************************************************
//
// isMap
//
// Check if value is a map or not
//
// Argument(s):
// obj : It takes an object as argument that needs to be checked if it is map or not
//
// Examples:
//     isMap('');                 // returns false
//     isMap(null);               // returns false
//     isMap(new Map());          // returns true
//     isMap(new WeakMap);        // returns false
//     isMap(new Map([['key1', 'value1'], ['key2', 'value2']]));   // returns true
//
// ************************************************************************************************
function isMap(obj) {
   return (Object.prototype.toString.call(obj) === '[object Map]');
}

// ************************************************************************************************
//
// isWeakMap
//
// Check if value is a weak map or not
//
// Argument(s):
// obj : It takes an object as argument that needs to be checked if it is map or not
//
// Examples:
//     isWeakMap('');               // returns false
//     isWeakMap(null);             // returns false
//     isWeakMap(new WeakMap());    // returns true
//     isWeakMap(new Map);          // returns false
//
// ************************************************************************************************
function isWeakMap(obj) {
   return (Object.prototype.toString.call(obj) === '[object WeakMap]');
}

// ************************************************************************************************
//
// isHalfWidth
//
// Check if string contains half width characters or not
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it contains half width characters or not
//
// Examples:
//     isHalfWidth('');               // returns false
//     isHalfWidth(null);             // returns false
//     isHalfWidth('ｱﾃﾞﾁｬｴｳｨｵﾌﾟ');    // returns true
//     isHalfWidth('ｱﾃﾞﾁｬｴｳｨ');       // returns true
//
// ************************************************************************************************
function isHalfWidth(str) {
   if (!isString(str))
        return false;
    else
        return halfWidth.test(str);
}

// ************************************************************************************************
//
// isFullWidth
//
// Check if string contains full width characters or not
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it contains full width characters or not
//
// Examples:
//     isFullWidth('');               // returns false
//     isFullWidth(null);             // returns false
//     isFullWidth('ポヲルダマ');     // returns true
//     isFullWidth('ポヲルダ');       // returns true
//
// ************************************************************************************************
function isFullWidth(str) {
   if (!isString(str))
        return false;
    else
        return fullWidth.test(str);
}

// ************************************************************************************************
//
// containsJapanese
//
// Check if string contains japanese characters or not
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it contains japanese characters or not
//
// Examples:
//     containsJapanese('');            // returns false
//     containsJapanese(null);          // returns false
//     containsJapanese('世界');          // returns true
//     containsJapanese('こんにちは');   // returns true
//
// ************************************************************************************************
function containsJapanese(str) {
    if (!isString(str))
        return false;
    else
        return japanese.test(str);
}

// ************************************************************************************************
//
// isPrintableASCII
//
// Check if string contains printable ASCII characters or not
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it contains printable ASCII characters or not
//
// Examples:
//     isPrintableASCII('');            // returns false
//     isPrintableASCII(null);          // returns false
//     isPrintableASCII('世界');          // returns false
//     isPrintableASCII('Helloworld');   // returns true
//     isPrintableASCII('\n\t\t');      // returns false
//
// ************************************************************************************************
function isPrintableASCII(str) {
    if (!isString(str))
        return false;
    else
        return printableASCII.test(str);
}

// ************************************************************************************************
//
// isVariableWidth
//
// Check if string is both full width and half width characters
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it is both half width and full width characters
//
// Examples:
//     isVariableWidth('ギヰヺタヰｬｴｳ');        // returns true
//     isVariableWidth('ポヲルダマ');          // returns false
//     isVariableWidth('ｱﾃﾞﾁｬｴｳｨｵﾌﾟ');          // returns false
//
// ************************************************************************************************
function isVariableWidth(str) {
    return (isHalfWidth(str) && isFullWidth(str));
}

// ************************************************************************************************
//
// isPort
//
// Check if string is a valid port number
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it is a valid port number
//
// Examples:
//     isPort('0');        // returns false
//     isPort('8000');     // returns true
//     isPort('-421');     // returns false
//
// ************************************************************************************************
function isPort(str) {
    var i = filterInt(str);
    if (isNaN(i))
        return false;
    else
        return i > 0 && i < 65536;
}

// ************************************************************************************************
//
// isSemver
//
// Check if string is a valid semantic version
// Check http://semver.org/ for more details
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it follows valid semantic versioning
//
// Examples:
//     isSemver('v1.0.0');              // returns true
//     isSemver('1.0.0-alpha.1');       // returns true
//     isSemver('alpha.beta.gamma');    // returns false
//
// ************************************************************************************************
function isSemver(str) {
    if (!isString(str))
        return false;
    else
        return semver.test(str);
}

// ************************************************************************************************
//
// isLatitude
//
// Check if string is a valid latitude value
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it is a valid latitude
//
// Examples:
//     isLatitude('+90');               // returns true
//     isLatitude('+40.58517');         // returns true
//     isLatitude('alpha.beta.gamma');  // returns false
//
// ************************************************************************************************
function isLatitude(str) {
    if (!isString(str))
        return false;
    else
        return latitude.test(str);
}

// ************************************************************************************************
//
// isLongitude
//
// Check if string is a valid longitude value
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it is a valid longitude
//
// Examples:
//     isLongitude('+90');               // returns true
//     isLongitude('+40.58517');         // returns true
//     isLongitude('alpha.beta.gamma');  // returns false
//
// ************************************************************************************************
function isLongitude(str) {
    if (!isString(str))
        return false;
    else
        return longitude.test(str);
}

// ************************************************************************************************
//
// isWinFilePath
//
// Check if string is a valid windows path
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it is a valid windows path
//
// Examples:
//     isWinFilePath('C:\\BatmanSharedDevice\\');       // returns true
//     isWinFilePath('C:\BatmanSharedDevice');          // returns false
//     isWinFilePath('/mnt/data/tmp');                  // returns false
//
// ************************************************************************************************
function isWinFilePath(str) {
    if (!isString(str))
        return false;
    else
        return winPath.test(str);
}

// ************************************************************************************************
//
// isUnixFilePath
//
// Check if string is a valid unix path
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it is a valid unix path
//
// Examples:
//     isUnixFilePath('C:\\BatmanSharedDevice\\');       // returns false
//     isUnixFilePath('C:\BatmanSharedDevice');          // returns false
//     isUnixFilePath('/mnt/data/tmp');                  // returns true
//
// ************************************************************************************************
function isUnixFilePath(str) {
    if (!isString(str))
        return false;
    else
        return unixPath.test(str);
}

// ************************************************************************************************
//
// isFilePath
//
// Check if string is a valid path(windows path or unix path)
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it is a valid path(windows path or unix path)
//
// Examples:
//     isFilePath('C:\\BatmanSharedDevice\\');       // returns true
//     isFilePath('C:\BatmanSharedDevice');          // returns false
//     isFilePath('/mnt/data/tmp');                  // returns true
//
// ************************************************************************************************
function isFilePath(str) {
    if (!isString(str))
        return false;
    else
        return winPath.test(str) || unixPath.test(str);
}

// ************************************************************************************************
//
// isMultiByte
//
// Check if string contains one or more multibyte characters
//
// Argument(s):
// str : It takes an string as argument that needs to be checked if it contains one or more multibyte chars.
//
// Examples:
//     isMultiByte('節點');               // returns true
//     isMultiByte('helloworld');        // returns false
//     isMultiByte('こんにちは');         // returns true
//
// ************************************************************************************************
function isMultiByte(str) {
    if (!isString(str))
        return false;
    else
        return multiByte.test(str);
}

// ************************************************************************************************
//
// isInRange
//
// Check if string lies between two values i.e. left and right
//
// Argument(s):
// value, left, right : It takes three arguments i.e.
// value - number that needs to be checked to be within range
// left - lower bound of range
// right - upper bound of range
//
// Examples:
//     isInRange('100', '10', '200');         // returns true
//     isInRange('90.1', '-21', '22');        // returns false
//     isInRange('Helloworld10', '10', '20'); // returns false
//
// ************************************************************************************************
function isInRange(value, left, right) {
    value = filterFloat(value);
    left  = filterFloat(left);
    right = filterFloat(right);

    // if any of the value is NAN then return false
    if (isNaN(value) || isNaN(left) || isNaN(right))
        return false;
    else
        return (value >= left && value <= right);
}

// ************************************************************************************************
//
// isPositive
//
// Check if value being passed is positive value
//
// Argument(s):
// value : Value that needs to be checked if it is positive
//
// Examples:
//     isPositive('100.21');         // returns true
//     isPositive('90.1');          // returns true
//     isPositive('-90.1');         // returns false
//     isPositive('Helloworld10');  // returns false
//
// ************************************************************************************************
function isPositive(value) {
    value = filterFloat(value);

    // if value is NAN then return false
    if (isNaN(value))
        return false;
    else
        return (value > 0);
}

// ************************************************************************************************
//
// isNegative
//
// Check if value being passed is negative value
//
// Argument(s):
// value : Value that needs to be checked if it is negative
//
// Examples:
//     isNegative('100.21');         // returns false
//     isNegative('90.1');          // returns false
//     isNegative('-90.1');         // returns true
//     isNegative('Helloworld10');  // returns false
//
// ************************************************************************************************
function isNegative(value) {
    value = filterFloat(value);

    // if value is NAN then return false
    if (isNaN(value))
        return false;
    else
        return (value < 0);
}

// ************************************************************************************************
//
// isNonPositive
//
// Check if value being passed is non positive value
//
// Argument(s):
// value : Value that needs to be checked if it is non positive
//
// Examples:
//     isNonPositive('100.21');         // returns false
//     isNonPositive('90.1');          // returns false
//     isNonPositive('-90.1');         // returns true
//     isNonPositive('0');              // returns true
//     isNonPositive('Helloworld10');  // returns false
//
// ************************************************************************************************
function isNonPositive(value) {
    value = filterFloat(value);

    // if value is NAN then return false
    if (isNaN(value))
        return false;
    else
        return (value <= 0);
}

// ************************************************************************************************
//
// isNonNegative
//
// Check if value being passed is non negative value
//
// Argument(s):
// value : Value that needs to be checked if it is non negative
//
// Examples:
//     isNonNegative('100.21');         // returns true
//     isNonNegative('90.1');          // returns true
//     isNonNegative('-90.1');         // returns false
//     isNonNegative('0');              // returns true
//     isNonNegative('Helloworld10');  // returns false
//
// ************************************************************************************************
function isNonNegative(value) {
    value = filterFloat(value);

    // if value is NAN then return false
    if (isNaN(value))
        return false;
    else
        return (value >= 0);
}

// ************************************************************************************************
//
// isDataURI
//
// Check if string is a valid data URI
//
// Argument(s):
// value : Value that needs to be checked if it contains valid data URI
//
// Examples:
//      isDataURI('data:,Hello%2C%20World!');                            // returns true
//      isDataURI('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D');    // returns true
//      isDataURI('');                                                   // returns false
//
// ************************************************************************************************
function isDataURI(value) {
    if (!isString(value))
        return false;
    else
        return dataURI.test(value);
}

// ************************************************************************************************
//
// isISO8601
//
// Check if string is a valid iso8601 value
//
// Argument(s):
// value : Value that needs to be checked if it is a valid iso8601
//
// Examples:
//      isISO8601('2009-12T12:34');         // returns true
//      isISO8601('2010-02-18T16:23,25');   // returns true
//      isISO8601('2009-05-19T14a39r');    // returns false
//
// ************************************************************************************************
function isISO8601(str) {
    if (!isString(str))
        return false;
    else
        return iso8601.test(str);
}

// ************************************************************************************************
//
// isRGBColor
//
// Check if string is a valid RGB color value
//
// Argument(s):
// value : Value that needs to be checked if it is valid RGB color value
//
// Examples:
//      isRGBColor('rbg(255, 255, 255)');           // returns true
//      isRGBColor('rbg(255, 255, 0)');             // returns true
//      isRGBColor('hello rbg(255, 255, 255)');     // returns false
//
// ************************************************************************************************
function isRGBColor(str) {
    if (!isString(str))
        return false;
    else
        return rgbColor.test(str);
}


// ************************************************************************************************
//
// Helper Methods
//
// ************************************************************************************************

//
// Helper method to filter integer value
//
function filterInt(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
    return NaN;
}

//
// Helper method to filter float value
//
var filterFloat = function(value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
      return Number(value);
    return NaN;
}

exports = module.exports = {
    contains             : contains,
    containsDeepKey      : containsDeepKey,
    containsIgnoreCase   : containsIgnoreCase,
    containsJapanese     : containsJapanese,
    containsKey          : containsKey,
    endsWith             : endsWith,
    hasAnyMethod         : hasAnyMethod,
    isAlpha              : isAlpha,
    isAlphanumeric       : isAlphanumeric,
    isArray              : isArray,
    isAscii              : isAscii,
    isBase64             : isBase64,
    isBlank              : isBlank,
    isBoolean            : isBoolean,
    isDataURI            : isDataURI,
    isDate               : isDate,
    isEmpty              : isEmpty,
    isError              : isError,
    isFalse              : isFalse,
    isFilePath           : isFilePath,
    isFullWidth          : isFullWidth,
    isFunction           : isFunction,
    isHalfWidth          : isHalfWidth,
    isHexaColor          : isHexaColor,
    isHexadecimal        : isHexadecimal,
    isInRange            : isInRange,
    isISO8601            : isISO8601,
    isJSON               : isJSON,
    isLatitude           : isLatitude,
    isLongitude          : isLongitude,
    isLowerCase          : isLowerCase,
    isMACAddress         : isMACAddress,
    isMap                : isMap,
    isMD5                : isMD5,
    isMethodPresent      : isMethodPresent,
    isMultiByte          : isMultiByte,
    isNegative           : isNegative,
    isNonNegative        : isNonNegative,
    isNonPositive        : isNonPositive,
    isNull               : isNull,
    isNumber             : isNumber,
    isNumeric            : isNumeric,
    isObject             : isObject,
    isPalindrome         : isPalindrome,
    isPort               : isPort,
    isPositive           : isPositive,
    isPrintableASCII     : isPrintableASCII,
    isRegExp             : isRegExp,
    isRGBColor           : isRGBColor,
    isSemver             : isSemver,
    isSet                : isSet,
    isStrictObject       : isStrictObject,
    isStrictBoolean      : isStrictBoolean,
    isString             : isString,
    isSystemError        : isSystemError,
    isTitleCase          : isTitleCase,
    isTrue               : isTrue,
    isUndefined          : isUndefined,
    isUnixFilePath       : isUnixFilePath,
    isUpperCase          : isUpperCase,
    isURIEncoded         : isURIEncoded,
    isUUID               : isUUID,
    isValidEmail         : isValidEmail,
    isVariableWidth      : isVariableWidth,
    isWeakMap            : isWeakMap,
    isWeakSet            : isWeakSet,
    isWhiteSpace         : isWhiteSpace,
    isWinFilePath        : isWinFilePath,
    objectEquals         : objectEquals,
    startsWith           : startsWith
};

//
// Constant that contains various system error codes
//
var SYSTEM_ERROR_CODES  = {
    'E2BIG'             : true,
    'EACCES'            : true,
    'EADDRINUSE'        : true,
    'EADDRNOTAVAIL'     : true,
    'EAFNOSUPPORT'      : true,
    'EAGAIN'            : true,
    'EALREADY'          : true,
    'EBADE'             : true,
    'EBADF'             : true,
    'EBADFD'            : true,
    'EBADMSG'           : true,
    'EBADR'             : true,
    'EBADRQC'           : true,
    'EBADSLT'           : true,
    'EBUSY'             : true,
    'ECANCELED'         : true,
    'ECHILD'            : true,
    'ECHRNG'            : true,
    'ECOMM'             : true,
    'ECONNABORTED'      : true,
    'ECONNREFUSED'      : true,
    'ECONNRESET'        : true,
    'EDEADLK'           : true,
    'EDEADLOCK'         : true,
    'EDESTADDRREQ'      : true,
    'EDOM'              : true,
    'EDQUOT'            : true,
    'EEXIST'            : true,
    'EFAULT'            : true,
    'EFBIG'             : true,
    'EHOSTDOWN'         : true,
    'EHOSTUNREACH'      : true,
    'EIDRM'             : true,
    'EILSEQ'            : true,
    'EINPROGRESS'       : true,
    'EINTR'             : true,
    'EINVAL'            : true,
    'EIO'               : true,
    'EISCONN'           : true,
    'EISDIR'            : true,
    'EISNAM'            : true,
    'EKEYEXPIRED'       : true,
    'EKEYREJECTED'      : true,
    'EKEYREVOKED'       : true,
    'EL2HLT'            : true,
    'EL2NSYNC'          : true,
    'EL3HLT'            : true,
    'EL3RST'            : true,
    'ELIBACC'           : true,
    'ELIBBAD'           : true,
    'ELIBMAX'           : true,
    'ELIBSCN'           : true,
    'ELIBEXEC'          : true,
    'ELOOP'             : true,
    'EMEDIUMTYPE'       : true,
    'EMFILE'            : true,
    'EMLINK'            : true,
    'EMSGSIZE'          : true,
    'EMULTIHOP'         : true,
    'ENAMETOOLONG'      : true,
    'ENETDOWN'          : true,
    'ENETRESET'         : true,
    'ENETUNREACH'       : true,
    'ENFILE'            : true,
    'ENOBUFS'           : true,
    'ENODATA'           : true,
    'ENODEV'            : true,
    'ENOENT'            : true,
    'ENOEXEC'           : true,
    'ENOKEY'            : true,
    'ENOLCK'            : true,
    'ENOLINK'           : true,
    'ENOMEDIUM'         : true,
    'ENOMEM'            : true,
    'ENOMSG'            : true,
    'ENONET'            : true,
    'ENOPKG'            : true,
    'ENOPROTOOPT'       : true,
    'ENOSPC'            : true,
    'ENOSR'             : true,
    'ENOSTR'            : true,
    'ENOSYS'            : true,
    'ENOTBLK'           : true,
    'ENOTCONN'          : true,
    'ENOTDIR'           : true,
    'ENOTEMPTY'         : true,
    'ENOTSOCK'          : true,
    'ENOTSUP'           : true,
    'ENOTTY'            : true,
    'ENOTUNIQ'          : true,
    'ENXIO'             : true,
    'EOPNOTSUPP'        : true,
    'EOVERFLOW'         : true,
    'EPERM'             : true,
    'EPFNOSUPPORT'      : true,
    'EPIPE'             : true,
    'EPROTO'            : true,
    'EPROTONOSUPPORT'   : true,
    'EPROTOTYPE'        : true,
    'ERANGE'            : true,
    'EREMCHG'           : true,
    'EREMOTE'           : true,
    'EREMOTEIO'         : true,
    'ERESTART'          : true,
    'EROFS'             : true,
    'ESHUTDOWN'         : true,
    'ESPIPE'            : true,
    'ESOCKTNOSUPPORT'   : true,
    'ESRCH'             : true,
    'ESTALE'            : true,
    'ESTRPIPE'          : true,
    'ETIME'             : true,
    'ETIMEDOUT'         : true,
    'ETXTBSY'           : true,
    'EUCLEAN'           : true,
    'EUNATCH'           : true,
    'EUSERS'            : true,
    'EWOULDBLOCK'       : true,
    'EXDEV'             : true,
    'EXFULL'            : true
};