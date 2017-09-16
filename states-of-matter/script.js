var quiz = [{
  "question" : "What is water?",
  "options" : ["A solid", "A liquid", "A gas", "Plasma"],
  "answer" : 1
}, {
  "question" : "A solid's atoms are...",
  "options" : ["Extremley Compact", "Spread out"],
  "answer" : 0
}, {
  "question" : "Plasma is...",
  "options" : ["Naturally found on earth", "Created artificially"],
  "answer" : 1
}, {
  "question" : "A gas...",
  "options" : ["Fills the shape of it's container", "Stays in one shape"],
  "answer" : 0
}, {
  "question" : "Can a liquid be compressed?",
  "options" : ["Yes", "Sometimes", "No"],
  "answer" : 2
}, {
  "question" : "Why are most gases invisible?",
  "options" : ["They're magic", "The atoms are spread out", "Because of their mass"],
  "answer" : 1
}, {
  "question" : "What is fire most similar to?",
  "options" : ["A solid", "A liquid", "A gas", "Plasma"],
  "answer" : 3
}];

function changeText(id, text) {
  document.getElementById(id).innerHTML = text;
}

function start() {
  changeText("title", "States of Matter");
  changeText("description", "Click on a picture to learn about the state of matter");
  document.getElementById("info").innerHTML = "<img src='images/solid.gif' class='selectType' style='left: 12%;' onmouseover='changeText(" + '"description"' + ", " + '"Solid"' + ");' onclick='learn(" + '"solid"' + ");' /><img src='images/liquid.gif' class='selectType' style='left: 34%;' onmouseover='changeText(" + '"description"' + ", " + '"Liquid"' + ");' onclick='learn(" + '"liquid"' + ");' /><img src='images/gas.gif' class='selectType' style='left: 56%;' onmouseover='changeText(" + '"description"' + ", " + '"Gas"' + ");' onclick='learn(" + '"gas"' + ");' /><img src='images/plasma.gif' class='selectType' style='left: 78%;' onmouseover='changeText(" + '"description"' + ", " + '"Plasma"' + ");' onclick='learn(" + '"plasma"' + ");' /><button style='position: absolute; top: 70%; left: 40%;' onmouseover='changeText(" + '"description"' + ", " + '"Take a quiz to see what you know!"' + ");' onclick='startQuiz();'>Quiz</button>";
}

function learn(type) {
  changeText("title", "Learn about " + type);
  changeText("description", "<span onclick='start();'>Click here to go back</span>");
  document.getElementById("info").innerHTML = "<p style='text-align: center; font-size: 150%;'>" + {"solid" : "Solid is one of the four fundamental states of matter (the others being liquid, gas, and plasma). It is characterized by structural rigidity and resistance to changes of shape or volume. Unlike a liquid, a solid object does not flow to take on the shape of its container, nor does it expand to fill the entire volume available to it like a gas does. The atoms in a solid are tightly bound to each other.", "liquid" : "A liquid is a nearly incompressible fluid that conforms to the shape of its container but retains a (nearly) constant volume independent of pressure. As such, it is one of the four fundamental states of matter (the others being solid, gas, and plasma), and is the only state with a definite volume but no fixed shape. Water is, by far, the most common liquid on Earth. Like a gas, a liquid is able to flow and take the shape of a container. Most liquids resist compression, although others can be compressed. Unlike a gas, a liquid does not disperse to fill every space of a container, and maintains a fairly constant density.", "gas" : "Gas is one of the four fundamental states of matter (the others being solid, liquid, and plasma). A pure gas may be made up of individual atoms (e.g. a noble gas like neon), elemental molecules made from one type of atom (e.g. oxygen), or compound molecules made from a variety of atoms (e.g. carbon dioxide). A gas mixture would contain a variety of pure gases much like the air. What distinguishes a gas from liquids and solids is the vast separation of the individual gas particles. This separation usually makes a colorless gas invisible to the human observer.", "plasma" : "Plasma is one of the four fundamental states of matter, while the others are solid, liquid, and gas. Unlike these three states of matter, <u>plasma does not naturally exist on the Earth</u> under normal surface conditions, and can only be artificially generated from neutral gases. Fire doesn&apos;t really belong to any of the aforementioned groups. In fact, the closest state of matter that it can be compared to is plasma."}[type] + "<br /><img src='images/atom.gif' /></p>";
}

function startQuiz() {
  changeText("title", "The Quiz");
  changeText("description", "<span onclick='start();'>Click here to end the test</span>");
  quizQuestion(0);
}

function quizQuestion(qId) {
  if (qId > 0) {
    var counter = 0;
    while (document.getElementsByName("quizOption").length > counter) {
      if (document.getElementsByName("quizOption")[counter].checked) {
        quiz[qId - 1].choice = quiz[qId - 1].options[counter];
      }
      counter = counter + 1;
    }
    if (quiz[qId - 1].choice === undefined) {
      quiz[qId - 1].choice = "Question Skipped";
    }
  }

  if (qId < quiz.length) {
    document.getElementById("info").innerHTML = "<p style='font-size: 150%; text-align: center;'>" + quiz[qId].question + "</p><br /><div id='quizOptions'></div><br /><button style='position: relative; left: 40%;' onclick='quizQuestion(" + (qId + 1) + ");'>Next question</button>";
    var counter = 0;
    while (counter < quiz[qId].options.length) {
      document.getElementById("quizOptions").innerHTML = document.getElementById("quizOptions").innerHTML + "<p style='text-align: center; font-size: 120%;'><input name='quizOption' type='radio' />" + quiz[qId].options[counter] + "</p>";
      counter = counter + 1;
    }
  } else {
    checkQuiz();
  }
}

function checkQuiz() {
  changeText("description", "Check your answers");
  var counter = 0;
  var score = 0;
  while (counter < quiz.length) {
    if (quiz[counter].choice === quiz[counter].options[quiz[counter].answer]) {
      score = score + 1;
    }
    counter = counter + 1;
  }
  document.getElementById("info").innerHTML = "<p style='text-align: center; font-size: 150%;'>You got " + Math.round((score / quiz.length) * 100) + "%</p><br /><br /><div id='questions' style='text-align: center;'></div><button style='position: relative; left: 40%;' onclick='start();'>Back to Home</button>";
  counter = 0;
  while (counter < quiz.length) {
    document.getElementById("questions").innerHTML = document.getElementById("questions").innerHTML + "<p style='font-size: 120%'>Question " + (counter + 1) + ": " + quiz[counter].question + "</p><p style='font-size: 120%'>Your Answer: " + quiz[counter].choice + "</p><p style='font-size: 120%'>Correct Answer: " + quiz[counter].options[quiz[counter].answer] + "</p><br />";
    counter = counter + 1;
  }
}
