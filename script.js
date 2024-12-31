'use strict';
let Hscore = document.querySelector('.highscore');
let highScore = Number(Hscore.textContent);
let score = document.querySelector('.score');
let scoreValue = Number(score.textContent);
const title = document.querySelector('h1');
const questionMark = document.querySelector('.number');
const body = document.querySelector('body');
const message = document.querySelector('.message');

let val = 15;
function correctGuess() {
    
    const body = document.querySelector('body');
    body.style.backgroundColor = '#60b347';
    questionMark.style.width = '30rem';
    questionMark.innerHTML = val;
}

function decreaseScore(){
    scoreValue--;
    score.textContent = scoreValue;
}
function checkScore(message) {
    if (scoreValue <= 0) {
        title.textContent = 'Try Again !!!'
        message.textContent = "You lost the game !!";
        message.style.color = '#eee';
        const body = document.querySelector('body');
        body.style.backgroundColor = 'red';

    }
}

function checkHighScore() {
    if(scoreValue > highScore) {
        highScore = scoreValue;
        Hscore.textContent = String(highScore);
    }
}

function tooHigh(){
    message.innerHTML = "Too High !!!!";
    decreaseScore();
    checkScore(message);
}
function tooLow(){
    message.innerHTML = "Too Low !!!!";
    decreaseScore();
    checkScore(message);
}


document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (guess == val){
        correctGuess();
        console.log(scoreValue,highScore)
        checkHighScore();
    }
    else if (guess > val){
        tooHigh();
    }
    else if (guess < val){
        tooLow();
    }
});

function reset() {

}
let again = document.querySelector('.again');
again.addEventListener('click', function () {
    document.querySelector('.guess').value = '';
    score.textContent = "20";
    scoreValue = 20;
    title.textContent = "Guess My Number !";
    questionMark.textContent = "?";
    questionMark.style.width = "15rem";
    body.style.backgroundColor = "black";
    message.textContent = "Start guessing..."
});




