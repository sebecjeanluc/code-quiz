const highscoresElement = document.getElementById('highscores')
const clearButton = document.getElementById('clear')

let storedItem = localStorage.getItem('users')
// Retrive highintervalIds from local storage
storedItem = JSON.parse(storedItem)

if (storedItem) {
	// sorting from highest to lowest
	storedItem.sort(function (a, b) {
		return b.score - a.score
	})
	for (i = 0; i < storedItem.length; i++) {
		let scoreLiElement = document.createElement('li')
		highscoresElement.appendChild(scoreLiElement)
		// console.log(storedItem[i])
		let userInitial = storedItem[i].initial
		let userScore = storedItem[i].score
		// Display the highintervalIds as a list
		scoreLiElement.textContent = userInitial + ' - ' + userScore
	}
} else {
	highscores.textContent = 'No history'
}

// When the user click on "Clear HighintervalIds", clear local storage.
clearButton.addEventListener('click', function (event) {
	event.preventDefault()
	localStorage.clear()
	location.reload()
})
