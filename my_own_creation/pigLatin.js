var translate = function (statment) {
	var phrase = []
	var vowels = ['a', 'e', 'i', 'o', 'u', 'y']
	var constants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ]
	var words = statment.split(" ")

	for(var i =0; i<words.length; i++ ) {
		letters = words.split("")
		var firstLetters = []
		var secondLetters = []
		var tempConstant
		if (letters[0] == vowels) {
			letters.push(firstLetters)
		}
		else if (letters[0] == constants) {
			letters.push(secondLetters);
			secondLetters.shift(tempConstant);
			tempConstant.push(secondLetters);
		}		
		var firstVowel = firstLetters.join + "ay"
		var secondConstant = secondLetters.join + "ay"
	}

	
	
}