var countWords = function(phrase) {
	var wordList = phrase.split(" ")
	return wordList.length
};

var makeAdder = function(add) {
	return function(number) {
		return number + add;
	}
};
var forEach = function(array, funct) {
	for (var i = 0; i < array.length; i++){
		funct(array[i]);
	}
};

var map = function(array, func) {
	for (var i=0; i<array.length; i++) {
		array[i] = func(array[i])
	}
	return array;
};


function filter(array, filters) {
	var filtered = [];
	for (var i=0; i<array.length; i++) {
		if (filters(array[i]) === true) {
			filtered.push(array[i])
		}		
	}
	return filtered;
};


var contains = function(array, identifier) {
	for (var i=0; i < array.length; i++) {
		if (array[i] == identifier) {
			return true;
		}
		else {
			return false;
		};
	}
};
