function blockCmd(code) {
  document.getElementById("codeInput").value = document.getElementById("codeInput").value + code;
}

function log(message, type) {
  var color;
  switch (type) {
    case "error":
    message = "Error: " + message;
    color = "red";
    break;
    default:
    color = "black";
  }
  document.getElementById("log").innerHTML = document.getElementById("log").innerHTML + "<p style='color: " + color + ";'>" + message + "</p>";
}

function runCode() {
  document.getElementById("log").innerHTML = "";
  log("Project has started");
  var canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  var input = document.getElementById("codeInput").value;
  var commands = [];
  var currentCommand = "";
  var soundIdCounter = 0;
  var counter = 0;
  while (counter < input.length) {
    if (input[counter] === "#") {
      if (currentCommand.length > 0) {
        commands.push(currentCommand);
      }
      currentCommand = "";
    } else {
      currentCommand = currentCommand + input[counter];
    }
    counter = counter + 1
  }
  log("Code: " + commands);

  //Execute commands
  counter = 0;
  while (counter < commands.length) {
    log("Executing item " + (counter + 1) + " (" + commands[counter] + ")");
    switch (commands[counter].toLowerCase()) {
      //All Commands are lowercase, however user input is insensitive.
      case "intro":
      canvas.innerHTML = canvas.innerHTML + "<p>Hello! Welcome to my SixCode project, " + document.getElementById("projectName").value + "</p>";
      break;
      case "add text":
      canvas.innerHTML = canvas.innerHTML + "<p>" + commands[counter + 1] + "</p>";
      //Because the following item is a parameter, it is skipped and not executed as a command.
      counter = counter + 1;
      break;
      case "new line":
      canvas.innerHTML = canvas.innerHTML + "<br />";
      break;
      case "add picture":
      canvas.innerHTML = canvas.innerHTML + "<img src='image/" + commands[counter + 1] + ".jpg' style='width: 50px' />";
      counter = counter + 1;
      break;
      case "background":
      canvas.innerHTML = canvas.innerHTML + "<img src='background/" + commands[counter + 1] + ".jpg' style='z-index: -1; position: absolute; top: 0%; left: 0%; width: 100%; height: 100%;' />";
      counter = counter + 1;
      break;
      case "play sound":
      soundIdCounter = soundIdCounter + 1;
      canvas.innerHTML = canvas.innerHTML + "<audio id='sound-" + soundIdCounter + "' src='sound/" + commands[counter + 1] + ".wav' />";
      document.getElementById("sound-" + soundIdCounter).play();
      counter = counter + 1;
      break;
      default:
      log("Unknown Command!", "error");
    }
    counter = counter + 1;
  }
}
