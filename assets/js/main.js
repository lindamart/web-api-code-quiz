// console.log("am i connected?");

// AC for Code********************************************************
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and set my score on the board.


const start_btn = document.querySelector("start_btn button");
const quiz_deetz = document.querySelector("quiz_deetz button");
const quit = document.querySelector("quit button");
const startover = document.querySelector("startover button");

// Start button hit

start_btn.onclick = ()=>{
    quiz_deetz.classList.add("");
}