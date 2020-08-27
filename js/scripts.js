// console.log(this)
// Business Logic for Scoreboard
function ScoreBoard() {
  // this.players = []
  this.player1 = new Player("", 0, 0, 0);
  this.player2 = new Player("", 0, 0, 0);
}
//doc ready
// let newGame = new ScoreBoard();
// let firstDiceRoll = newGame.player1.diceRoll()
function otherScoreBoard(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}
//doc ready
//let firstPlayer = new Player("name", etc...)
//let secondPlayer = new Player("name", etc...)
// let newGame = new otherScoreBoard(firstPlayer, secondPlayer)
// let firstDiceRoll = newGame.player1.diceRoll()

ScoreBoard.prototype.addPlayer = function(player) {
  //player.id = this.assignId();
  //player.score = 
  this.players.push(player);
}




//Business Logic for Players
function Player(name, rollValue, turnScore, playerScore) {
  this.name = name,
  this.rollValue = rollValue,
  this.turnScore = turnScore,
  this.playerScore = playerScore
}

Player.prototype.userName = function() {
  return this.name;
}

Player.prototype.scoreTotal = function() {
  return this.playerScore += this.turnScore;
}

Player.prototype.diceRoll = function() {
  let rollValue = getRandomInt();
  let scoreArray = [];
    if (rollValue > 1) {
      scoreArray.push(rollValue);
    } else {
      this.turnScore = 0;
    } 
  return this.turnScore += reduce(scoreArray); 
}


// Random Integer Logic
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (7 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
}



//User Interface Logic

$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    const inputtedPlayerName = $("input#userName").val();
    let newPlayer = new Player(inputtedPlayerName);
    addPlayer(newPlayer);
  });
});






















/*
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
*/