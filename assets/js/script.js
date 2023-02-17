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
var choiceEl = document.querySelector(".choices");
var currentQuestionIndex = 0;
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var answerEl = document.querySelector(".answer");

function startGame() {
  directions.classList.add("hide");
  gameInPlay.classList.remove("hide");
  getQuestion();
}

//add event listener to start button to start the game
startButton.addEventListener("click", startGame);

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
    if (i === 0) {
      choice1El.textContent = questions[currentQuestionIndex].options[i];
    } else if (i === 1) {
      choice2El.textContent = questions[currentQuestionIndex].options[i];
    } else if (i === 2) {
      choice3El.textContent = questions[currentQuestionIndex].options[i];
    } else if (i === 3) {
      choice4El.textContent = questions[currentQuestionIndex].options[i];
    }
  }
  // choiceEl.innerHTML = "";
  // currentQuestion.choices.forEach(function (choices, i) {
  //   // console.log("inside currentQuestion choice");
  //   var choicebtn = document.createElement("button");
  //   choicebtn.setAttribute("class", "choices");
  //   choicebtn.setAttribute("value", choices);
  //   choicebtn.textContent = i + 1 + ". " + choices;
  //   choiceEl.appendChild(choicebtn);

  //   choicebtn.addEventListener("click", function () {
  //     if (choices[i] === questions.answer) {
  //       answerEl.textContent = "Correct!";
  //     } else {
  //       answerEl.textContent = "Incorrect!";
  //     }
  //   });
  // });
  // currentQuestionIndex++;
  // continueQuestions();
}

//need to reference the global variable questions
function continueQuestions() {
  titleEl.textContent = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  choiceEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choices, i) {
    // console.log("inside currentQuestion choice");
    var choicebtn = document.createElement("button");
    choicebtn.setAttribute("class", "choices");
    choicebtn.setAttribute("value", choices);
    choicebtn.textContent = i + 1 + ". " + choices;
    choiceEl.appendChild(choicebtn);

    choicebtn.addEventListener("click", function () {
      if (choices[i] === questions.answer) {
        answerEl.textContent = "Correct!";
      } else {
        answerEl.textContent = "Incorrect!";
      }
    });
  });
}

//when questions conclude, call finishGame() function
function finishGame() {
  gameInPlay.classList.add("hide");
  finalScore.classList.remove("hide");
}

//when "View High Scores" is clicked, highScores() function will run
function showHighScores() {
  directions.classList.add("hide");
  gameInPlay.classList.add("hide");
  finalScore.classList.add("hide");
  highScores.classList.remove("hide");
}

//add event Listener for "View High Scores"
viewScoresButton.addEventListener("click", showHighScores);
