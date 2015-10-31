/**
*
* Define methods for common
* operations on string variables
*
**/

var base64 = /^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/i;

// Check if the value is string or not
function isString (value) {
	return (Object.prototype.toString.call(value) === '[object String]');
}

// Check if the string is a lowercase string
function isLowerCase (value) {
	if (isString(value))
		return value === value.toLowerCase();
	else
		return false;
}

// Check if the string is a uppercase string
function isUpperCase (value) {
	if (isString(value))
		return value === value.toUpperCase();
	else
		return false;
}

// Check is the string is title case 
// i.e. first letter of each word in the string is capital case
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

// Check if the string is a number
function isNumber (value) {
	return (!isNaN(parseFloat(value)));
}

// Check if the string is valid JSON
function isJSON(value) {
	var retVal = false;
	try {
		if (isString(value))
			return ((typeof JSON.parse(value)) === 'object');
	} catch(e) {}

	return retVal;
}

// Check if the string is base64 encoded
function isBase64(value) {
	if (isString(value))
		return base64.test(value);

	return false;
}

// Check if the string is empty
function isEmpty (value) {
	return (value == null || value.length == 0);
}

// Check if the string contains only whitespaces
function isWhiteSpace (value) {
	return (isString(value) && value.trim().length == 0);
}

// Check if the string is blank
function isBlank (value) {
	return (isEmpty(value) || isWhiteSpace(value));
}

exports = module.exports = {
	isString     : isString,
	isLowerCase  : isLowerCase,
	isUpperCase  : isUpperCase,
	isTitleCase  : isTitleCase,
	isNumber     : isNumber,
	isJSON       : isJSON,
	isBase64     : isBase64,
	isEmpty      : isEmpty,
	isBlank      : isBlank,
	isWhiteSpace : isWhiteSpace 
};