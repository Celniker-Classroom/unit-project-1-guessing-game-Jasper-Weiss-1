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