var validLetterGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomWords = ['beachball', 'chair', 'sand', 'ocean', 'lifeguard', 'sandcastle', 'boats', 'pier', 'towel', 'lotion', 'dolphin', 'drinks', 'seashells', 'crabs', 'swimsuit', 'sunglasses'];
var incorrectGuessLetters = (incorrectGuessLetters);
var correctGuessLetters = (correctGuessLetters);
// Var for wins and losses.
var wins = 0;
var losses = 0;
var guessRemaining = 12;

var winsCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var guessLetter = document.getElementById("letters-guessed");
var guessLeft = document.getElementById("Guesses-Remaining");
var lettersInWord = document.getElementById("letters-in-word");


var wrongLetter = [];
var underScores = [];
var userGuess = [];
var wordChoice;



// Function runs when user presses a key.

function startGame() {

    wordChoice = randomWords[Math.floor(Math.random() * randomWords.length)];

    for (i = 0; i < wordChoice.length; i++)
{
    underScores.push("_");
}
}



startGame();
