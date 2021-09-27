# web-api-code-quiz
question: "In HTML, JavaScript code is inserted between which tags",
		answers: {
			a: 'p',
			b: 'h1',
			c: 'script'
		},
		correctAnswer: 'c'
	},
    {
		question: "Where is the correct place to insert a JavaScript?",
		answers: {
			a: 'Head',
			b: 'Body',
			c: 'Both'
		},
		correctAnswer: 'c'
	},
    {
		question: "JavaScript ____ are used to store multiple values in a single variable",
		answers: {
			a: 'Arrays',
			b: 'Variables',
			c: 'Functions'
		},
		correctAnswer: 'a'
	},
	{
		question: "The CSS ___ points to the HTML element you want to style.",
		answers: {
			a: 'property',
			b: 'selector',
			c: 'value'
		},
		correctAnswer: 'b'


        /* Start button and Instruction wording */

h1, p {
    color: #6E2C00;
    font-size: xx-large;
    font-family: 'PT Sans', sans-serif;
    ;
}

p {
    color: #6E2C00;
    font-size: large;
}

#start {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;
}

#start-button {
    border: 1px black solid;
    background-image: linear-gradient(#EB984E, #D35400);
    color: white;
    box-shadow: 1px 1px 2px #6E2C00;
    border-radius: 20px;
    font-size: x-large;
    padding: 15px;
}

/* timer */

#timerDisplay {
    display: flex;
    justify-content: end;
}

#score-container {
    /* how do i fix the display?? maybe put it up top? */
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}