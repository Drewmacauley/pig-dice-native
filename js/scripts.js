// Business Logic for Scoreboard
function ScoreBoard() {
  this.players = [],
 // this.currentScore = 0
  this.currentId = 0
}


ScoreBoard.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

ScoreBoard.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}



//Business Logic for Players
function Player(name, roll) {
  this.name = name,
  this.roll = roll
  //this.turnScore = turnScore
}

Player.prototype.userName = function() {
  return this.name;
}

Player.prototype.addScore = function() {
  return this.currentScore.scoreValue();
//  return this.currentScore;
}

Player.prototype.scoreValue = function() {
  let rollValue = getRandomInt();
  let scoreArray = [];
    if (rollValue > 1) {
      scoreArray.push(rollValue);
    } else {
      alert("end of turn");
    } 
  return reduce(scoreArray); 
}


// Randomizer Logic
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (7 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
}


// User Interface Logic
let scoreBoard = new ScoreBoard ();

function displayPlayerNames(scoreBoardToDisplay) { 
  let playerList = $("ul#players");
  let htmlForPlayerNames = "";
  scoreBoardToDisplay.players.forEach(function(player) { //trouble here
    htmlForPlayerNames += "<li id=" + player.id + ">" + name + "Score: " + "</li>";
  });
  playerList.html(htmlForPlayerNames);
};


function attachPlayerListeners() {
  $("#roll").on("click", "#roll", function() {
    player.scoreValue(this.player);
  });
};


$(document).ready(function() {
  attachPlayerListeners();
  $("#form-user").submit(function(event) {
    event.preventDefault();
    const inputtedName = $("input#userName").val();
    $("input#userName").val("");
    let newPlayer = new Player(inputtedName);
    scoreBoard.addPlayer(newPlayer);
    displayPlayerNames(ScoreBoard);
  });
});


//Co-authored-by: Diego Salazar <salazardiego343@gmail.com>
