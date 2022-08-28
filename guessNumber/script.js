let ans = Math.trunc(Math.random() * 20 + 1);
console.log(ans);
let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  ans = Math.trunc(Math.random() * 20 + 1);
  console.log(ans);
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "No number 🙅‍♀️";
    } else if (guess === ans) {
      document.querySelector(".message").textContent = "Correct Number 🎉";
      document.querySelector(".number").textContent = ans;
      document.querySelector("body").style.backgroundColor = "gray";
      document.querySelector(".number").style.width = "30rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = score;
      }
    } else if (guess > ans) {
      score--;
      document.querySelector(".message").textContent = "📈 High Number Guessed";
      document.querySelector(".score").textContent = score;
    } else if (guess < ans) {
      score--;
      document.querySelector(".message").textContent = "📉 Low Number Guessed";
      document.querySelector(".score").textContent = score;
    }
  } else if (score == 0) {
    document.querySelector(".message").textContent = "☹ You lost the game!";
  }
});
