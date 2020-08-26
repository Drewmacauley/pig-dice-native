// Business Logic for Scoreboard
function ScoreBoard() {
  this.userNames = [],
  this.currentScore = 0
}

Player.prototype.scoreTally(roll) {
  let rollvalue = getRandomInt();
  let scoreArray = [];
    if (rollvalue > 1) {
      scoreArray.push(rollvalue);
    } else {
      alert("end of turn");
    } 
  return reduce(scoreArray); 
}


//Business Logic for Players
function Player(name, roll, turnScore) {
  this.name = name,
  this.roll = roll,
  this.turnScore = turnScore
}

Player.prototype.userName = function() {
  return this.name;
}




// Randomizer Logic
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (7 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
}


// User Interface Logic
