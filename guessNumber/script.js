let ans = Math.trunc(Math.random() * 20 + 1);
console.log(ans);
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  ans = Math.trunc(Math.random() * 20 + 1);
  console.log(ans);
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  displaymessage("Start guessing...");
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "No number 🙅‍♀️";
    } else if (guess === ans) {
      document.querySelector(".number").textContent = ans;
      document.querySelector("body").style.backgroundColor = "gray";
      document.querySelector(".number").style.width = "30rem";
      displaymessage("Correct Number 🎉");
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = score;
      }
    } else if (guess !== ans) {
      score--;
      displaymessage(
        guess > ans ? "📈 High Number Guessed" : "📉 Low Number Guessed"
      );
      document.querySelector(".score").textContent = score;
    }
  } else if (score == 0) {
    displaymessage("☹ You lost the game!");
  }
});
