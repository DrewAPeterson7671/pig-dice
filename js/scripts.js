$(document).ready(function () {

  // Business Logic for Player ---------
  function Player(name, totalScore, turnScore) {
    this.name = name,
    this.totalScore = totalScore,
    this.turnScore = turnScore
  }




// Business Logic for Dice ---------

  function dice() {
    return (Math.floor(Math.random() * Math.floor(6))) + 1;
  }

// Business logic for game

// take a turn
//button push to first roll
var turnScore = 0;



$('#rollButton').click(function(){
  var hold  = false;
  var playerDiceRoll= dice();
  takeTurn(hold, playerDiceRoll);
  // console.log(playerDiceRoll, hold);

$('#holdButton').click(function(){
  var hold = true;
  var playerDiceRoll= 0;
  takeTurn(hold, playerDiceRoll);
});



function takeTurn(hold, playerDiceRoll){



    if (playerDiceRoll === 1) {
      switchPlayer =  true;

    } else if (hold === true) {
      console.log(turnScore);
      return turnScore;


    } else {
      // roll button was hit
      //accumulate turn score
      switchPlayer = false;
      turnScore = turnScore + playerDiceRoll;

      console.log(playerDiceRoll, turnScore);
    }
    
    return turnScore;
    console.log( playerDiceRoll, turnScore);
}

// call function switch player


});

//wait for user button




// User Interface Logic ---------

var playerOne = new Player("Bob", "0", "0");
var playerTwo = new Player("Alice", "0", "0");

// var result = dice();




});
