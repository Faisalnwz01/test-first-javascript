var translate = function(statement) {
    var phrase = " ";
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var constants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var user_word = statement.split(" ");

    for (var i = 0, length = user_word.length; i < length; i++) {
        if (user_word.length > 0 && user_word.match(vowels || constants)) {
            var first = user_word.slice(0, 1);
            var last = user_word.slice(0, 2);

            if (first == vowels) {
                var vowelWord = user_word + "ay"
                return vowelWord.join(phrase); //having problem with bringing 
                //the statment back together with joing phrase.
            } else {
                var constantWord = last + first + "ay"

                return constantWord.join(phrase)
            };
        } else {
            return console.log("please enter a valid word");
        };

    }

    return phrase;
}