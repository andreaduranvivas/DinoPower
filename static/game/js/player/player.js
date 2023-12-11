let player = (function(api) {
    let _number = 0;
    let _points = 0;
    let _alive = true;

    let _publicFunctions = {};


    let _join = (playerBody) => {
    };


    _publicFunctions.getAlive = function(){
        return _alive;
    };

    _publicFunctions.setAlive = function(alive){
        _alive = alive;
    }

    _publicFunctions.join = function () { 
        _join(playerBody);
    };
    _publicFunctions.setNumber = function(playerNumber){
        _number = playerNumber;
    }


    _publicFunctions.getPlayerNumber = function(){
        return _number;
    };

    _publicFunctions.getPoints = function(){
        return _points;
    };

    _publicFunctions.addtPoints = function(points){
        _points += points;
    };

    _publicFunctions.isAlive = function(){
        return _alive;
    };

    _publicFunctions.setAlive = function(alive){
        _alive = alive;
    };

    _publicFunctions.init = function(){
        userBar.addothers();
    }

    return _publicFunctions;
})(playerCient);