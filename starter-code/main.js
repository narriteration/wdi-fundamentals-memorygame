console.log("JS file is connected to HTML! Woo! Says Chelsea")

var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []


var board = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	// what is data-card ??
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'))
		if (this.getAttribute('data-card') === "king") {
			this.innerHTML = "<img src = 'http://whatdykelookslike.com/wp-content/uploads/2015/09/kboyce_Trevor_drag_king-.jpg'>"; // KING LINK
		} else {
			this.innerHTML = "<img src ='http://www.vogue.com/wp-content/uploads/2015/03/02/holding-rupaul-interview.jpg'>"; // QUEEN LINK
		}
	if (cardsInPlay.length === 2) {
// pass in the cardsInPlay argument to the isMatch function
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert ("You found a match!")
	} else {
		alert ("Sorry, try again.")
	}
}

createBoard();

/*
if (cardOne === cardTwo || cardThree === cardFour) {
	alert ("You found a match!")
} else {
	alert ("Sorry, try again.")
}
*/




/*

*/
