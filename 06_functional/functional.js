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
	}
		return false;
};

function countWordsInReduce(array, start) {
	return countWords(array) + start;
}

function reduce(array, start ,reducer) {
var total = start
forEach(array, function(element) {
	total = reducer(element, total);
})
return total;
};

function reduce1(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

function sum(integers) {
	return reduce(integers, 0, function(a, b) {
    return a + b;
	})
};

function every(array, func) {
	var value = true;
	for (var i = 0; i < array.length; i++) {
		
			if (func(array[i]) == false) {
				value = false;
			}	
	}
	return value
};





function once(inputfunc) {
	

	var number = 0
	return function() {
		inputfunc

	}
}



















