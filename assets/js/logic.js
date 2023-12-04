const timeDisplay = document.getElementById('time')
const startScreen = document.getElementById('start-screen')
const startButton = document.getElementById('start')
const questionsElement = document.getElementById('questions')
const questionTitle = document.getElementById('question-title')
const choicesElement = document.getElementById('choices')
const endScreenElement = document.getElementById('end-screen')
const finalScoreElement = document.getElementById('final-score')
const initials = document.getElementById('initials')
const submitButton = document.getElementById('submit')
const feedbackElement = document.getElementById('feedback')

//  Click the button and start the timer
//    Display first question
//    When the answer is clicked, show the next question
//    If the answer is incorrect, subtract 5s from the timer
//  When the timer reaches 0, or all the quiz is answered, the quiz should be ended
//    display their intervalId of the remaining timer, let user input their initials to save their intervalId

// index.html

// Define the questions and choices and the answeres, put it in a variable in questions.js file

// Timer -> add click event listenr to "start quiz" button adn trigger the timer
let duration = 600
let intervalId
timeDisplay.textContent = duration

function timerCountDown() {
	duration--
	if (duration >= 1) {
		timeDisplay.textContent = duration
	} else {
		timeDisplay.textContent = 'Time is up!'
		takeMeToEndScreen()
		clearInterval(intervalId)
	}
}

function eraseFeedbackElement() {
	feedbackElement.setAttribute('class', 'feedback hide')
	console.log('erased!')
}

function takeMeToEndScreen() {
	endScreenElement.removeAttribute('class', 'hide')
	questionsElement.setAttribute('class', 'hide')
	timeDisplay.textContent = duration
}
// Display first question
let currentQuestionIndex = 0
let choicesItems = questionsList[currentQuestionIndex].choices

function createChoices() {
	for (i = 0; i < choicesItems.length; i++) {
		var choiceButton = document.createElement('button')
		choiceButton.setAttribute('class', 'choiceButton')
		choiceButton.setAttribute('for', i)
		choicesElement.appendChild(choiceButton)
		choiceButton.textContent = `${i + 1}. ${choicesItems[i]}`
	}
	const choiceButtons = document.querySelectorAll('.choiceButton')
	for (let i = 0; i < choiceButtons.length; i++) {
		choiceButtons[i].addEventListener('click', userSelectAction)
	}
}

function userSelectAction(event) {
	let userChoice = parseInt(event.currentTarget.getAttribute('for'))
	let correct = questionsList[0].correct
	//  Check if the answer is correct
	if (userChoice === correct) {
		//  if correct, display correct answer in the feedback section
		setTimeout(eraseFeedbackElement, 2000)
		feedbackElement.setAttribute('class', 'feedback')
		feedbackElement.textContent = 'Voila! Correct!'
		//    Hide the feedback section after few seconds
	} else {
		//    Display "Wrong answer" in the feedback section
		setTimeout(eraseFeedbackElement, 2000)
		feedbackElement.setAttribute('class', 'feedback')
		feedbackElement.textContent = 'Non, incorrect! Minus 5 seconds'
		//  if incorrect, substract 5seconds from the timer
		console.log(duration)
		duration -= 5
		console.log(duration)
	}
	if (duration > 0) {
		currentQuestionIndex += 1
	}
	console.log('currentQuestionIndex ' + currentQuestionIndex)
}

function updateChoices() {
	let existingButton = document.querySelector('.choiceButton')
	let choicesItems = questionsList[currentQuestionIndex].choices

	if (existingButton.length == choicesItems.length) {
		for (i = 0; i < choicesItems.length; i++) {
			existingButton.textContent = `${i + 1}. ${choicesItems[i]}`
		}
	}
}

function displayQuestion() {
	// if (currentQuestionIndex < questionsList.length) {
	questionTitle.textContent = questionsList[currentQuestionIndex].question
	createChoices()
	console.log('currentQuestionIndex ' + currentQuestionIndex)
	if (currentQuestionIndex === questionsList.length) {
		clearInterval(intervalId)
		setTimeout(takeMeToEndScreen(), 3000)
		finalScoreElement.textContent = duration
	}
	questionTitle.textContent = questionsList[currentQuestionIndex].question
}

console.log('currentQuestionIndex ' + currentQuestionIndex)

//  Add click event to start button
startButton.addEventListener('click', function (event) {
	event.preventDefault()
	intervalId = setInterval(timerCountDown, 1000)
	//  Display the first question from the questions and hide the start-screen content
	startScreen.setAttribute('class', 'hide')
	questionsElement.setAttribute('class', 'question__wrapper')
	displayQuestion()
})

// highintervalIds.html
// Retrive highintervalIds from local storage
// Sort the intervalIds from higher intervalId to lower intervalId
// Display the highintervalIds as a list
// When the user click on "Clear HighintervalIds", clear local storage.

// Add the audio file qith event lister when user gets correct or incorrect answer
// const correctAudio = new Audio('./assets/sfx/correct.wav');
// const incorrectAudio = new Audio('./assets/sfx/incorrect.wav');
// // Example to play the audio when start button is clicked
// document.getElementById('start').addEventListener('click', function() {
//     incorrectAudio.play();
// });
