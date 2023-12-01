const timeDisplay = document.getElementById('time')
const startScreen = document.getElementById('start-screen')
const startButton = document.getElementById('start')
const questions = document.getElementById('questions')
const questionTitle = document.getElementById('questions-title')
const choices = document.getElementById('choices')
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
// Display first question
//  Add click event to start button
//  Display the first question from the questions and hide the start-screen content
// Add click event to the choices div and check if the choice button is clicked
//  Check if the answer is correct
//  if correct, display correct answer in the feedback section
//    Hide the feedback section after few seconds
//  if incorrect, substract 5seconds from the timer
//    Display "Wrong answer" in the feedback section
//    Check the timer, if timer > 0, display next question.
//    If timer <= display the end-scren

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
