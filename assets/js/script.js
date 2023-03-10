//VARIABLE DECLARATIONS
var questions = [
  {
    title: "How do you indicate a comment in JavaScript?",
    choices: ["?", "comment:", "//", "<!--"],
    answer: "//",
  },
  {
    title: "Variables in JavaScript are case sensitive.",
    choices: [
      "True",
      "False",
      "Sometimes",
      "JavaScript doesn't contain variables.",
    ],
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
var choiceEl = document.querySelector(".choicesContainer");
var currentQuestionIndex = 0;
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var choiceSelect = document.querySelector(".choicesContainer");
var answerEl = document.querySelector(".answer");
var timerEl = document.querySelector("#timer");
var timeTicker = 60;

function startGame() {
  directions.classList.add("hide");
  gameInPlay.classList.remove("hide");
  getQuestion();
  runTimer();
}

function runTimer() {
  var timer = setInterval(function () {
    timeTicker--;
    timerEl.textContent = timeTicker;
    if (timeTicker <= 0) {
      clearInterval(timer);
      finishGame();
    }
    if (currentQuestionIndex >= questions.length) {
      clearInterval(timer);
    }
  }, 1000);
}

//add event listener to start button to start the game
startButton.addEventListener("click", startGame);

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
    if (i === 0) {
      choice1El.textContent = questions[currentQuestionIndex].choices[i];
    } else if (i === 1) {
      choice2El.textContent = questions[currentQuestionIndex].choices[i];
    } else if (i === 2) {
      choice3El.textContent = questions[currentQuestionIndex].choices[i];
    } else if (i === 3) {
      choice4El.textContent = questions[currentQuestionIndex].choices[i];
    }
  }
}

//need to reference the global variable questions
function showAnswer(event) {
  if (event.target.textContent === questions[currentQuestionIndex].answer) {
    answerEl.textContent = "Correct!";
  } else {
    answerEl.textContent = "Incorrect!";
    timeTicker -= 5;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    finishGame();
  } else {
    getQuestion();
  }
}

// //when questions conclude, call finishGame() function
function finishGame() {
  gameInPlay.classList.add("hide");
  finalScore.classList.remove("hide");
}

// //when "View High Scores" is clicked, highScores() function will run
// function showHighScores() {
//   directions.classList.add("hide");
//   gameInPlay.classList.add("hide");
//   finalScore.classList.add("hide");
//   highScores.classList.remove("hide");
// }

// //add event Listener for "View High Scores"
// viewScoresButton.addEventListener("click", showHighScores);
