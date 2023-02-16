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

function startGame() {
  directions.classList.add("hide");
  gameInPlay.classList.remove("hide");
}

//add event listener to start button to start the game
startButton.addEventListener("click", startGame);

//   //need to reference the global variable questions
//   //potentially use a for loop to iterate through questions?
//   gameInPlay = "";

//   for (var i = 0; i < questions.length; i++) {
//     questions[i].textContent = "";
//   }
// });
