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






// User Interface Logic ---------

var playerOne = new Player("Bob", "0", "0");
var playerTwo = new Player("Alice", "0", "0");

// var result = dice();

console.log(dice(), dice());


console.log(playerOne, playerTwo);


});
