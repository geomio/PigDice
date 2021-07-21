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

Game.prototype.addRollToScore = function(roll) {
    if (roll === 1) {
        this.currentScore = 0;
        this.changeCurrentPlayerValue();
        highlightCurrentPlayer(this.currentPlayer);
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

Game.prototype.changeCurrentPlayerValue = function() {
    if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
    }else if (this.currentPlayer ===2) {
        this.currentPlayer = 1;
    }
    console.log(this.currentPlayer);
}

Game.prototype.endTurn = function() {

    this.addCurrentScoreToPlayer();
    let gameEndCheck = this.checkScore();
    if (gameEndCheck === true) {
        $("#roll").hide()
        $("#hold").hide()
        $("#winMessage").text("Congrats you won!");
        $("#resetThis").show();
    }else {
        this.changeCurrentPlayerValue();  
    }
    
};

//victory or loss conditions/reset of game
Game.prototype.checkScore = function() {
    if (this.currentPlayer === 1) {
        return this.player1.totalScore >= 100 ? true : false;
    }else if (this.currentPlayer === 2) {
        return this.player2.totalScore >= 100 ? true : false;
    }
};

function rollDie() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    return rollResult;
};


function highlightCurrentPlayer(currentPlayer) {
    if (currentPlayer === 1) {
        $("#player").addClass("player-selected");
        $("#pcPlayer").removeClass("player-selected"); 
    }else if (currentPlayer === 2) {
        $("#pcPlayer").addClass("player-selected");
        $("#player").removeClass("player-selected"); 
    } 
    $("#hold").hide();
};


// user interface below
$(document).ready(function() {   
    $("button#resetThis").click(function(event) {
        event.preventDefault();
        let newPlayer = new Player("player1")
        let computerPlayer = new Player("Computer")
        let currentGame = new Game(newPlayer, computerPlayer)
        $(".well").show();
        $("#roll").show();
        $("#currentScoreArea").show();
        highlightCurrentPlayer(currentGame.currentPlayer);
        $(".startButtonText").html("<p> Start </p>");
        $(".startButtonText").text("Restart");
        $("#resetThis").hide();

        $("button#roll").click(function() {
            let diceRollMath = rollDie();
            $("#hold").show();
            currentGame.addRollToScore(diceRollMath);
            $("#displayRoll").html("<p> 0 </p>")
            $("#displayRoll").text(diceRollMath)
            $("#currentScoreDisplay").html("0")
            $("#currentScoreDisplay").text(currentGame.currentScore)
        });

        $("button#hold").click(function(){
            $("#hold").hide();
            currentGame.endTurn();
            $("#playTotalScore").text(currentGame.player1.totalScore);
            $("#pcPlayTotalScore").text(currentGame.player2.totalScore);
            highlightCurrentPlayer(currentGame.currentPlayer);
        });
    });
});
