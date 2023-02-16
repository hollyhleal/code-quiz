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
var startGame = document.querySelector("#startButton");
var gameInPlay = document.querySelector(".game");

var page = "show";

//add event listener to start button to start the game
// startGame.addEventListener("click", function () {
//   if (page === "show") {
//     page = "hide";
//     page.setAttribute("class", "hide");
//   }
// });

// startGame.addEventListener("click", function (event) {
//   event.preventDefault();
//   //need to reference the global variable questions
//   //potentially use a for loop to iterate through questions?
//   gameInPlay = "";

//   for (var i = 0; i < questions.length; i++) {
//     questions[i].textContent = "";
//   }
// });
