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

  var turnScore = 0;


    function takeTurn(hold, playerDiceRoll){

      if (playerDiceRoll === 1) {
        switchPlayer =  true;

      } else if (hold === true) {
        console.log(turnScore);
        return turnScore;

      } else {

        switchPlayer = false;
        turnScore = turnScore + playerDiceRoll;
        console.log(playerDiceRoll, turnScore);
      }

      return turnScore;
      console.log( playerDiceRoll, turnScore);
    }


  $('#rollButton').click(function(){
    var hold  = false;
    var playerDiceRoll= dice();
    takeTurn(hold, playerDiceRoll);
   });

  $('#holdButton').click(function(){
    var hold = true;
    var playerDiceRoll= 0;
    takeTurn(hold, playerDiceRoll);
  });


    var playerOne = new Player("Bob", "0", "0");
    var playerTwo = new Player("Alice", "0", "0");

  });

// });
