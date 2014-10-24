	var f2c = function(temp) {
		return (temp-32) * (5.0/9.0);
	}; 
		var c2f = function(temp) {
		return temp * (9/5) + 32;
	};



function Temperature(temp) {
	this.fahrenheit = function() {
		//return c2f(temp);
		return temp
	}
	this.celcius = function() {
		return f2c(temp);    
	}
	this.setFahrenheit = function(f) {
		temp = f;
	}
	this.setCelcius = function(c) {
		temp = c * (9.0/5.0) + 32;
	}
}