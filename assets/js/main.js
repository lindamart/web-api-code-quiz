// console.log("am i connected?");

// AC for Code********************************************************


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
const timeCount = quiz_box.querySelector(".timer .timer_sec");

// Button click****

// Start button - show deetz

start_btn.onclick = () => {
    quiz_deetz.classList.add("activeInfo");
    // console.log("111")
}

// // Leave quiz (quit) button - hide deetz
quit.onclick = () => {
    quiz_deetz.classList.remove("activeInfo");
    // console.log("222")
}

// // Start over button - hide deetz
startover.onclick = () => {
    quiz_deetz.classList.remove("activeInfo");
    //     // Show quiz question box
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(20)
    // console.log("333")
}

let fnl_score = 0;
let quest_numb = 1;
let userScore = 0;



const next_btn = quiz_box.querySelector(".next_btn");
const results_box = document.querySelector(".results_box");
const restart_quiz = results_box.querySelector(".buttons again");
const quit_quiz = results_box.querySelector(".buttons quit");

restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    results_box.classList.remove("activeResult");

    let fnl_score = 0;
    let quest_numb = 1;
    let userScore = 0;
}

quit_quiz.onclick = () => {
    window.location.reload();
}


// console.log("444")
// Next question button clicked

next_btn.onclick = () => {
    if (fnl_score < questions.length - 1) {
        fnl_score++;
        quest_numb++;
        showQuestions(fnl_score);
        queCounter(quest_numb);

        // console.log("555")
    } else {
        console.log("Questions completed");
        showResultBox();
        // console.log("666")
    }
}
// Questions/options from Array

function showQuestions(index) {
    const show_quest = document.querySelector(".show_quest");

    let quest_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>';
    // console.log("777")

    show_quest.innerHTML = quest_tag;
    answer_options.innerHTML = option_tag
    const option = answer_options.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        // console.log("888")
    }
}

let upIcon = '<div class="icon up"><i class="far fa-thumbs-up"></i></div>';
let downIcon = '<div class="icon"><i class="far fa-thumbs-down"></i></div>'

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[fnl_score].answer;
    let allOptions = answer_options.children.length;

    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", upIcon)
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is incorrect");
        answer.insertAdjacentHTML("beforeend", downIcon)
        //    correct answer will show if wrong one selected 
        for (let i = 0; i < allOptions; i++) {
            if (answer_options.children[i].textContent == correctAns) {
                answer_options.children[i].setAttribute("class", "option correct");
            }
        }
    }

    // selected options disabled

    for (let i = 0; i < allOptions; i++) {
        answer_options.children[i].classList.add("disabled");
    }

}

function showResultBox() {
    // hide quiz deetz
    quiz_deetz.classList.remove("activeInfo");
    // hide quiz box 
    quiz_box.classList.remove("activeQuiz");
    // show results 
    results_box.classList.add("activeResult");

    const scoreText = results_box.querySelector(".fnl_score");
    // Top guys is not working??????????
    if (userScore > 3) {
        let scoreTag = '<span>Awesome! You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    if (userScore > 1) {
        let scoreTag = '<span>Good job, you got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>Nice try, you got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = 00;
        }
    }
}


function queCounter(index) {
    const bottom_quest_counter = quiz_box.querySelector(".total");
    let totalQuestCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_quest_counter.innerHTML = totalQuestCountTag;
    // console.log("999")
}