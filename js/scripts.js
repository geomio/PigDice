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
};

Game.prototype.addCurrentScoreToPlayer = function() {
    if (this.currentPlayer === 1) {
        this.player1.totalScore += this.currentScore;
    }else if (this.currentPlayer === 2) {
        this.player2.totalScore += this.currentScore;
    }
    this.currentScore = 0;
};

Game.prototype.changeCurrentPlayerValue() = function() {
    if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
    }else if (this.currentPlayer ===2) {
        this.currentPlayer = 1;
    }
    
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

function output() {

};

function highlightCurrentPlayer(currentPlayer) {
    if (currentPlayer === 1) {
        $("#player").addClass("player-selected");
        $("#pcPlayer").removeClass("player-selected"); 
    }else if (currentPlayer === 2) {
        $("#pcPlayer").addClass("player-selected");
        $("#player").removeClass("player-selected"); 
    }
};


// user interface below
$(document).ready(function() {

    
    
    $("button#resetThis").click(function(event) {
        event.preventDefault();
        let newPlayer = new Player("player1")
        let computerPlayer = new Player("Computer")
        let currentGame = new Game(newPlayer, computerPlayer)
        $(".well").show();
        $(".hiddenButton").show();
        $("#currentScoreArea").show();
        highlightCurrentPlayer(currentGame.currentPlayer);
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
            $("#currentScoreDisplay").html("0")
            $("#currentScoreDisplay").text(currentGame.currentScore)
        });

        $("button#hold").click(function(){
            alert(" Turn Over")
        });
    });
});
