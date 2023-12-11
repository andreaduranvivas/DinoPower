let dead = (function() {
    let _publicFunctions = {};
    let gameIsOver = false;

    let _gameOver = function() {
        gameIsOver = true;
        document.dispatchEvent(new Event("gameOver"));
        player.setAlive(false);
        socketSetUp.getStompClient().send(`/app/deadPlayer`, {}, JSON.stringify({number: player.getPlayerNumber(), points: player.getPoints(), alive: player.getAlive()}));
    }

    let _drawGameOver = function(){
        let b = document.getElementById("board");
        b.classList.add("invisible");
        let gameOverElement = document.createElement("div");
        gameOverElement.id = "gameOver";
        document.getElementById("contentLandscape").appendChild(gameOverElement);
    }

    _publicFunctions.init = function(){
        _gameOver();
        _drawGameOver();
    }

    return _publicFunctions;
})();