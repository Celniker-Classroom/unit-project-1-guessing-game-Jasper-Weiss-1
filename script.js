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