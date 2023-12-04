const timeDisplay = document.getElementById('time')
const startScreen = document.getElementById('start-screen')
const startButton = document.getElementById('start')
const questions = document.getElementById('questions')
const questionTitle = document.getElementById('question-title')
const choicesElement = document.getElementById('choices')
const endScreen = document.getElementById('end-screen')
const finalScore = document.getElementById('final-score')
const initials = document.getElementById('initials')
const submitButton = document.getElementById('submit')
const feedback = document.getElementById('feedback')

//  Click the button and start the timer
//    Display first question
//    When the answer is clicked, show the next question
//    If the answer is incorrect, subtract 5s from the timer
//  When the timer reaches 0, or all the quiz is answered, the quiz should be ended
//    display their score of the remaining timer, let user input their initials to save their score

// index.html

// Define the questions and choices and the answeres, put it in a variable in questions.js file

// Timer -> add click event listenr to "start quiz" button adn trigger the timer
let duration = 10
timeDisplay.textContent = duration

function timerCountDown() {
	duration--
	if (duration >= 1) {
		timeDisplay.textContent = duration
	} else {
		timeDisplay.textContent = 'Time is up!'
	}
}

// console.log(timeDisplay)
//          element you want to put / content
function createChoicesElement(element, choiceContent) {
	choiceButton.textContent = choiceContent
}

// Display first question
let currentQuestionIndex = 0

function displayQuestion() {
	if (currentQuestionIndex < questionsList.length) {
		questionTitle.textContent = questionsList[currentQuestionIndex].question

		let choicesItems = questionsList[currentQuestionIndex].choices

		for (i = 0; i < choicesItems.length; i++) {
			let choiceButton = document.createElement('button')
			choiceButton.setAttribute('class', 'choiceButton')
			choiceButton.setAttribute('for', i)
			choicesElement.appendChild(choiceButton)
			choiceButton.textContent = `${i + 1}. ${choicesItems[i]}`
			// Add click event to the choices div and check if the choice button is clicked
			choiceButton.addEventListener('click', function () {
				let userChoice = parseInt(choiceButton.getAttribute('for'))
				// console.log(userChoice)
				let correct = questionsList[0].correct
				// console.log(correct)
				//  Check if the answer is correct
				if (userChoice === correct) {
					//  if correct, display correct answer in the feedback section
					console.log('Voilla')
					//    Hide the feedback section after few seconds
				} else {
					//  if incorrect, substract 5seconds from the timer
					//    Display "Wrong answer" in the feedback section
					console.log("You've got a wrong number!")
				}

				// show next question and so on
			})
		}
	}
}
//    Check the timer, if timer > 0, display next question.
//    If timer <= display the end-scren

console.log('currentQuestionIndex ' + currentQuestionIndex)

//  Add click event to start button
startButton.addEventListener('click', function (event) {
	event.preventDefault()
	var intervalId = setInterval(timerCountDown, 1000)
	//  Display the first question from the questions and hide the start-screen content
	startScreen.setAttribute('class', 'hide')
	questions.setAttribute('class', 'question__wrapper')
	displayQuestion()
})

// highscores.html
// Retrive highscores from local storage
// Sort the scores from higher socre to lower score
// Display the highscores as a list
// When the user click on "Clear Highscores", clear local storage.

// Add the audio file qith event lister when user gets correct or incorrect answer
// const correctAudio = new Audio('./assets/sfx/correct.wav');
// const incorrectAudio = new Audio('./assets/sfx/incorrect.wav');
// // Example to play the audio when start button is clicked
// document.getElementById('start').addEventListener('click', function() {
//     incorrectAudio.play();
// });
