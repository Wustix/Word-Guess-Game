var validLetterGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomWords = ['beachball', 'chair', 'sand', 'ocean', 'lifeguard', 'sandcastle', 'boats', 'pier', 'towel', 'lotion', 'dolphin', 'drinks', 'seashells', 'crabs', 'swimsuit', 'sunglasses'];


// Var for wins and losses.
var wins = 0;
var guessRemaining = 12;
var wrongLetter = [];
var underScores = [];
var userGuess = [];
var wordChoice = [];






function startGame() {

    wordChoice = randomWords[Math.floor(Math.random() * randomWords.length)];
    console.log("word Choice = " + wordChoice);
    for (i = 0; i < wordChoice.length; i++) {

        underScores.push("_");
    }
    // Page content.
    document.getElementById("word-blanks").textContent = underScores.join(' ');
    document.getElementById("num-left").textContent = guessRemaining;


}

function userKeyGuessed() {

    if (wordChoice.indexOf(userGuess) > -1) {

        for (var i = 0; i < wordChoice.length; i++) {
            if (wordChoice[i] === userGuess) {
                underScores[i] = userGuess;

                console.log(underScores)
            }
            document.getElementById("word-blanks").textContent = underScores.join(' ');
        }

    }

    else {

        wrongLetter.push(userGuess);
        document.getElementById("guessed-already").textContent = wrongLetter.join(' ');
        guessRemaining--;
        document.getElementById("num-left").textContent = guessRemaining;
        console.log(guessRemaining)

    }
}

function winOrLose() {


    if ( wordChoice === wordChoice.length) {
        alert("Surf's Up, You are a Winner!!");
        wins++;
        updateScore();
        
    }
    else if (guessRemaining === 0) {
        alert("Bummer Dude, you Lose");
    }
    

}

function updateScore() {
    document.getElementById("num-wins").textContent = wins;
}


updateScore()


// User input.
document.onkeyup = function (event) {
    

    userGuess = event.key;
    userKeyGuessed();
    winOrLose();

}
startGame();






