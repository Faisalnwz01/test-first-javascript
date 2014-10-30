$(document).ready(function newGame() {
	var mysteryNumber = function () {
		Math.floor(Math.random() * 101) ;
	};
	var guessedAlready= [];
	var numberOfTurns = 5;
	var user_input = $("#guessButton").on("click",parseInt($("#user_input").val()));
	
	$("#guess_text").html("THE GAME IS ON");
	while (numberOfTurns > 0) {  // want to run this block of code 5 times
		if (!Number(user_input)) {
			alert("please input a valid number");
		}
		else if ((user_input > 100) || (user_input < 1)) {
			$("#guess_text").html("please input number between 1-100");
		}
		else if (user_input == mysteryNumber) {
				$("#guess_text").html("YOU WIN, YOU GUESSED RIGHT, NOW GO AND PLAY LOTO!"); 
				numberOfTurns = 0;
			}
		else if (user_input == guessedAlready[0]) {

				for (var i = 0; i < guessedAlready.length; i ++) {
					if (user_input == guessedAlready[0]) {
 				alert("You already guessed that!");	
 					};
 				};
			}
		else {
				if (user_input < (mysteryNumber + 20) ) {
					$("#guess_text").html("Ice cold, you are miles away, guess lower");
				}
				else if (user_input > (mysteryNumber + 20)) {
					$("#guess_text").html("Ice cold, you are miles away, guess higher!");
				}
				else if ((user_input + 10) == mysteryNumber || (user_input - 10) == mysteryNumber ) {
					$("#guess_text").html("Too hot, the answer is in the vicinity!");
				}
				numberOfTurns -- ;	
		}		
		return guessedAlready += user_input;
	}
	$("#guess_text").html("game over your Five turns have passed");
})


$("#hintButton").on("click",function hint() {
	$("#guess_text").html( "The correct answer is " + mysteryNumber() + "!!!");
})

$("#playAgain").on("click", function playAgain() {
	newGame();
})


$("#questionmark").hide().show("slow");


