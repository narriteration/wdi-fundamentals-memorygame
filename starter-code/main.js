console.log("JS file is connected to HTML! Woo! Says Chelsea")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


// 4. Create a function called createCards in your JavaScript file. 
// This function will contain the code you just wrote to generate your cards
var createCards = function() {

	// 1. get element with id of game-board and set it to a variable
	var gameBoard = document.getElementById('game-board');

	// 2. create a for loop that creates an HTML element for each card
	for (var i = 0; i < 4; i++) {

		// 2.5 Each HTML element should be a div 
		var div = document.createElement('div');
		// and have the class card
		div.className = 'card';
		// 3. Append each newly created card to the div with the ID game-board.
		gameBoard.appendChild(div);
	}
}

// 5. call the function (make it happen!)
createCards();


/*
if (cardOne === cardTwo || cardThree === cardFour) {
	alert ("You found a match!")
} else {
	alert ("Sorry, try again.")
}
*/




/*

*/

