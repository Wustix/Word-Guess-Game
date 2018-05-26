var validLetterGuess = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var randomWords = ['beachball', 'chair', 'sand', 'ocean', 'lifeguard', 'sandcastle', 'boats', 'pier', 'towel', 'lotion', 'dolphin', 'drinks', 'seashells', 'crabs', 'swimsuit', 'sunglasses']
var incorrectGuessLetters = (incorrectGuessLetters)
var correctGuessLetters = (correctGuessLetters)
// Var for wins and losses.
var wins = 0;
var losses = 0;
var guessRemaining = 12;

var winsCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var guessLetter = document.getElementById("letters-guessed");
var guessLeft = document.getElementById("Guesses-Remaining");



var placeholder = []
var currentWord = (currentWord)
var newGame = (newGame)
var gameOver = (gameOver)

// Function runs when a user presses a key.
document.onkeyup = function(event) {

// Determines key that was pressed.   
    var userBegin = event.key;

// Random word chosen from word array.    
    var wordChoice = randomWords[Math.floor(Math.random() * randomWords.length)];

// forloop letters to chose from
    for (var i = 0; i < validLetterGuess.length; i++)

// 




}