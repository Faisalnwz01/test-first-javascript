function Mammal (name) {
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function() {
	return "My name is " + this.name + ", I'm a Mammal";
};

Mammal.prototype.haveBaby = function() {
	this.offspring.push(new Mammal("Baby " + this.name))
	return this.offspring[0]
};





function Cat (name, color) {
	this.color = color;
	Mammal.call(this, name)
	this.offspring = [];
	
}

/* temp non finished code fro dealing with haveBaby test Spec

Cat.prototype = new Mammal();
Cat.prototype.haveBaby = function(color) {
	this.offspring.push(new Cat(color));
	return this.offspring[0];
};
*/

Cat.prototype.constructor = Cat;
Cat.prototype.haveBaby = function(color) {
	var babyCat = Mammal.prototype.haveBaby.call(this);
	babyCat.color = color;
	return babyCat;
};

