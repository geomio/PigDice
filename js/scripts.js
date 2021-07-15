function Game(player1Object, player2Object) {
    this.player1 = player1Object;
    this.player2 = player2Object;
    this.currentPlayer = 1
    this.round = 1;
};



function Player(name) {
    this.name = name
    this.score = 0
}

// to make turns for user player
Game.prototype.turn = function() {

}
// to be used to build computer strategy
Game.prototype.computerAi = function() {

}

//victory or loss conditions/reset of game
Game.prototype.End = function() {
    if (this.score === 100)
}

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

console.log(diceRollMath);
console.log(getRandom())

