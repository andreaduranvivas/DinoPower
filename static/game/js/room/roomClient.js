let roomClient = (function(){

    let _publicFunctions = {}
    let _server = environment.local;

    let _showError = (err) => {};

    let _success = () => {};

    _publicFunctions.joinGame = function (playerNumber) {
        return $.ajax({
            url: `${_server}/room/players`,
            type: 'POST',
            data: JSON.stringify({
                number: playerNumber,
                points: 0,
            }),
            contentType: "application/json",
            success: res => _success(res),
            error: err => _showError(err),
        });
    };

    _publicFunctions.createRoom = function (playerNumber) {  
        return $.ajax({
            url: `${_server}/room`,
            type: 'POST',
            data: JSON.stringify({
                number: playerNumber,
                points: 0
            }),
            contentType: "application/json",
            success: res => _success(res),
            error: err => _showError(err),
        });
    };

    return _publicFunctions;
})();