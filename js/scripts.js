function Game(player1Object, player2Object) {
    this.player1 = player1Object;
    this.player2 = player2Object;
    this.currentPlayer = 1;
    this.round = 1;
    this.currentScore = 0;
};



function Player(name) {
    this.name = name
    this.totalScore = 0
}

// to make turns for user player
Game.prototype.turn = function() {

}
// to be used to build computer strategy
Player.prototype.computerAi = function() {

}

//victory or loss conditions/reset of game
Player.prototype.checkScore = function() {
    return this.totalScore >= 100 ? true : false;
    
    // if (this.totalScore >= 100){
    //     return true;
    // } else {
    //     return false;
    // }
};

// these below are for computer and player
let newPlayer = new Player("jim")
let computerPlayer = new Player("Computer")
let currentGame = new Game

function rollDie() {
    Math.floor(Math.random() * 6) + 1;
};

// these are to be used for individual dice rolls,
const diceRollMath = Math.floor(Math.random() * 6) + 1;
// const mathForTurn = Math.floor(Math.random() * 2) + 1;

// console.log(diceRollMath);
// console.log(getRandom());
// console.log(rollDie());
// console.log(newPlayer);
// console.log(computerPlayer);
// console.log(currentGame);

$(document).ready(function() {
    
    $("button#resetThis").click(function(event) {
        event.preventDefault();
        $(".well").show();
        $(".hiddenButton").show();
        // $("#playersScore").show();
        // $("#playButtonArea").show();
    });
});
