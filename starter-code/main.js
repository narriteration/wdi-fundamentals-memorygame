console.log("JS file is connected to HTML! Woo! Says Chelsea")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo || cardThree === cardFour) {
	alert ("You found a match!")
} else {
	alert ("Sorry, try again.")
}



/*

1) In your main.js file, create an if else statement that checks for equality between two of your cards 
(you choose which ones).

An if statement should consist of a Boolean checking for equality between two created variables. 
You should have a condition to compare two "king" variables, two "queen" variables, and one of each. 
Start by comparing cardTwo with cardFour (using ===).

2) If values are equal, execute an alert with the message "You found a match!" 
If values are not equal, execute an alert with the message "Sorry, try again."

*/

