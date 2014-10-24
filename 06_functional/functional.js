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
	for(var key in array ){
		if(array.hasOwnProperty(key)){
			if(array[key] === identifier){
				return true;
			}
		}
	}

	return false;
	// for (var i=0; i < array.length; i++) {
	// 	if (array[i] !== identifier) {
	// 		return false;
	// 	}	
	// }
	// 	return true;
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
	for (var i = 0; i < array.length; i++) {	
		if(!func(array[i])){
			return false;
		}

	}

	return true;


			// if (array == undefined) {
			// 	return true
			// }
			// else if (func(array[i]) == false) {
			// 	return  false;
			// }
			// else {
			// 	return true
			// }	
		
};

function any(array, func) {
	for (var i = 0; i < array.length; i++) {
		if (!func(array[i])) {
			return true;
		}
		else if (array[i] === "true") {
			return true;
		}
		/*else  {
			
		}*/
	}
	return false;
}

var once = function(inputFunc) {
  var ifCalledAlready = false;
  return function() {
    if (!ifCalledAlready) {
      inputFunc();
      ifCalledAlready = true;
    }
  };
};


var wrapper = function(codeBlockFunction, blockWrapFunc) {
  return function() {
    return blockWrapFunc(codeBlockFunction);
  }
};



















