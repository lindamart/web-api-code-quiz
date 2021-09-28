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


const start_btn = document.querySelector(".start_btn button");
const quiz_deetz = document.querySelector(".quiz_deetz");
const quit = quiz_deetz.querySelector(".buttons .quit");
const startover = quiz_deetz.querySelector(".buttons .startover");
const quiz_box = document.querySelector(".quiz_box");

// Button click****

// Start button - show deetz

start_btn.onclick = () => {
    quiz_deetz.classList.add("activeInfo");
}

// // Leave quiz (quit) button - hide deetz
quit.onclick = () => {
    quiz_deetz.classList.remove("activeInfo");
}

// // Start over button - hide deetz
startover.onclick = () => {
    quiz_deetz.classList.remove("activeInfo");
    //     // Show quiz question box
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}

let fnl_score = 0;

const next_btn = quiz_box.querySelector(".next_btn")

// Next question button clicked

next_btn.onclick = ()=>{
    if(fnl_score < questions.length - 1){
        fnl_score++;
        showQuestions(fnl_score);
    }else{
        console.log("Questions completed");
    }
}

function showQuestions(index) {
    const show_quest = document.querySelector(".show_quest");
    const answer_options = document.querySelector(".answer_options");
    let quest_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>';

    show_quest.innerHTML = quest_tag;
    answer_options.innerHTML = option_tag
}