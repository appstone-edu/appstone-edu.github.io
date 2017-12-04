var quiz = {
	"data" : {
		"Afghanistan" : "Kabul",
		"Albania" : "Tirana",
		"Algeria" : "Algiers",
		"Australia" : "Canberra",
		"Austria" : "Vienna",
		"Belarus" : "Minsk",
		"Belgium" : "Brussels",
		"Brazil" : "Brasilia",
		"Cape Verde" : "Praia",
		"Chile" : "Santiago",
		"Cyprus" : "Nicosia",
		"Denmark" : "Djibouti",
		"Dominica" : "Roseau",
		"Egypt" : "Cairo",
		"Ethiopia" : "Addis Ababa",
		"England" : "London",
		"France" : "Paris",
		"Finland" : "Helsinki",
		"Fiji" : "Suva",
		"Japan" : "Tokyo",
		"Italy" : "Rome",
		"Greece" : "Athens",
		"Wales" : "Cardiff"
	},
	"chooseCountry" : function () {
		return Object.keys(quiz.data)[Math.floor(Math.random() * Object.keys(quiz.data).length)];
	},
	"check" : function (country, city) {
		return quiz.data[country].toLowerCase() === city.toLowerCase();
	},
	"nextQuestion" : function (country, answer) {
		if (country != undefined) {
			if (quiz.check(country, answer)) {
				document.getElementsByTagName("audio")[0].play();
				//More points if first letter capitalised
				quiz.score = quiz.score + (answer[0].toUpperCase() === answer[0] ? 15:10);
			} else {
				document.getElementsByTagName("audio")[1].play();
				if (answer === country[0]) {
					alert("Nice try.");
				}
			}
		}
		var countryChosen = quiz.chooseCountry();
		document.getElementById("questionBox").innerHTML = "<p>What is the Capital of <span id='country'>" + countryChosen + "</span></p><br /><input /><br /><br /><button>Next Question</button>";
		document.getElementsByTagName("button")[0].onclick = function () {
			quiz.nextQuestion(document.getElementById("country").innerHTML, document.getElementsByTagName("input")[0].value);
		};
	},
	"score" : 0
};

window.onload = function () {window.setInterval(function () {
	document.getElementById("score").innerHTML = quiz.score;
}, 1);};
