document.getElementById("rock").addEventListener("click", function (e) {
  rockPaperScissor(e.target.id, computerChoice());
});
document.getElementById("paper").addEventListener("click", function (e) {
  rockPaperScissor(e.target.id, computerChoice());
});
document.getElementById("scissor").addEventListener("click", function (e) {
  rockPaperScissor(e.target.id, computerChoice());
});

function computerChoice() {
  let computerList = ["rock", "paper", "scissor"];
  let choice = computerList[Math.floor(Math.random() * computerList.length)];
  return choice;
}

let score = 0;
let computerScore = 0;

function rockPaperScissor(userChoice, computerChoice) {
  let results = document.getElementById("results");
  document.getElementById("yourChoice").innerHTML =
    "You Chose: " + userChoice.toUpperCase();
  document.getElementById("computerChooses").innerHTML =
    "The Computer Chose: " + computerChoice.toUpperCase();

  const userChoseRock = userChoice === "rock";
  const userChosePaper = userChoice === "paper";
  const userChoseScissors = userChoice === "scissor";
  const computerChoseRock = computerChoice == "rock";
  const computerChosePaper = computerChoice == "paper";
  const computerChoseScissors = computerChoice == "scissor";

  if (
    (userChoseRock && computerChoseScissors) ||
    (userChosePaper && computerChoseRock) ||
    (userChoseScissors && computerChosePaper)
  ) {
    results.innerHTML = "YOU WIN!";
    results.style.color = "green";
    score++;
  } else if (
    (userChosePaper && computerChoseScissors) ||
    (userChoseScissors && computerChoseRock) ||
    (userChoseRock && computerChosePaper)
  ) {
    results.innerHTML = "YOU LOSE!";
    results.style.color = "red";
    computerScore++;
  } else {
    results.innerHTML = "YOU ARE TIED!";
    results.style.color = "yellow";
  }
  document.getElementById("score").innerHTML = "Your Score: " + score;
  document.getElementById("computerScore").innerHTML =
    "The Computer's Score: " + computerScore;
  scoreColorChange();
}

function scoreColorChange() {
  let computerColor = document.getElementById("computerScore");
  let myColor = document.getElementById('score');

  if (computerScore > score) {
    computerColor.style.color = "green";
  } else {
    computerColor.style.color = "red";
  }
  if (score > computerScore) {
    myColor.style.color = "green";
  } else {
    myColor.style.color = "red";
  }
  if (score === computerScore) {
    computerColor.style.color = "yellow";
    myColor.style.color = "yellow";
  }
}
