// console.log("am i connected?");

const start_btn = document.querySelector(".start_btn button");
const quiz_deetz = document.querySelector(".quiz_deetz");
const quit = quiz_deetz.querySelector(".buttons .quit");
const startover = quiz_deetz.querySelector(".buttons .startover");
const quiz_box = document.querySelector(".quiz_box");
const answer_options = document.querySelector(".answer_options");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const usrInit = document.querySelector(".done")

// Questions, answer options and answers
let questions = [
    {
        numb: 1,
        question: "In HTML, JavaScript code is inserted between which tags",
        answer: "script",
        options: [
            "p",
            "h1",
            "script"
        ]
    },
    {
        numb: 2,
        question: "This string property returns the length of a string",
        answer: "length",
        options: [
            "length",
            "slice",
            "substring"
        ]
    },
    {
        numb: 3,
        question: "JavaScript ____ are used to store multiple values in a single variable",
        answer: "arrays",
        options: [
            "variables",
            "arrays",
            "functions"
        ]
    },
    {
        numb: 4,
        question: "The CSS ____ points to the HTML element you want to style.",
        answer: "selector",
        options: [
            "property",
            "selector",
            "value"
        ]
    },
];

// Button click****

// Start button - show deetz

start_btn.onclick = () => {
    quiz_deetz.classList.add("activeInfo");
}

// // Leave quiz (quit) button - hide deetz
quit.onclick = () => {
    quiz_deetz.classList.remove("activeInfo");
}

var time = 20
// // Start over button - hide deetz
startover.onclick = () => {
    quiz_deetz.classList.remove("activeInfo");
    //     // Show quiz question box
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer()
}

let fnl_score = 0;
let quest_numb = 1;
let userScore = 0;

const next_btn = document.querySelector(".next_btn");
const results_box = document.querySelector(".results_box");
const restart_quiz = document.querySelector(".again");
const quit_quiz = document.querySelector(".quit");

restart_quiz.onclick = () => {
    results_box.classList.remove("activeResult");
    quiz_box.classList.add("activeInfo");

    let fnl_score = 0;
    let quest_numb = 1;
    let userScore = 0;
}

quit_quiz.onclick = () => {
    window.location.reload();
}

// Next question button clicked

next_btn.onclick = () => {
    if (fnl_score < questions.length - 1) {
        fnl_score++;
        quest_numb++;
        showQuestions(fnl_score);
        queCounter(quest_numb);

    } else {
        console.log("Questions completed");
        showResultBox();
    }

}

// Questions/options pull

function showQuestions(index) {
    const show_quest = document.querySelector(".show_quest");

    let quest_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>';

    show_quest.innerHTML = quest_tag;
    answer_options.innerHTML = option_tag
    const option = answer_options.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// icons on right and wrong answer 

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
        time = time - 5
        answer.classList.add("incorrect");
        console.log("Answer is incorrect");
        answer.insertAdjacentHTML("beforeend", downIcon)
        //    correct answer will show/highlight if wrong one selected 
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

    // message with score 

    if (userScore > 3) {
        let scoreTag = '<span>Awesome! Number Correct <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
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
    // Store score in local 
    localStorage.setItem("fnl-score", JSON.stringify(userScore));

}


function startTimer() {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            showResultBox();
            timeCount.textContent = 00;
        }
    }



}
function queCounter(index) {
    const bottom_quest_counter = quiz_box.querySelector(".total");
    let totalQuestCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_quest_counter.innerHTML = totalQuestCountTag;

}