var rawName = prompt("Enter your name:");
if (!rawName || rawName.trim() === "") {
  rawName = "Player";
}
rawName = rawName.trim();
var playerName =
  rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();

var answer = 0;
var range = 3;
var guesses = 0;
var wins = 0;
var totalWinningGuesses = 0;
var scores = [];
var roundStart = 0;
var roundTimes = [];
var fastestTime = null;
var gameActive = false;

function getSuffix(day) {
 
    if (day >= 11 && day <= 13) {
    return "th";
  }
  if (day % 10 === 1) {
    return "st";
  }
  if (day % 10 === 2) {
    return "nd";
  }
  if (day % 10 === 3) {
    return "rd";
  }
  return "th";
}

function time() {
  var now = new Date();

  var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var month = months[now.getMonth()];
  var day = now.getDate();
  var year = now.getFullYear();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return month + " " + day + getSuffix(day) + ", " + year + " " +
         hours + ":" + minutes + ":" + seconds;
}

function updateDateDisplay() {
  document.getElementById("date").textContent = time();
}

function getSelectedRange() {
  var levels = document.getElementsByName("level");
  for (var i = 0; i < levels.length; i++) {
    if (levels[i].checked) {
      return Number(levels[i].value);
    }
  }
  return 3;
}

function setLevelDisabled(disabled) {
  var levels = document.getElementsByName("level");
  for (var i = 0; i < levels.length; i++) {
    levels[i].disabled = disabled;
  }
}

function play() {
  range = getSelectedRange();
  answer = Math.floor(Math.random() * range) + 1;
  guesses = 0;
  roundStart = new Date().getTime();
  gameActive = true;

  document.getElementById("msg").textContent =
    playerName + ", guess a number between 1 and " + range + ".";

  document.getElementById("guessBtn").disabled = false;
  document.getElementById("giveUpBtn").disabled = false;
  document.getElementById("playBtn").disabled = true;
  document.getElementById("guess").disabled = false;
  document.getElementById("guess").value = "";
  document.getElementById("guess").focus();

  setLevelDisabled(true);
}

function updateLeaderboard() {
  scores.sort(function (a, b) {
    return a - b;
  });

  var spots = document.getElementsByName("leaderboard");
  for (var i = 0; i < spots.length; i++) {
    if (i < scores.length) {
      spots[i].textContent = scores[i];
    } else {
      spots[i].textContent = "--";
    }
  }
}

function updateScore(score, isWin) {
  scores.push(score);
  updateLeaderboard();

  if (isWin) {
    wins++;
    totalWinningGuesses += score;
  }

  document.getElementById("wins").textContent = "Total wins: " + wins;

  if (wins > 0) {
    document.getElementById("avgScore").textContent =
      "Average Score: " + (totalWinningGuesses / wins);
  } else {
    document.getElementById("avgScore").textContent = "Average Score: 0";
  }
}

function updateTimers(endMs) {
  var elapsed = (endMs - roundStart) / 1000;
  roundTimes.push(elapsed);

  if (fastestTime === null || elapsed < fastestTime) {
    fastestTime = elapsed;
  }

  var total = 0;
  for (var i = 0; i < roundTimes.length; i++) {
    total += roundTimes[i];
  }

  var average = total / roundTimes.length;

  document.getElementById("fastest").textContent =
    "Fastest Game: " + fastestTime.toFixed(2) + " seconds";

  document.getElementById("avgTime").textContent =
    "Average Time: " + average.toFixed(2) + " seconds";
}

updateDateDisplay();
setInterval(updateDateDisplay, 1000);
document.getElementById("playBtn").addEventListener("click", play);
document.getElementById("guessBtn").addEventListener("click", makeGuess);
document.getElementById("giveUpBtn").addEventListener("click", giveUp);

