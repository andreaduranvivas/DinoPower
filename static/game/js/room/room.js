let room = (function(api){
    let _publicFunctions = {};

    let _playerNumber = 0;

    
    let _joinGame = () => {
        _playerNumber = player.getPlayerNumber();
        api.joinGame(_playerNumber).then((res)=>{
            if(res) {
                socketSetUp.connect(() => {
                    socketSetUp.getStompClient().send(`/topic/joinGame`, {}, JSON.stringify({number: _playerNumber, points: 0}));
                });
            }
        });
    };
    
    
    let _createAndJoinRoom = () => {
        _playerNumber = player.getPlayerNumber();
        api.joinGame(_playerNumber).then((res) => {
            player.setNumber(res);
            socketSetUp.connect(() => {
                socketSetUp.getStompClient().send(`/topic/joinGame`, {}, JSON.stringify({number: _playerNumber, points: 0}));
            });
        });
    };
    let _killPlayer = function(playerP){
        socketSetUp.getStompClient().send(`/app/removePlayer`, {}, JSON.stringify({number: playerP.getPlayerNumber(), points: playerP.getPoints()}));
        userBar.addothers();
        socketSetUp.disconnect();
    }

    
    let _killPlayerEvent = function(){
        $("#killPlayer").on("click", (event) => {
            _killPlayer(player);
        });
    };
    let _updatePlayers = function(){
        board.init();
        titan.init();
        collision.init();
        document.getElementById("UpdatePlayers").className += " invisible";
        _renderPlayerNumber(player.getPlayerNumber());
        userBar.addothers();
        score.init();
        powers.init();
        
    }
    let _updatePlayersEvent = function(){
        $("#UpdatePlayers").on("click", (event) => {
            socketSetUp.getStompClient().send(`/app/joinGame`, {}, JSON.stringify({number: player.getPlayerNumber(), points: player.getPoints()}));
        })
    };

    let _renderPlayerNumber = function(number){
        let playerNumber = $("#player-number");
        playerNumber.empty();
        playerNumber.append(
            `Player Number: 
            ${number}
            `);
    }

    let _renderPlayerPoints = function(points){
        let playerNumber = $("#player-points");
        playerNumber.empty();
        playerNumber.append(
            `Points: 
            ${points}
            `);
    }

    
    _publicFunctions.joinGame = function (playerNumber) {  
        player.setNumber(playerNumber);
        _joinGame();
        player.init();
    };

    _publicFunctions.renderPlayerPoints = function(){
        score.init();
    }

    _publicFunctions.updatePlayers = function(){
        _updatePlayers();
    }
    _publicFunctions.killAllPlayers = function(){
        playerCient.getPlayers().then((res => {
            res.forEach(_killPlayer);
        }));
    }
    
    _publicFunctions.init = function () { 
        _createAndJoinRoom();
        _killPlayerEvent();
        _updatePlayersEvent();
    };
    return _publicFunctions;
})(roomClient);