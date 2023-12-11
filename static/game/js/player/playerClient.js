let playerCient = (function() {
    let _publicFunctions = {};
    let _server = environment.local;

    _publicFunctions.getPlayers = function(){
        return $.ajax({
            url: `${_server}/room/players`,
            type: 'GET',
        });
    }

    return _publicFunctions;

})();