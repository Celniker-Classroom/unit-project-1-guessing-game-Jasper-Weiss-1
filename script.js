var rawName = prompt("Enter your name:");
if (!rawName || rawName.trim() === "") {
  rawName = "Player";
}
rawName = rawName.trim();
var playerName =
  rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();