function Game(player1Object, player2Object) {
    this.player1 = player1Object;
    this.player2 = player2Object;
    this.currentPlayer = 1;
    this.currentScore = 0;
};



function Player(name) {
    this.name = name
    this.totalScore = 0
}

// to make turns for user player
Game.prototype.turn = function() {

}

Game.prototype.addRollToScore = function(roll) {
    if (roll === 1) {
        this.currentScore = 0
    }else (
        this.currentScore += roll
    )
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

function rollDie() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    return rollResult;
};


// user interface below
$(document).ready(function() {

    
    
    $("button#resetThis").click(function(event) {
        event.preventDefault();
        let newPlayer = new Player("player1")
        let computerPlayer = new Player("Computer")
        let currentGame = new Game
        $(".well").show();
        $(".hiddenButton").show();
        $("#currentScoreArea").show();
        // $("#playersScore").show();
        // $("#playButtonArea").show();
        $(".startButtonText").html("<p> Start </p>");
        $(".startButtonText").text("Restart");
        
        $("button#roll").click(function() {
            let diceRollMath = rollDie();
            currentGame.addRollToScore(diceRollMath);
            console.log(currentGame.currentScore);
            $("#displayRoll").html("<p> 0 </p>")
            $("#displayRoll").text(diceRollMath)
            // $("#currentScoreDisplay").html("<p> 0 </p>")
            $("#currentScoreDisplay").text(this.currentScore)
        });
    });
});
