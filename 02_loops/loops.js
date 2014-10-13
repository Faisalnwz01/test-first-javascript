 
var repeat = function(string, number) {
	var output = "";
	for (var i = 0; i < number; i++) {
		output+= string; 
	}	
	return output;  
};


var join =function(array, delimiter) {
	var output = "";
	for (var i = 0; i < array.length; i++) {
		output += array [i];
		if (delimiter && i < array.length-1){
			output += delimiter;
		}
		return output
	}
};


var sum = function(array) {
	var sumTotal = 0 //to initialize the variables
	for(var i = 0; i < array.length; i++) {
		sumTotal += array[i]
	}
	return sumTotal
};


var paramify = function(hash) {
	var str = '',
	arr = [];

	for (key in hash) {
		if (hash.hasOwnProperty(key)) arr.push([key, hash[key]]);
	}
	arr.sort();

	for (var i = 0, length = arr.length; i < length; i++) {
		str += arr[i][0] + '=' + arr[i][1] + '&';
	}

	return str.substr(0, str.lastIndexOf('&'));
};



//i used the recursion function 
var factorial = function(number){
	if (number == 0 || number == 1){ 
		return 1; }
		else {
			return number * factorial(number - 1);
		}
		return factorial
	};

	var concat_string = function () {
		var output = ' ';
		for (key in argumants){
			output += argumants[key];
		}
		return output;

	};