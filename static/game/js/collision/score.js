let score = (function(){
    let _publicFunctions = {};
    
    let _addPoints = function(){
        //Aumenta cada segundo
        setInterval(function () {
            if(player.getAlive()){
                player.addtPoints(1);
                document.getElementById("player-points").innerText =  `Points: ${player.getPoints()}`;
                //document.getElementById("points").innerHTML = player.getpoints();
            }
        }, 1000)
        
    }
    _publicFunctions.init = function(){
        _addPoints();
    }

    return _publicFunctions;
})();