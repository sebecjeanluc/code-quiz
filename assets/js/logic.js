const timeDisplay = document.getElementById('time')
const startScreen = document.getElementById('start-screen')
const startButton = document.getElementById('start')
const questionsElement = document.getElementById('questions')
const questionTitle = document.getElementById('question-title')
const choicesElement = document.getElementById('choices')
const endScreenElement = document.getElementById('end-screen')
const finalScoreElement = document.getElementById('final-score')
const feedbackElement = document.getElementById('feedback')
const initials = document.getElementById('initials')
const submitButton = document.getElementById('submit')

//  Click the button and start the timer
//    Display first question
//    When the answer is clicked, show the next question
//    If the answer is incorrect, subtract 5s from the timer
//  When the timer reaches 0, or all the quiz is answered, the quiz should be ended
//    display their intervalId of the remaining timer, let user input their initials to save their intervalId

// index.html

// Define the questions and choices and the answeres, put it in a variable in questions.js file

// Timer -> add click event listenr to "start quiz" button adn trigger the timer
let duration = 60
let intervalId
timeDisplay.textContent = duration

function timerCountDown() {
	duration--
	if (duration >= 1) {
		timeDisplay.textContent = duration
	} else {
		takeMeToEndScreen()
		timeDisplay.textContent = 'Time is up!'
		finalScoreElement.textContent = duration
		clearInterval(intervalId)
	}
}

function eraseFeedbackElement() {
	feedbackElement.setAttribute('class', 'feedback hide')
}

function takeMeToEndScreen() {
	endScreenElement.removeAttribute('class', 'hide')
	questionsElement.setAttribute('class', 'hide')
	timeDisplay.textContent = duration
}
// Display first question
let currentQuestionIndex = 0

function createChoices() {
	let choicesItems = questionsList[currentQuestionIndex].choices
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
	let correct = questionsList[currentQuestionIndex].correct
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
		duration -= 5
	}
	if (duration > 0) {
		currentQuestionIndex += 1
	}
	updateQuestions()
}

function updateQuestions() {
	if (currentQuestionIndex < questionsList.length) {
		questionTitle.textContent = questionsList[currentQuestionIndex].question
		let existingButton = document.querySelectorAll('.choiceButton')
		let choicesItems = questionsList[currentQuestionIndex].choices
		for (i = 0; i < choicesItems.length; i++) {
			existingButton[i].textContent = `${i + 1}. ${choicesItems[i]}`
		}
	} else {
		console.log('All done')
		clearInterval(intervalId)
		setTimeout(takeMeToEndScreen(), 3000)
		finalScoreElement.textContent = duration
	}
	console.log('CurrentQuestion ' + (currentQuestionIndex + 1))
}

function displayQuestion() {
	questionTitle.textContent = questionsList[currentQuestionIndex].question
	createChoices()
	console.log('CurrentQuestion ' + (currentQuestionIndex + 1))
}

//  Add click event to start button
startButton.addEventListener('click', function (event) {
	event.preventDefault()
	intervalId = setInterval(timerCountDown, 1000)
	//  Display the first question from the questions and hide the start-screen content
	startScreen.setAttribute('class', 'hide')
	questionsElement.removeAttribute('class', 'hide')
	displayQuestion()
})

submitButton.addEventListener('click', saveScore)

function saveScore(event) {
	event.preventDefault()
	console.log('submit')
	let userInitials = initials.value
	console.log(userInitials)
	let finalScore = duration
	console.log(finalScore)

	let initialScore = {
		initial: userInitials,
		score: finalScore,
	}

	let existingScores = JSON.parse(localStorage.getItem('users')) || []
	console.log(existingScores)
	existingScores.push(initialScore)

	localStorage.setItem('users', JSON.stringify(existingScores))
}

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
