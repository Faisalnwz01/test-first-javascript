function people(name, age) {
this.name = name
this.age = age;
this.yearUntilRetire = yearsLeft;
}

function yearsLeft() {
var numYears = 65 - this.age;
return numYears
}