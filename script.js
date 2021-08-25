"use script";
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".guess").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);
  console.log(guess, typeof guess);
  function displayMessage(message) {
    document.querySelector(".hint").textContent = message;
  }
  if (!guess || guess > 20) {
    // document.querySelector(".hint").textContent =
    //   "Number is not between 1 and 20";
    displayMessage("Number is not between 1 and 20");
  } else if (guess === secretNumber) {
    // document.querySelector(".hint").textContent = "Correct guess";
    displayMessage("Correct guess :)");
    document.querySelector(".guess").textContent = secretNumber;
    if (highscore < score) {
      document.querySelector(".highscore").textContent = score;
      highscore = score;
    }
    document.querySelector("body").style.backgroundColor = "rgb(2, 248, 15)";
  } else if (score > 1) {
    if (guess < secretNumber) {
      // document.querySelector(".hint").textContent = "Too low";
      displayMessage("Too low");
    } else if (guess > secretNumber) {
      // document.querySelector(".hint").textContent = "Too high";
      displayMessage("Too high");
    }
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("You loose :(");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").textContent = "?";
  document.querySelector(".hint").textContent = "Start Guessing!!";
  document.querySelector(".score").textContent = score;
});
