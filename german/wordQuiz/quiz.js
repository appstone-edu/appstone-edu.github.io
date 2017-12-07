var phrases = {
	"Basic" : {
		"Hallo" : "Hello",
		"Ich bin" : "I am"
	},
	"Pets/Animals" : {
		"Katze" : "Cat",
		"Hunde" : "Dog",
		"Hamster" : "Hamster",
		"Fisch" : "Fish",
		"Wellensittich" : "Budgie",
		"Schlange" : "Snake",
		"Schildkr&ouml;te" : "Tortoise",
		"Kaninchen" : "Rabbit",
		"Meerschweinchen" : "Guinny Pig",
		"Katzchen" : "kitten",
		"Maus" : "mouse",
		"Pferd" : "horse"
	},
	"Family" : {
		"Bruder" : "Brother",
		"Schwester" : "Sister",
		"Mutter" : "Mother",
		"Vater" : "Father",
		"Gro&szlig;vater" : "Grandfather",
		"Gro&szlig;mutter" : "Grandmother",
		"Onkel" : "Uncle",
		"Tante" : "Aunt"
	}
};

window.score;

window.onload = function () {
	window.quizContainer = document.getElementById("quizContainer");
	listCategories();
};

function startQuiz(categoryNumber) {
	score = 0;
	window.categoryName = Object.keys(phrases)[categoryNumber];
	quizContainer.innerHTML = "<p>Quiz: " + categoryName + "</p><p>Score: <span id='scoreBoard'>0</span><br /><div id='questionBox'></div>";
	window.questionBox = document.getElementById("questionBox");
	displayQuestion();
}

function nextQuestion() {
	var answerInput = questionBox.getElementsByTagName("input")[0].value.toLowerCase();
	if (answerInput === phrases[categoryName][window.currentPhrase].toLowerCase()) {
		score = score + 1;
	}
	displayQuestion();
}

function displayQuestion() {
	var categoryPhrases = Object.keys(phrases[categoryName]);
	window.currentPhrase = categoryPhrases[Math.floor(Math.random() * categoryPhrases.length)];
	questionBox.innerHTML = "<p>What does '" + currentPhrase + "' mean?</p><br /><input /><button onclick='nextQuestion();'>Submit</button>";
}

//Score Keeper
window.setInterval(function () {
	var scoreBoard = document.getElementById("scoreBoard");
	if (scoreBoard != null) {
		scoreBoard.innerHTML = score;
	}
}, 100);

function listCategories() {
	quizContainer.innerHTML = "<p>Categories:</p>";
	var counter = 0;
	while (counter < Object.keys(phrases).length) {
		quizContainer.innerHTML = quizContainer.innerHTML + "<p onclick='startQuiz(" + counter + ");'>" + Object.keys(phrases)[counter] + "</p>";
		counter = counter + 1;
	}
}
