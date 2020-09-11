let userChoice;
let computerChoice;
let computerList = ["rock", "paper", "scissor"];
let choice = computerList[Math.floor(Math.random() * computerList.length)];

let rock = document
  .getElementById("rock")
  .addEventListener("click", function(e) {
    rockPaperScissor(e.target.id,computerList[Math.floor(Math.random() * computerList.length)] );
  });

let paper = document
  .getElementById("paper")
  .addEventListener("click", function(e) {
    rockPaperScissor(e.target.id, computerList[Math.floor(Math.random() * computerList.length)] );
  });

let scissor = document
  .getElementById("scissor")
  .addEventListener("click", function(e) {
    rockPaperScissor(e.target.id, computerList[Math.floor(Math.random() * computerList.length)] );
  });

// userChoice = "rock";
// computerChoice = choice;
  
// console.log(userChoice);
// console.log(computerChoice);



function rockPaperScissor(userChoice, computerChoice) {
  document.getElementById('computerChooses').innerHTML = computerChoice.toUpperCase();
  document.getElementById('yourChoice').innerHTML = userChoice.toUpperCase();

  if (userChoice === "rock" && computerChoice === "scissor") {
    document.getElementById("results").innerHTML = "YOU WIN!";
  }
  if (userChoice === "rock" && computerChoice === "rock") {
    document.getElementById("results").innerHTML = "YOU ARE TIED!";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    document.getElementById("results").innerHTML = "YOU LOSE!";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    document.getElementById("results").innerHTML = "YOU WIN!";
  }
  if (userChoice === "paper" && computerChoice === "paper") {
    document.getElementById("results").innerHTML = "YOU ARE TIED!";
  }
  if (userChoice === "paper" && computerChoice === "scissor") {
    document.getElementById("results").innerHTML = "YOU LOSE!";
  }
  if (userChoice === "scissor" && computerChoice === "paper") {
    document.getElementById("results").innerHTML = "YOU WIN!";
  }

  if (userChoice === "scissor" && computerChoice === "scissor") {
    document.getElementById("results").innerHTML = "YOU ARE TIED!";
  }

  if (userChoice === "scissor" && computerChoice === "rock") {
    document.getElementById("results").innerHTML = "YOU LOSE!";
  }
  if (userChoice === undefined || computerChoice === undefined) {
    document.getElementById("results").innerHTML = "PICK A WEAPON!";
  }
}


// let computerChooses = document.getElementById('computerChooses').innerHTML = computerChoice;

// rockPaperScissor(userChoice, computerChoice);

// computer randomly picks rock, paper or scissor. Perhaps from list?
// user picks rock, paper or scissor
// Winner is decided and displayed
// Keep track of score
