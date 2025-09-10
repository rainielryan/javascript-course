'use strict';

////////////////////////////////////
// DOM Element Selection 
console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
// messageEl.textContent = 'Hello from JavaScript';

const scoreEl = document.querySelector('.score');
console.log('Score Element: ', scoreEl);
// scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
console.log(highscoreEl)
// highscoreEl.textContent = 67;

// for input
const guessEl = document.querySelector('.guess');
// guessEl.value = 13;


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number: ', secretNumber);

// tracks current score
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game State Initialized!');

// // Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
    console.log('Check button clicked!');
    const guess = Number(document.querySelector('.guess').value);
    console.log('Players guessed: ', guess);

    if(guess === secretNumber) {
        console.log('Correct Guess!')
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
    } else if (guess > secretNumber) {
        console.log('Too High!');
        document.querySelector('.message').textContent = 'Too High! 🔥🔥'
    } else if (guess < secretNumber) {
        console.log('Too Low');
        document.querySelector('.message').textContent = 'Too Low! 🧊🧊'
    }
});












