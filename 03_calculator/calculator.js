function Calculator() {
	this.sum = 0;
	
	this.value = function(){
		return this.sum;
	}
	this.add = function(number){
		return this.sum += number;
	}
	this.subtract = function(number){
		return this.sum -= number;
	}
}

