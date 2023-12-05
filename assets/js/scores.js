const highscoresElement = document.getElementById('highscores')

let storedItem = localStorage.getItem()

if (storedItem) {
	storedItem = JSON.parse(storedItem)
	console.log(storedItem)
	highscoresElement.textContent = storedItem
} else {
	console.log('could not found')
}
