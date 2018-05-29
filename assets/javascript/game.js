var validLetterGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomWords = ['beachball', 'chair', 'sand', 'ocean', 'lifeguard', 'sandcastle', 'boats', 'pier', 'towel', 'lotion', 'dolphin', 'drinks', 'seashells', 'crabs', 'swimsuit', 'sunglasses'];
var incorrectGuessLetters = (incorrectGuessLetters);
var correctGuessLetters = (correctGuessLetters);
// Var for wins and losses.
var wins = 0;
var losses = 0;
var guessRemaining = 12;




var wrongLetter = [];
var underScores = [];
var userGuess = [];
var wordChoice;
var letterCount = 0;


// Function runs when user presses a key.

function startGame() {

    wordChoice = randomWords[Math.floor(Math.random() * randomWords.length)];
    console.log("word Choice = " + wordChoice);
    for (i = 0; i < wordChoice.length; i++) {

        underScores.push("_");
    }
    // Page content.
    document.getElementById("word-blanks").textContent = underScores.join(" ");
    document.getElementById("num-left").textContent = guessRemaining;
    
    // Game restart.
    wrongLetter = [];
    guessRemaining = 12;
    
}

function updateScore() {
    document.getElementById("num-wins").textContent = wins

}
function winOrLose() {

    if (letterCount === wordChoice.length) {
    wins++;
    updateScore();
}
    else if (guessRemaining === 0);
}

startGame();
updateScore();

// User input.
document.onkeyup = function (event) {

    userGuess = event.key;

    if (wordChoice.indexOf(userGuess) > -1) {

        for (var i = 0; i < wordChoice.length; i++) {
            if (wordChoice[i] === userGuess) {
                underScores[i] = userGuess;
               
                console.log(underScores)
                letterCount++;
                winOrLose();
            }
             document.getElementById("word-blanks").textContent = userGuess;
        }
        
    }

    else {

        wrongLetter.push(userGuess);
        guessRemaining--;
       console.log(guessRemaining)
        winOrLose();
    }

    
}



