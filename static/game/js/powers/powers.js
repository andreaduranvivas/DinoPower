let powers = (function() {
    let _publicFunctions = {}
    let powerInterval;
    let waitTime = 5000;
    let isPowerAvailable = false;

    let _speedPower = function(){
    };

    let _showPowerButton = function() {
        document.querySelector("#power").disabled = false;
        isPowerAvailable = true;
        document.querySelector("#power").classList.remove("invisible");
    };

    let _hidePowerButton = function() {
        document.querySelector("#power").disabled = true;
        isPowerAvailable = false;
        document.querySelector("#power").classList.add("invisible");
        //setTimeout(_showPowerButton(), 5000);
        _startPowerAppearance();
    };
    
    let _powerListener = function(){
        $("#power").on("click", (event) => {
            player.addtPoints(20);
            socketSetUp.getStompClient().send(`/app/speedPower`, {}, JSON.stringify({number: player.getPlayerNumber(), points: player.getPoints()}));
            //room.renderPlayerPoints();
            //_speedPower();
            //_hidePowerButton();
        });
    };

    let _startPowerAppearance = function() {
        //setTimeout(_showPowerButton(), 5000);
        if(player.getAlive()){
            powerInterval = setInterval(function() {
                _showPowerButton();
                clearInterval(powerInterval);
            }, 10000);
        }
    };
    _publicFunctions.showPowerButton = function(){
        _showPowerButton();
    };

    _publicFunctions.hidePowerButton = function(){
        _hidePowerButton();
    }

    _publicFunctions.init = function(){
        //_startPowerRandomAppearance();
        _showPowerButton();
        _powerListener();
    }

    return _publicFunctions
})();