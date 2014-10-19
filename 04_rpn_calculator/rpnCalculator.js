// [2,3]
// 3
// 2
// 3+2 = 5
// push
// [5];

function Calculator() {
	var rpn = [];
	var total = 0;
	this.value = function() {
		return total;
	}
	
	this.push = function(number){	
			 rpn.push(number); 
	}								

	this.plus = function(number){
		if (rpn.length < 2) {
			throw "error the Calculator is empthy"
		} 
		else {
			total = rpn[rpn.length-2] + rpn[rpn.length-1];
			rpn.pop();
			rpn.pop();
			rpn.push(total);
			return total;
		} 
	}
	
	this.minus = function(number){
		if (rpn.length < 2) {
			throw "error the Calculator is empthy"	
		} 
		else {
			total = rpn[rpn.length-2] - rpn[rpn.length-1];
			rpn.pop();
			rpn.pop();
			rpn.push(total);
			return total;
		} 
	}

	this.multiply = function(number) {
		if (rpn.length < 2) {
			throw "error the Calculator is empthy"
		} 
		else {
			total = rpn[rpn.length-2] * rpn[rpn.length-1];
			rpn.pop();
			rpn.pop();
			rpn.push(total);
			return total;
		} 
	}
	
	this.divide = function(number) {
		if (rpn.length < 2) {
			throw "error the Calculator is empthy"
		} 
		else {
			total = rpn[rpn.length-2] / rpn[rpn.length-1];
			rpn.pop();
			rpn.pop();
			rpn.push(total);
			return total;
		} 
	}
}