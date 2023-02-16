//VARIABLE DECLARATIONS
var questions = [
  {
    title: "How do you indicate a comment in JavaScript?",
    choices: ["?", "comment:", "//", "<!--"],
    answer: "//",
  },
  {
    title: "True or False: Variables in JavaScript are case sensitive.",
    choices: ["True", "False"],
    answer: "True",
  },
  {
    title: "What symbols indicate an object?",
    choices: ["{}", "[]", "()", "<>"],
    answer: "{}",
  },
];

//storing references to elements in the DOM
var directions = document.querySelector(".start");
var clickStart = document.querySelector("#startButton");
var gameInPlay = document.querySelector(".game");
var finalScore = document.querySelector(".finalScore");
var highScores = document.querySelector(".highScores");
var viewScoresButton = document.querySelector(".viewScoresButton");

function startGame() {
  directions.classList.add("hide");
  gameInPlay.classList.remove("hide");
}

//add event listener to start button to start the game
startButton.addEventListener("click", startGame);

//   //need to reference the global variable questions
//   //potentially use a for loop to iterate through questions?
var launchQuestions = "";

for (var i = 0; i < questions.length; i++) {
  questions[i].textContent = "";
}

//when for loop concludes, call finishGame() function
function finishGame() {
  gameInPlay.classList.add("hide");
  finalScore.classList.remove("hide");
}

//when "View High Scores" is clicked, highScores() function will run
function highScores() {
  directions.classList.add("hide");
  gameInPlay.classList.add("hide");
  finalScore.classList.add("hide");
  highScores.classList.remove("hide");
}

//add event Listener for "View High Scores"
viewScoresButton.addEventListener("click", highScores);
