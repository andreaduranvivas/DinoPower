let board = (function() {
    let _publicFunctions = {};

    let _startGame = function () {
        let land = document.getElementById("board")
        land.classList.remove("invisible");
    }

    _publicFunctions.init = function(){
        _startGame();
    }
    

    return _publicFunctions;
})();

module.exports = board;
