$(document).ready(function () {

  // Business Logic for Player ---------
  function Player(name, totalScore) {
    this.name = name,
    this.totalScore = totalScore
  }




  //
function switchPlayers(player){
    if (player === playerOne) {
      return player = playerTwo;
    } else if (player === playerTwo){
      return player = playerOne;
    } else {

    }
  }

  // Business Logic for Dice ---------

  function dice() {
    return (Math.floor(Math.random() * Math.floor(6))) + 1;
  }

  // Business logic for game
  var turnScore = 0;

  function takeTurn(hold, playerDiceRoll){
console.log(player.name, "total = " +  player.totalScore);
    if (playerDiceRoll === 1) {
      turnScore = 0;
      player = switchPlayers(player);
      console.log("rolled a 1, switched to" + player.name);
    } else if (hold === true) {
      player.totalScore = player.totalScore + turnScore;
      turnScore = 0;
      console.log(player.totalScore, player.name);
      player = switchPlayers(player);
      console.log("switched to " + player.name);
      return turnScore;
    } else {
      turnScore = turnScore + playerDiceRoll;
      console.log(turnScore, player.name, playerDiceRoll);
    }
    return turnScore;

  }

  $('#rollButton').click(function(){
    var hold  = false;
    var playerDiceRoll= dice();
    takeTurn(hold, playerDiceRoll);
    // console.log("roll pushed" + player);
   });

  $('#holdButton').click(function(){
    var hold = true;
    var playerDiceRoll= 0;
    takeTurn(hold, playerDiceRoll);
  });

  var playerOne = new Player("Bob", 0);
  var playerTwo = new Player("Alice", 0);

  var player = playerOne;


  });
