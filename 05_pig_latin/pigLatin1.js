var translate = function (statment) {
	var phrase = [];
	var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
	var constants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ];
	var user_word = statment.split(" ");

	for (var i = 0, length = word.length; i < length; i++) {
		if (user_word.length > 0 && user_word.match(vowels || constants)) {
			var first = user_word.slice(0,1);
			var last  = user_word.slice(1);

			if (first === vowels) {
				vowelword = user_word + "ay"
				return vowelword.join(phrase) //having problem with bringing 
											//the statment back together with joing phrase.
			};
			else {
				constantWord = last + first + "ay"

				return constantWord.join(phrase)
			};
		};
		else {
			return console.log("please enter a valid word");
		};
	}
	return phrase;

}