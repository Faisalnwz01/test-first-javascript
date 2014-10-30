var montyHall = function() {
	debugger;
	var totalNumOfGames = 1000
	var generateRandomDoor = return Math.floor(Math.random() * 3);


	var userChoice = function (switchDoor) {
		var door = [];
		var randomDoor = function() {
			
			for (var z = 0; z < totalNumOfGames; z++) {
				door.push(generateRandomDoor);
			}
			return door;
		}
		var totalWon = 0;
		var totalLost = 0;
		for (var i = 0; j = door.length; i < j; i++) {
			var winningDoor = door[i];
			var guess = selectDoor();
			if (guess === winningDoor && !switchDoor) {
				totalWon++; 
			} 
			else if (guess !== winningDoor && switchDoor)  {
				totalWon++;
			}
			else {
				totalLost++;
			}
		}
	}
	return totalWon;
	return totalLost;

	console.log("you are Playing " + totalNumOfGames + " games");
	console.log("Total number of wins when Playing", userChoice());

}





/*<<<<<<strategy used to maked this function>>>>>>>>
//generate random door
//assign random door to a door variable
//let user guess the door
	//if they picked the correct door and then changed they lost
	// make a loop that checks for if user guess is winning door and not
		// switched they they won.
	//if they picked the wrong door and then switched then they win
	//if they didnt switch and it was the correct door then they win*/
