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
const answer_options = document.querySelector(".answer_options");

// Button click****

// Start button - show deetz

start_btn.onclick = () => {
    quiz_deetz.classList.add("activeInfo");
    console.log("111")
}

// // Leave quiz (quit) button - hide deetz
quit.onclick = () => {
    quiz_deetz.classList.remove("activeInfo");
    console.log("222")
}

// // Start over button - hide deetz
startover.onclick = () => {
    quiz_deetz.classList.remove("activeInfo");
    //     // Show quiz question box
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    console.log("333")
}

let fnl_score = 0;
let quest_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");
console.log("444")
// Next question button clicked

next_btn.onclick = () => {
    if (fnl_score < questions.length - 1) {
        fnl_score++;
        quest_numb++;
        showQuestions(fnl_score);
        queCounter(quest_numb);
        console.log("555")
    } else {
        console.log("Questions completed");
        console.log("666")
    }
}
// Questions/options from Array

function showQuestions(index) {
    const show_quest = document.querySelector(".show_quest");

    let quest_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>';
    console.log("777")

    show_quest.innerHTML = quest_tag;
    answer_options.innerHTML = option_tag
    const option = answer_options.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        console.log("888")
    }
}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[fnl_score].answer;
    let allOptions = answer_options.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is correct");
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is incorrect");
    }

// selected options disabled

    for (let i = 0; i < allOptions; i++) {
        answer_options.children[i].classList.add("disabled");
}


// ************start here 35:22********************


}




function queCounter(index) {
    const bottom_quest_counter = quiz_box.querySelector(".total");
    let totalQuestCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_quest_counter.innerHTML = totalQuestCountTag;
    console.log("999")
}