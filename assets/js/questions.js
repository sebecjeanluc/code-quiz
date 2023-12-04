var questionsList = [
	{
		question:
			"'Infinity Stones Array': How can you create a JavaScript array named InfinityStones and populate it with the names of all six Infinity Stones as seen in the Marvel films?",
		choices: [
			"'Space', 'Mind', 'Reality', 'Power', 'Time', 'Soul'",
			"'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'",
			'1, 2, 3, 4, 5, 6',
			"'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'",
			".push('Space', 'Mind', 'Reality', 'Power', 'Time', 'Soul')",
		],
		correct: 0,
	},
	{
		question:
			"'Iron Man's Suit Color Function': Write a JavaScript function named changeSuitColor that takes a color as an argument and returns a string describing Iron Man's suit in that color.",
		choices: [
			"'return 'Iron Man suit is now ' + color",
			"console.log('Iron Man suit color changed to ' + color)",
			'1, 2, 3, 4, 5, 6',
			"=> 'Iron Man's suit is ' + color",
			"return 'Iron Man's suit color changed'",
		],
		correct: 3,
	},
	{
		question:
			"'Thor's Hammer Weight Calculation': In JavaScript, how would you write a function calculateHammerWeight that returns the weight of Thor's hammer, Mjolnir, given its density and volume?",
		choices: [
			'return density + volume',
			'return 2 * density * volume',
			"return 'Mjolnir'",
			'=> density / volume',
		],
		correct: 1,
	},
	{
		question:
			"'Spider-Man's Web-Shooting Timeout: How can you implement a JavaScript timeout function that simulates Spider-Man shooting webs every 3 seconds?.",
		choices: [
			"setTimeout(function() { 'Web shot!' }, 3000)",
			"setInterval(() => 'Web shot!', 3000)",
			"setInterval(function() { 'Web shot!' }, 3000)",
			"setTimeout('Web shot!', 3000)",
			"for(let i = 0; i < 3; i++) { setTimeout('Web shot!', 3000) }",
		],
		correct: 1,
	},
	{
		question:
			"'Dr. Strange's Time Loop': How would you use a JavaScript loop to simulate Dr. Strange creating a time loop, repeating a task until a certain condition is met?",
		choices: [
			"while(true) { 'Time loop' }",
			"while(!conditionMet) { 'Repeating time loop' }",
			"for(let i = 0; condition; i++) { 'Time loop' }",
			"do { 'Time loop' } while(conditionMet)",
			"if(conditionMet) { 'Time loop' }",
		],
		correct: 1,
	},
]
