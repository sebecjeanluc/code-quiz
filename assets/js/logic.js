const timeDisplay = document.getElementById('time')
const startScreen = document.getElementById('start-screen')
const startButton = document.getElementById('start')
const questionsContainer = document.getElementById('questions')
const questionTitle = document.getElementById('question-title')
const choicesContainer = document.getElementById('choices')
const endScreen = document.getElementById('end-screen')
const finalScoreDisplay = document.getElementById('final-score')
const feedbackDisplay = document.getElementById('feedback')
const initialsInput = document.getElementById('initials')
const submitButton = document.getElementById('submit')

//  Click the button and start the timer
//    Display first question
//    When the answer is clicked, show the next question
//    If the answer is incorrect, subtract 5s from the timer
//  When the timer reaches 0, or all the quiz is answered, the quiz should be ended
//    display their quizTimer of the remaining timer, let user input their initials to save their quizTimer

// index.html

// Define the questions and choices and the answeres, put it in a variable in questions.js file

// Timer -> add click event listenr to "start quiz" button adn trigger the timer
let quizDuration = 60
let quizTimer
timeDisplay.textContent = quizDuration

function startTimer() {
	quizDuration--
	if (quizDuration >= 1) {
		timeDisplay.textContent = quizDuration
	} else {
		endQuiz()
		timeDisplay.textContent = 'Time is up!'
		finalScoreDisplay.textContent = quizDuration
		clearInterval(quizTimer)
	}
}

function hideFeedbackDisplay() {
	feedbackDisplay.setAttribute('class', 'feedback hide')
}

function endQuiz() {
	endScreen.removeAttribute('class', 'hide')
	questionsContainer.setAttribute('class', 'hide')
	timeDisplay.textContent = quizDuration
}
// Display first question
let currentQuestionIndex = 0

function createChoiceButtons() {
	let choicesItems = questionsList[currentQuestionIndex].choices
	for (i = 0; i < choicesItems.length; i++) {
		var choiceButton = document.createElement('button')
		choiceButton.setAttribute('class', 'choiceButton')
		choiceButton.setAttribute('for', i)
		choicesContainer.appendChild(choiceButton)
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
		setTimeout(hideFeedbackDisplay, 2000)
		feedbackDisplay.setAttribute('class', 'feedback')
		feedbackDisplay.textContent = 'Voila! Correct!'
		//    Hide the feedback section after few seconds
	} else {
		//    Display "Wrong answer" in the feedback section
		setTimeout(hideFeedbackDisplay, 2000)
		feedbackDisplay.setAttribute('class', 'feedback')
		feedbackDisplay.textContent = 'Non, incorrect! Minus 5 seconds'
		//  if incorrect, substract 5seconds from the timer
		quizDuration -= 5
	}
	if (quizDuration > 0) {
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
		// console.log('All done')
		clearInterval(quizTimer)
		setTimeout(endQuiz(), 3000)
		finalScoreDisplay.textContent = quizDuration
	}
	// console.log('CurrentQuestion ' + (currentQuestionIndex + 1))
}

function startQuiz() {
	questionTitle.textContent = questionsList[currentQuestionIndex].question
	createChoiceButtons()
	// console.log('CurrentQuestion ' + (currentQuestionIndex + 1))
}

//  Add click event to start button
startButton.addEventListener('click', function (event) {
	event.preventDefault()
	quizTimer = setInterval(startTimer, 1000)
	//  Display the first question from the questions and hide the start-screen content
	startScreen.setAttribute('class', 'hide')
	questionsContainer.removeAttribute('class', 'hide')
	startQuiz()
})

submitButton.addEventListener('click', saveScore)

function saveScore(event) {
	event.preventDefault()
	let userInitials = initialsInput.value
	// console.log(userInitials)
	let finalScore = quizDuration
	// console.log(finalScore)

	let initialScore = {
		initial: userInitials,
		score: finalScore,
	}

	let existingScores = JSON.parse(localStorage.getItem('users')) || []
	// console.log(existingScores)
	existingScores.push(initialScore)
	// console.log(existingScores)
	localStorage.setItem('users', JSON.stringify(existingScores))
	this.disabled = true

	function moveToHistory() {
		window.location.href = 'highscores.html'
	}
	setTimeout(moveToHistory, 1000)
}

// Add the audio file qith event lister when user gets correct or incorrect answer
// const correctAudio = new Audio('./assets/sfx/correct.wav');
// const incorrectAudio = new Audio('./assets/sfx/incorrect.wav');
// // Example to play the audio when start button is clicked
// document.getElementById('start').addEventListener('click', function() {
//     incorrectAudio.play();
// });
