let app = (function(){
    let _publicFunctions = {};

    let _killPlayer = function(playerP){
        socketSetUp.getStompClient().send(`/app/removePlayer`, {}, JSON.stringify({number: playerP.number, points: playerP.points}));
    }
    
    _publicFunctions.killAllPlayers = function(){
        playerCient.getPlayers().then((res => {
            res.forEach(e => _killPlayer(e));
            socketSetUp.disconnect();
        }));
    };
    _publicFunctions.init = function(){
        socketSetUp.connect();
    }
    return _publicFunctions;
})();