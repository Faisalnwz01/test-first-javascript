// [2,3]
// 3
// 2
// 3+2 = 5
// push
// [5];

function calculator(){
	var rpn = [0];
		
	this.push = function(number){	// only problem with this funciton is
		return rpn.push(number); // only one number can be added to rpn 
	}								// and multiply or divided.

	this.plus = function(number){
		if (number) {
		return rpn + number}
		else 
		{
			console.log("Calculator is empthy");}
	}
	
	this.minus = function(number){
		if (number) {
			return rpn - number;}
		else {
			console.log("Calculator is empthy");}
	}

	this.multiply = function(number) {
		if (number) {
			return rpn * number;}
		else {
			console.log("Calculator is empthy");}
	}
	this.divide = function(number) {
		if (number) {
			return rpn / number;}
		else {
			console.log("Calculator is empthy");}
	}

}