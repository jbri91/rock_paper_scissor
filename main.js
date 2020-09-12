let userChoice;
let computerChoice;
let computerList = ["rock", "paper", "scissor"];
let choice = computerList[Math.floor(Math.random() * computerList.length)];
let score = 0;
let computerScore = 0;

let rock = document
  .getElementById("rock")
  .addEventListener("click", function (e) {
    rockPaperScissor(
      e.target.id,
      computerList[Math.floor(Math.random() * computerList.length)]
    );
  });

let paper = document
  .getElementById("paper")
  .addEventListener("click", function (e) {
    rockPaperScissor(
      e.target.id,
      computerList[Math.floor(Math.random() * computerList.length)]
    );
  });

let scissor = document
  .getElementById("scissor")
  .addEventListener("click", function (e) {
    rockPaperScissor(
      e.target.id,
      computerList[Math.floor(Math.random() * computerList.length)]
    );
  });

function rockPaperScissor(userChoice, computerChoice) {
  let results = document.getElementById("results").innerHTML;

  document.getElementById("yourChoice").innerHTML =
    "You Chose: " + userChoice.toUpperCase();
  document.getElementById("computerChooses").innerHTML =
    "The Computer Chose: " + computerChoice.toUpperCase();

  if (userChoice === "rock" && computerChoice === "scissor") {
    document.getElementById("results").innerHTML = "YOU WIN!";
    document.getElementById('results').style.color = 'green';
  }
  if (userChoice === "rock" && computerChoice === "rock") {
    document.getElementById("results").innerHTML = "YOU ARE TIED!";
    document.getElementById('results').style.color = 'yellow';
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    document.getElementById("results").innerHTML = "YOU LOSE!";
    document.getElementById('results').style.color = 'red';
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    document.getElementById("results").innerHTML = "YOU WIN!";
    document.getElementById('results').style.color = 'green';
  }
  if (userChoice === "paper" && computerChoice === "paper") {
    document.getElementById("results").innerHTML = "YOU ARE TIED!";
    document.getElementById('results').style.color = 'yellow';
  }
  if (userChoice === "paper" && computerChoice === "scissor") {
    document.getElementById("results").innerHTML = "YOU LOSE!";
    document.getElementById('results').style.color = 'red';
  }
  if (userChoice === "scissor" && computerChoice === "paper") {
    document.getElementById("results").innerHTML = "YOU WIN!";
    document.getElementById('results').style.color = 'green';
  }

  if (userChoice === "scissor" && computerChoice === "scissor") {
    document.getElementById("results").innerHTML = "YOU ARE TIED!";
    document.getElementById('results').style.color = 'yellow';
  }

  if (userChoice === "scissor" && computerChoice === "rock") {
    document.getElementById("results").innerHTML = "YOU LOSE!";
    document.getElementById('results').style.color = 'red';
  }
  if (results === "YOU WIN!") {
    score++;
    document.getElementById("score").innerHTML = "Your Score: " + score;
    console.log(results);
  }
  if (results === "YOU LOSE!") {
    computerScore++;
    document.getElementById('computerScore').innerHTML = "The Computer's Score: " + computerScore;
  }
    if (computerScore > score) {
    document.getElementById('computerScore').style.color = 'green';
  } else {
    document.getElementById('computerScore').style.color = 'red';
  }
  if (score > computerScore) {
    document.getElementById('score').style.color = 'green';
  } else {
    document.getElementById('score').style.color = 'red';
  }
  if (score === computerScore) {
    document.getElementById('computerScore').style.color = 'yellow';
    document.getElementById('score').style.color = 'yellow';
  } 
}



